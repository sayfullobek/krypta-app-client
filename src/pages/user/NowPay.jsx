import {Button} from "reactstrap";
import {useState} from "react";
import {Link} from "react-router-dom";

export const NowPay = () => {
    const [type, setType] = useState('TRC20')
    const [address, setAddress] = useState('12345676ytrfd')
    const USDT = [
        {name: 'TRC20', address: '12345676ytrfd'},
        {name: 'BEP20', address: 'dsadsa5676ytrfd'},
        {name: 'ERC20', address: 'dsadsajhj1232eds'},
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
                <p>Address turini tanlang</p>
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
                <p className={"text-dark"}>Address</p>
                <input type="text" className={"form-control"} value={address}/>
            </div>
            <div className={"w-100 p-3 mt-2"} style={{backgroundColor: 'white'}}>
                <p className={"text-dark"}>Ma'lumot iltimos o'qing</p>
                <p>ushbu addresslardan biriga kerakli to'lovni amalga oshirasiz va <span
                    className={"bg-primary text-light"}>keyingi</span> nomli tugmaga bosib amalga oshirgan to'lovingizni
                    rasmini tashlang. Agarda to'lov qilib bizga rasmini tashlamasangiz to'lov sizga tushmaydi</p>
            </div>
            <Link to={"/auth/now-pay/pay-photo"} className={"btn btn-primary m-2 mt-5"}
                  style={{width: '97%'}}>Keyingi</Link>
        </div>
    )
}