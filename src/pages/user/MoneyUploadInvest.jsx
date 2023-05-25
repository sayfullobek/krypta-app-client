import last from '../../assets/gifs/mining 2.gif'
import three from '../../assets/gifs/mining 3.avif'
import {Link, useParams, useNavigate} from "react-router-dom";
import {error, success} from "../../utils/MyToast";
import {useState} from "react";

export const MoneyUploadInvest = ({user, lan}) => {
    const invId = useParams().invId
    const id = useParams().id
    const [money, setMoney] = useState('')
    const navigate = useNavigate()
    const validMoney = () => {
        if (user.wallet.nowMoney < money) {
            return error(lan === "ENG" ? "You don't have enough funds in your account" : "У вас недостаточно средств на счету")
        }

        if (money.trim().length === 0) {
            return error(lan === "ENG" ? "Deposit is required" : "Требуется депозит")
        }
        if (money < 20) {
            return error(lan === "ENG" ? "The amount must be more than $20" : "Сумма должна быть больше $20")
        }
        success(lan === "ENG" ? "Your money has started rolling" : "Ваши деньги начали катиться")
        localStorage.setItem("__money__", money)
        navigate("/amount/money-upload/agree")
    }
    return (
        <div style={{height: '90vh', backgroundColor: 'white'}}
             className={"w-100 d-flex align-items-center justify-content-between flex-column"}>
            <div style={{width: '96%', marginBottom: '12vh'}}>
                <input type="number" className={"form-control mt-5"}
                       placeholder={lan === "ENG" ? "Your money has started rolling" : "Ваши начали катиться"}
                       value={money}
                       onChange={e => setMoney(e.target.value)}/>
            </div>
            <img src={three} alt=""/>
            <div className={"w-100"}>
                <Link onClick={() => localStorage.setItem("__money__", "")} to={`/pool/item/${id}/${invId}`}
                      className={"btn btn-danger w-50"}>{lan === "ENG" ? 'Back' : "Назад"}</Link>
                <button
                    onClick={() => validMoney()}
                    className={"btn btn-primary w-50"}>{lan === "ENG" ? "Next" : "Следующий"}
                </button>
            </div>
        </div>
    )
}