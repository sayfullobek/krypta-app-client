import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Save} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {Button} from "reactstrap";
import {error} from "../../utils/MyToast";

export const CantForgetPassword = ({lan}) => {
    const [cantForgetPassword, setCantForgetPassword] = useState('')
    const [preCantForgetPassword, setPreCantForgetPassword] = useState('')
    const [seeCode2, setSeeCode2] = useState(false)
    const [seeCode3, setSeeCode3] = useState(false)
    const id = localStorage.getItem("__id__")
    const navigate = useNavigate()
    const formArr = [
        {
            label: lan === "ENG" ? "Enter your personal password" : 'Введите свой личный пароль',
            placeholder: lan === "ENG" ? "Please enter your personal password" : 'Пожалуйста, введите ваш личный пароль',
            val: cantForgetPassword,
            setVal: setCantForgetPassword,
            see: seeCode2,
            setSee: setSeeCode2,
        }, {
            label: lan === "ENG" ? "Re-enter your personal password" : 'Повторно введите свой личный пароль',
            placeholder: lan === "ENG" ? "Please enter your personal password again" : 'Пожалуйста, введите ваш личный пароль еще раз',
            val: preCantForgetPassword,
            setVal: setPreCantForgetPassword,
            see: seeCode3,
            setSee: setSeeCode3,
        },
    ]
    const changePassword = async () => {
        if (cantForgetPassword.trim().length !== 6) {
            return error(lan === "ENG" ? "The personal password must be 6 characters long." : "Персональный пароль должен состоять из 6 символов.")
        }
        if (cantForgetPassword !== preCantForgetPassword) {
            return error(lan === "ENG" ? "Your password and confirmation password must match" : "Ваш пароль и пароль подтверждения должны совпадать")
        }
        const data = {
            cantForgetPassword
        }
        await Save(data, Apis.addCantForgetPassword, id, navigate, "/auth/release-now")
        localStorage.setItem("aPasswordThatCannotBeForgotten", cantForgetPassword)
        window.location.reload()
    }
    return (
        <div style={{backgroundColor: '#fffefe6b', height: '100vh'}}>
            <div className="form login" style={{backgroundColor: 'transparent'}}>
                <div className="form-content">
                    <form>
                        {formArr.map(item => (
                            <div>
                                <label htmlFor="oldPassword" className={"text-secondary m-0"}>{item.label}</label>
                                <div className="field input-field mt-1 mb-4">
                                    <input type={item.see ? "text" : "password"} value={item.val}
                                           onChange={e => item.setVal(e.target.value)}
                                           className={"form-control"}
                                           placeholder={item.placeholder}/>
                                    <i className={item.see ? "bi bi-eye eye-icon" : 'bi bi-eye-slash eye-icon'}
                                       onClick={() => item.setSee(!item.see)}/>
                                </div>
                            </div>
                        ))}
                    </form>
                </div>
            </div>
            <Button color={"primary"} onClick={() => changePassword()}
                    style={{width: '96%', position: 'fixed', bottom: '0'}}
                    className={"m-2"}>{lan === "ENG" ? "Save" : "Сохранять"}</Button>
        </div>
    )
}