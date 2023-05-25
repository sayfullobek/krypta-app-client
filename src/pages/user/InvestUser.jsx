import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getOneAbout, Save} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {Loader} from "../../component/Loader";
import {Button} from "reactstrap";
import {error, success} from "../../utils/MyToast";
import {useNavigate} from 'react-router-dom'

export const InvestUser = ({user}) => {
    const invId = useParams().invId
    const id = useParams().id
    const [inv, setInv] = useState({})
    const navigate = useNavigate()
    const [pool, setPool] = useState({})
    const [money, setMoney] = useState(0)
    const [loading, setLoading] = useState(false)
    const getInv = async () => {
        try {
            setInv(await getOneAbout(Apis.invest, invId, "data"))
            setPool(await getOneAbout(Apis.pools, id, "data"))
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getInv()
    }, [])
    const gradientBackground = {
        background: "linear-gradient(to right, #ff00cc, #333399)",
        height: '22vh',
        width: '96%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: '12px'
    }

    const investHandler = async () => {
        const deposit = inv.financialAmount.split(" - ")
        const minSum = Number.parseInt(deposit[0])
        const maxSum = Number.parseInt(deposit[1])
        if (money.trim().length === 0) {
            return error("pul kiritishingiz shart")
        }
        if (money < minSum) {
            return error("Tikayotgan pulingiz ushbu hovuzga to'gri kelmaydi iltimos kattaroq pul kiriting")
        }
        if (money > maxSum) {
            return error("Tikayotgan pulingiz ushbu hovuzga to'gri kelmaydi iltimos kichikroq pul kiriting")
        }
        const data = {
            money, investId: invId, userId: user.id
        }
        success("Iltimos kuting...")
        await Save(data, Apis.deposit, "", navigate, "/pool")
    }

    return (
        <div>
            {loading ? (
                <div className={"w-100 d-flex align-items-center justify-content-between flex-column"}
                     style={{height: '90vh'}}>
                    <div className={"w-100 d-flex align-items-center justify-content-center flex-column"}>
                        <div style={gradientBackground}>
                            <div className={"w-100"}>
                                <p className={"text-center text-secondary m-0"}>Monthly</p>
                                <h2 className={"text-center text-light"}>{inv.monthly}%</h2>
                            </div>
                            <div className={"w-100 d-flex mt-3"}>
                                <div
                                    className={"w-100 d-flex align-items-center justify-content-between flex-column mb-2"}>
                                    <div className={"text-secondary"}>
                                        stacing coin
                                    </div>
                                    <div className={"text-dark"}>
                                        <img
                                            src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Tether-USDT-icon.png"
                                            width={"22px"} alt=""/><span
                                        className={"m-2 text-light"}>{inv.stakingPool}</span>
                                    </div>
                                </div>
                                <div
                                    className={"w-100 d-flex align-items-center justify-content-between flex-column mb-2"}>
                                    <div className={"text-secondary"}>
                                        stacing type
                                    </div>
                                    <div className={"text-dark"}>
                                        <span className={"m-2 text-light"}>{pool.uzName}</span>
                                    </div>
                                </div>
                                <div
                                    className={"w-100 d-flex align-items-center justify-content-between flex-column mb-2"}>
                                    <div className={"text-secondary"}>
                                        stacing team
                                    </div>
                                    <div className={"text-dark"}>
                                        <span className={"m-2 text-light"}>{inv.howManyDays}day</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2 p-2"
                             style={{backgroundColor: 'white', width: '96%', borderRadius: '10px'}}>
                            <div className={"text-dark fw-bold mt-2"}>Quantitave Amount</div>
                            <div className={"d-flex align-items-center justify-content-center"}>
                                <input type="number" className={"form-control mt-2"}
                                       style={{border: 'none', outline: 'none', borderBottom: '1px solid #625c5c57'}}
                                       placeholder={`limited deposit ${inv.financialAmount}`} value={money}
                                       onChange={e => setMoney(e.target.value)}/>
                                <button className={"btn text-primary"}
                                        onClick={() => setMoney(user.wallet.nowMoney)}>all
                                </button>
                            </div>
                            <div className={"text-secondary fw-bold mt-2"}>Avaliable balance : <span
                                className={"text-danger"}>{user ? user.wallet.nowMoney : 0} USDT</span></div>
                        </div>
                        <div className="mt-2 p-2"
                             style={{backgroundColor: 'white', width: '96%', borderRadius: '10px'}}>
                            <p className={"text-dark fw-bold"}>product Details</p>
                            <div className="w-100">
                                {inv.description}
                            </div>
                        </div>
                    </div>
                    <div className={"w-100 d-flex align-items-center justify-content-center"}>
                        <Button onClick={() => investHandler()}
                                color={user.wallet.nowMoney >= money ? "primary" : "danger"}
                                className={user.wallet.nowMoney >= money ? "" : "disabled"} style={{width: '96%'}}>
                            Pledge now
                        </Button>
                    </div>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}