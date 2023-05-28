import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {LoginHandler} from "../../serverConnect/service/AuthService";
import {stringDataIf} from "../../handlers/auth";
import {error} from "../../utils/MyToast";

export const Login = ({lan}) => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [seeCode, setSeeCode] = useState(false)
    const loginHandler = async () => {
        if (stringDataIf(username)) {
            return error("ma'lumot bo'sh bo'lmasin")
        }
        if (stringDataIf(password)) {
            return error("parolingiz bo'lishi shart")
        }
        let status = ""
        if (username.trim().length === 13 || username.trim().length === 9) {
            status = "phone";
        } else if (username.endsWith("@gmail.com")) {
            status = "email"
        } else {
            return error("username xato iltimos qayta urinib ko'ring")
        }
        const data = {username, password, status}
        await LoginHandler(data, navigate)
    }
    return (
        <div>
            <section className="container forms" style={{height: '60vh'}}>
                <div className="form login">
                    <div className="form-content">
                        <header>Kirish</header>
                        <form>
                            <div className="field input-field">
                                <input type="number" placeholder={lan === "ENG" ? "phone number" : "номер телефона"}
                                       className="input"
                                       value={username} onChange={e => setUsername(e.target.value)}/>
                            </div>
                            <div className="field input-field">
                                <input type={seeCode ? "text" : "password"}
                                       placeholder={lan === "ENG" ? "Enter your password" : "Введите ваш пароль"}
                                       className="password" value={password}
                                       onChange={e => setPassword(e.target.value)}/>
                                <i className={seeCode ? "bi bi-eye eye-icon" : 'bi bi-eye-slash eye-icon'}
                                   onClick={() => setSeeCode(!seeCode)}/>
                            </div>
                            <div className="form-link">
                                <Link to={localStorage.length !== 0 ? "/auth/register" : "/"}
                                      className="forgot-pass">{lan === "ENG" ? "Sign up" : "Зарегистрироваться"}</Link>
                            </div>
                            <div className="field button-field">
                                <button type={"button"}
                                        className={"btn btn-primary text-light"}
                                        onClick={() => loginHandler()}>{lan === "ENG" ? "Login" : "Авторизоваться"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}