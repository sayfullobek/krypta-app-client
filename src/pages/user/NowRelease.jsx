import React, {useState} from "react";
import {Button} from "reactstrap";
import '../../assets/authstyle'
import '../../assets/auth.scss'

export const NowRelease = ({user}) => {
    const [sum, setSum] = useState('')
    // console.log(user.wallet.nechaMartaPulKiritgan)
    console.log(user)
    const foizi = user.wallet.nechaMartaPulKiritgan !== 0
    const howMoney = foizi ? user.wallet.nowMoney : ((user.wallet.nowMoney * 70) / 100)
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
                <p className={"text-dark"}>ushbu addressga pul tashlanadi</p>
                <input type="text" className={"form-control"} value={localStorage.getItem("withAddress")}/>
            </div>

            <div className={"w-100 p-3 mt-2"} style={{backgroundColor: 'white'}}>
                <p className={"text-dark"}>qancha pul yechmoqchisiz sizga umumiy xisobingizdan 70% yechish imkoniyati
                    mavjud</p>
                <div className={"w-100 d-flex"}>
                    <input type="number" value={sum} onChange={(e) => setSum(e.target.value)}
                           className={howMoney >= sum ? "form-control text-success m-1" : "form-control text-danger m-1"}
                           placeholder={"Summani kiriting"}/>
                    <Button color={"success"} className={"m-1"} onClick={() => setSum(howMoney)}>Hammasi</Button>
                </div>
            </div>
            <div className={"w-100 p-3 mt-2"} style={{backgroundColor: 'white'}}>
                <p className={"text-dark"}>Ma'lumot iltimos o'qing</p>
                <p>sizning xisobingizga 72 soat ichida pul tushadi</p>
            </div>
            <Button color={howMoney >= sum ? "primary" : "danger"} to={"/auth/now-pay/pay-photo"}
                    className={howMoney >= sum ? "m-2 mt-3" : "m-2 mt-3 disabled"}
                    style={{width: '97%'}}>pul yechish</Button>
        </div>
    )
}