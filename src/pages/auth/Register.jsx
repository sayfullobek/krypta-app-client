import React, {useState} from "react";
import '../../assets/auth.scss'
import {Button, Modal, ModalBody, ModalFooter} from "reactstrap";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {RegisterHandler} from "../../serverConnect/service/AuthService";
import {stringDataIf} from "../../handlers/auth";
import '../../assets/authstyle'
import {error} from "../../utils/MyToast";

export const Register = (lan) => {
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);
    const navigate = useNavigate()
    const linkReferral = useLocation().search.substr(14)

    const [email, setEmail] = useState('')
    const [referralCode, setReferralCode] = useState(linkReferral)
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [prePassword, setPrePassword] = useState('')
    const [agree, setAgree] = useState(false)

    const [username, setUserName] = useState('phone')
    const [seeCode, setSeeCode] = useState(false)
    const [seePreCode, setSeePreCode] = useState(false)

    const toggle = () => setOpen(!open);
    const handleSelectChange = ({target: {value}}) => {
        setFocusAfterClose(JSON.parse(value));
    };
    const iAgree = () => {
        setAgree(!agree)
    }

    // useEffect(() => {
    //     const redirectAdminPanel = () => {
    //         const token = localStorage.getItem('token');
    //         const isAuth = isAuthenticated(token)
    //         if (isAuth) return navigate('/auth/user')
    //     }
    //     redirectAdminPanel()
    // }, [])
    const registerHandler = async () => {
        if (username === "phone") {
            if (stringDataIf(phoneNumber) || phoneNumber.length !== 9) {
                return error("telefon raqamingiz xato qayta urinib ko'ring")
            }
        } else {
            if (stringDataIf(email) || !email.endsWith("@gmail.com")) {
                return error("emailingiz xato qayta urinib ko'ring")
            }
        }
        if (password.trim().length < 6) {
            return error("parolingiz 6 ta belgidan ko'p bo'lishi shart")
        }
        if (password !== prePassword) {
            return error("parol va tasdiqlash paroli bir xil bo'lishi shart")
        }
        const data = {
            email,
            phoneNumber,
            password,
            prePassword,
            referralCode,
            status: username
        }
        await RegisterHandler(data, navigate)
    }


    return (
        <div>
            <section className="container forms" style={{height: '80vh'}}>
                <div className="form login">
                    <div className="form-content">
                        <header>{lan === "UZB" ? "Ro'yxatdan o'tish" : lan === "ENG" ? "Sign up" : "Зарегистрироваться"}</header>
                        <form>
                            <div className="d-flex align-items-center justify-content-center">
                                <button type={"button"} onClick={() => setUserName("phone")}
                                        className={username === "phone" ? "btn btn-primary" : "btn"}>number
                                </button>
                                <button type={"button"} className={username === "email" ? "btn btn-primary" : "btn"}
                                        onClick={() => setUserName("email")}>email
                                </button>
                            </div>
                            {username === "phone" ? (
                                <div className="field input-field">
                                    <input type="number"
                                           placeholder={lan === "UZB" ? 'Telefon raqamingizni kiriting' : lan === "ENG" ? "Enter your phone number" : "Введите свой номер телефона"}
                                           value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                                </div>
                            ) : (
                                <div className="field input-field">
                                    <input type="email"
                                           placeholder={lan === "UZB" ? "Emailingizni kiriting" : lan === "ENG" ? "Enter your email" : "Введите адрес электронной почты"}
                                           className="input"
                                           value={email} onChange={e => setEmail(e.target.value)}/>
                                </div>
                            )}
                            <div className="field input-field">
                                {linkReferral.length !== 0 ? (
                                    <input type="text"
                                           placeholder={lan === "UZB" ? 'referral kod' : lan === "ENG" ? "referral code" : "Промо-код"}
                                           value={linkReferral}
                                           className="input"/>
                                ) : (
                                    <input type="text"
                                           placeholder={lan === "UZB" ? 'referral kod' : lan === "ENG" ? "referral code" : "Промо-код'"}
                                           value={referralCode}
                                           className="input" onChange={e => setReferralCode(e.target.value)}/>
                                )}
                            </div>
                            <div className="field input-field">
                                <input type={seeCode ? "text" : "password"}
                                       placeholder={lan === "UZB" ? 'Parolingizni kiriting' : lan === "ENG" ? "Enter your password" : "Введите ваш пароль"}
                                       className="password" value={password}
                                       onChange={e => setPassword(e.target.value)}/>
                                <i className={seeCode ? "bi bi-eye eye-icon" : 'bi bi-eye-slash eye-icon'}
                                   onClick={() => setSeeCode(!seeCode)}/>
                            </div>
                            <div className="field input-field">
                                <input type={seePreCode ? "text" : "password"}
                                       placeholder={lan === "UZB" ? 'Parolni tasdiqlash uchun qayta kiriting' : lan === "ENG" ? "Re-enter the password to confirm" : "Повторно введите пароль для подтверждения"}
                                       className={"password"} value={prePassword}
                                       onChange={e => setPrePassword(e.target.value)}
                                />
                                <i className={seePreCode ? "bi bi-eye eye-icon" : 'bi bi-eye-slash eye-icon'}
                                   onClick={() => setSeePreCode(!seePreCode)}/>
                            </div>
                            <div className="form-link">
                                <Link to={"/auth/login"}
                                      className="forgot-pass">{lan === "UZB" ? 'kirish' : lan === "ENG" ? "Login" : "доступ"}</Link>
                            </div>
                            <div className="field button-field">
                                <button type={"button"}
                                        className={referralCode.length === 0 ? "btn btn-primary disabled" : "btn btn-primary text-light"}
                                        onClick={() => registerHandler()}>{lan === "UZB" ? "Ro'yxatdan O'tish" : lan === "ENG" ? "Sign up" : "Зарегистрироваться"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open}>
                <ModalBody>
                    <p>{}</p>
                    <label className="form-check-label" htmlFor="agree">
                        <input className="form-check-input" style={{marginRight: '10px'}} type="checkbox" value=""
                               id="agree" onClick={() => iAgree()} defaultChecked={agree} checked={agree}/>
                        I agree with terms and conditions
                    </label>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>
                        yopish
                    </Button>
                    <Button color={"primary"} onClick={toggle} disabled={!agree}>
                        roziman
                    </Button>
                </ModalFooter>
            </Modal>
        </div>

    )
}