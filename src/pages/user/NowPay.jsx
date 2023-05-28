import {Button} from "reactstrap";
import {useState} from "react";
import {Link} from "react-router-dom";

export const NowPay = ({lan}) => {
    const [type, setType] = useState('TRC20')
    const [address, setAddress] = useState('TPuKr1vyCeBqRezoaTU7M62hEiiAdNpo4T')
    const USDT = [
        {name: 'TRC20', address: 'TPuKr1vyCeBqRezoaTU7M62hEiiAdNpo4T'},
        // {name: 'BEP20', address: 'dsadsa5676ytrfd'},
        // {name: 'ERC20', address: 'dsadsajhj1232eds'},
    ]
    const change = (item) => {
        setType(item.name)
        setAddress(item.address)
    }
    return (
        <div className={"w-100 p-1"}>
            <div className={"w-100 text-dark p-2"}
                 style={{backgroundColor: 'white', fontSize: '22px', borderBottom: '1px solid #423e3e75'}}>
                {type}
            </div>
            <div className={"w-100 p-3"} style={{backgroundColor: 'white'}}>
                <p>{lan === "ENG" ? "Select the type of address" : "Выберите тип адреса"}</p>
                <div className={"d-flex align-items-center justify-content-around"}>
                    {USDT.map(item => (
                        <Button onClick={() => change(item)} color={type === item.name ? 'primary' : "secondary"}
                                outline>
                            {item.name}
                        </Button>
                    ))}
                </div>
            </div>
            <div className={"w-100 p-3 mt-2"} style={{backgroundColor: 'white'}}>
                <p className={"text-dark"}>{lan === "ENG" ? "Address" : "Адрес"}</p>
                <input type="text" className={"form-control"} value={address}/>
            </div>
            <div className={"w-100 p-3 mt-2"} style={{backgroundColor: 'white'}}>
                <p className={"text-dark"}>{lan === "ENG" ? "Please read the information" : "Пожалуйста, ознакомьтесь с информацией"}</p>
                <p>{lan === "ENG" ? "make the necessary payment to one of these addresses and click on the next button\n" +
                    "                    your increased payment\n" +
                    "                    drop the picture. If you don't send us a picture after asking for payment, you won't get paid" : "внесите необходимый платеж на один из этих адресов и нажмите на кнопку «Далее»\n" +
                    "                    ваш повышенный платеж\n" +
                    "                    скиньте картинку. Если вы не отправите нам изображение после запроса оплаты, вы не получите оплату"}</p>
            </div>
            <Link to={"/auth/now-pay/pay-photo"} className={"btn btn-primary m-2 mt-5"}
                  style={{width: '97%'}
                  }>{lan === "ENG" ? "Next" : "Следующий"}</Link>
        </div>
    )
}