import {Register} from "../auth/Register";
import {CoinsList} from "../../component/primaryCards/CoinsList";
import {useEffect, useState} from "react";
import {embeddedGet} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {Loader} from "../../component/Loader";

export const Assets = ({user, lan, load}) => {
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem("token")
    const arr = [
        {
            name: lan === "ENG" ? 'My total assets USDT' : "Мои общие активы в USDT",
            size: load ? user.wallet ? user.wallet.nowMoney : "0" : 0
        },
        {
            name: lan === "ENG" ? 'My total assets ALFA' : "Мои общие активы в ALFA",
            size: 0
        },
        // {name: 'My total assets USDT', size: 0},
        // {name: 'My total assets USDT', size: 0},
        // {name: 'My total assets USDT', size: 0},
        // {name: 'My total assets USDT', size: 0},
    ]
    const [coin, setCoins] = useState([])

    const getAll = async () => {
        try {
            await embeddedGet(Apis.coin, setCoins, "data")
            setLoading(true)
        } catch (err) {
        }
    }

    useEffect(() => {
        getAll()
    }, [])
    return (
        <div className={"w-100 d-flex align-items-center justify-content-center"}>
            {token ? (
                loading ? (
                    <div className={"d-flex align-items-center justify-content-center flex-column"}
                         style={{width: "96%"}}>
                        <div className={"p-2"} style={{backgroundColor: 'white'}}>
                            <div className={"w-100 text-center fw-bold"} style={{fontSize: '30px'}}>
                                {load ? user.wallet !== undefined ? user.wallet.nowMoney : "0" : 0}
                                <div className={"mt-2 text-primary"}>
                                    {lan === "ENG" ? 'My total assets USDT' : "Мои общие активы в USDT"}
                                </div>
                            </div>
                            <div className="row mt-3">
                                {arr.map(item => (
                                    <div className={"w-50 text-center"} style={{fontSize: '20px'}}>
                                        <span className={"fw-bold"}>{item.size}</span>
                                        <div className={"mt-2 text-secondary"}>
                                            {item.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={"w-100 mt-3 p-2"} style={{backgroundColor: 'white'}}>
                            <p className={"fw-bold text-dark"}>{lan === "ENG" ? "avialable assets" : "доступные активы"}</p>
                            <div className="row">
                                <CoinsList status={"assets"} coin={coin} loading={load} user={user}/>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Loader/>
                )
            ) : (
                <Register/>
            )}
        </div>
    )
}