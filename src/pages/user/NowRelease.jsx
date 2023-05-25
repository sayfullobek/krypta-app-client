import React, {useState} from "react";
import {Button} from "reactstrap";
import '../../assets/authstyle'
import '../../assets/auth.scss'
import {error} from "../../utils/MyToast";
import {Save} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {useNavigate} from 'react-router-dom'

export const NowRelease = ({user, loading, lan}) => {
    const [sum, setSum] = useState(0)
    const [cantForgetPassword, setCantForgetPassword] = useState('')
    const foizi = loading ? user.wallet.nechaMartaPulKiritgan !== 0 : 0
    const howMoney = loading ? foizi ? user.wallet.nowMoney : ((user.wallet.nowMoney * 70) / 100) : 0
    console.log(localStorage.getItem("aPasswordThatCannotBeForgotten"))
    const navigate = useNavigate()
    const exitMoney = async () => {
        if (sum <= 0) {
            return error(lan === "ENG" ? "Enter your amount to withdraw" : "Введите сумму для вывода")
        }
        if (localStorage.getItem("aPasswordThatCannotBeForgotten") !== cantForgetPassword) {
            return error(lan === "ENG" ? "Your personal password is incorrect, please try again" : "Ваш личный пароль неверен, попробуйте еще раз")
        }
        const data = {
            withdrawalId: localStorage.getItem("__address_id__"), money: sum
        }
        await Save(data, Apis.moneyExit, localStorage.getItem("__id__"), navigate, "/")
    }
    return (
        <div className={"w-100 p-1"}>
            <div className={"w-100 text-dark p-2 text-center"}
                 style={{backgroundColor: 'white', fontSize: '22px', borderBottom: '1px solid #423e3e75'}}>
                {localStorage.getItem("nickName")}
            </div>
            <div className={"w-100 p-3"} style={{backgroundColor: 'white'}}>
                <p>Address turi</p>
                <div className={"d-flex align-items-center justify-content-around"}>
                    <Button color={'primary'}
                            outline>
                        {localStorage.getItem("valyutaType")}
                    </Button>
                </div>
            </div>
            <div className={"w-100 p-3 mt-2"} style={{backgroundColor: 'white'}}>
                <p className={"text-dark"}>{lan === "ENG" ? "money will be sent to this address" : "деньги будут отправлены на этот адрес"}</p>
                <input type="text" className={"form-control"} value={localStorage.getItem("withAddress")}/>
            </div>

            <div className={"w-100 p-3 mt-2"} style={{backgroundColor: 'white'}}>
                <p className={"text-dark"}>{lan === "ENG" ? "how much you want to withdraw 70% of your total account withdrawal\n" +
                    "                    opportunity\n" +
                    "                    there is" : "сколько вы хотите снять 70% от общей суммы вывода средств со счета\n" +
                    "                    возможность\n" +
                    "                    есть"}</p>
                <div className={"w-100 d-flex"}>
                    <input type="number" value={sum} onChange={(e) => setSum(e.target.value)}
                           className={howMoney >= sum ? "form-control text-success m-1" : "form-control text-danger m-1"}
                           placeholder={lan === "ENG" ? "Enter the amount" : "Введите сумму"}/>
                    <Button color={"success"} className={"m-1"}
                            onClick={() => setSum(howMoney)}>{lan === "ENG" ? "All" : "Все"}</Button>
                </div>
            </div>
            <div className={"w-100 p-3 mt-2"} style={{backgroundColor: 'white'}}>
                <p className={"text-dark"}>{lan === "ENG" ? 'Enter your personal password to withdraw money' : "Введите свой личный пароль для вывода денег"}</p>
                <div className={"w-100 d-flex"}>
                    <input type="number" value={cantForgetPassword}
                           onChange={(e) => setCantForgetPassword(e.target.value)}
                           className={howMoney >= sum ? "form-control text-success m-1" : "form-control text-danger m-1"}
                           placeholder={lan === "ENG" ? "Enter the password" : "Введите пароль"}/>
                </div>
            </div>
            <div className={"w-100 p-3 mt-2"} style={{backgroundColor: 'white'}}>
                <p className={"text-dark"}>{lan === "ENG" ? "Please read the information" : "Пожалуйста, ознакомьтесь с информацией"}</p>
                <p>{lan === "ENG" ? "the money will be credited to your account within 72 hours" : "деньги будут зачислены на ваш счет в течение 72 часов"}</p>
            </div>
            <Button onClick={() => exitMoney()} color={howMoney >= sum ? "primary" : "danger"}
                    to={"/auth/now-pay/pay-photo"}
                    className={howMoney >= sum ? "m-2 mt-3" : "m-2 mt-3 disabled"}
                    style={{width: '97%'}}>{lan === "ENG" ? "withdraw money" : "снять деньги"}</Button>
        </div>
    )
}