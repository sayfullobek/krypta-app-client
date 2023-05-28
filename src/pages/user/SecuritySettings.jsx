import React, {useState} from "react";
import {Button} from "reactstrap";
import {Save} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {useNavigate} from "react-router-dom";

export const SecuritySettings = ({lan}) => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPrePassword, setNewPrePassword] = useState('')
    const [seeCode, setSeeCode] = useState(false)
    const [seeCode2, setSeeCode2] = useState(false)
    const [seeCode3, setSeeCode3] = useState(false)
    const id = localStorage.getItem("__id__")
    const navigate = useNavigate()
    const formArr = [
        {
            label: lan === "ENG" ? "enter your old password" : 'введите свой старый пароль',
            placeholder: lan === "ENG" ? "Please enter your old password" : 'Пожалуйста, введите свой старый пароль',
            val: oldPassword,
            setVal: setOldPassword,
            see: seeCode,
            setSee: setSeeCode,
        }, {
            label: lan === "ENG" ? "Enter a new password" : 'введите новый пароль',
            placeholder: lan === "ENG" ? "Please enter a new password" : 'Пожалуйста, введите новый пароль',
            val: newPassword,
            setVal: setNewPassword,
            see: seeCode2,
            setSee: setSeeCode2,
        }, {
            label: lan === "ENG" ? "re-enter the new password" : 'повторно введите новый пароль',
            placeholder: lan === "ENG" ? "Please enter your new password again" : 'Пожалуйста, введите новый пароль еще раз',
            val: newPrePassword,
            setVal: setNewPrePassword,
            see: seeCode3,
            setSee: setSeeCode3,
        },
    ]
    const changePassword = async () => {
        const data = {
            oldPassword, newPassword, newPrePassword
        }
        await Save(data, Apis.changePassword, id, navigate, "/me")
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