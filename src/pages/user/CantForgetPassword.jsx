import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Save} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {Button} from "reactstrap";
import {error} from "../../utils/MyToast";

export const CantForgetPassword = () => {
    const [cantForgetPassword, setCantForgetPassword] = useState('')
    const [preCantForgetPassword, setPreCantForgetPassword] = useState('')
    const [seeCode2, setSeeCode2] = useState(false)
    const [seeCode3, setSeeCode3] = useState(false)
    const id = localStorage.getItem("__id__")
    const navigate = useNavigate()
    const formArr = [
        {
            label: 'Shaxsiy parolingizni kiriting',
            placeholder: 'Iltimos Shaxsiy parolingizni kiriting',
            val: cantForgetPassword,
            setVal: setCantForgetPassword,
            see: seeCode2,
            setSee: setSeeCode2,
        }, {
            label: 'Shaxsiy parolingizni qayta kiriting',
            placeholder: 'Iltimos Shaxsiy parolingizni qayta kiriting',
            val: preCantForgetPassword,
            setVal: setPreCantForgetPassword,
            see: seeCode3,
            setSee: setSeeCode3,
        },
    ]
    const changePassword = async () => {
        if (cantForgetPassword.trim().length !== 6) {
            return error("Shaxsiy parol 6ta belgidan iborat bo'lishi shart")
        }
        if (cantForgetPassword !== preCantForgetPassword) {
            return error("Parol va tasdiqlash parolingizz teng bo'lishi shart")
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
                    style={{width: '96%', position: 'fixed', bottom: '0'}} className={"m-2"}>Saqlash</Button>
        </div>
    )
}