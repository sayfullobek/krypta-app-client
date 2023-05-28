import {AboutApp} from "../../component/primaryCards/AboutApp";
import React, {useEffect, useState} from "react";
import {embeddedGet, Save} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {PrimaryModal} from "../../component/primaryModal/PrimaryModal";
import {Loader} from "../../component/Loader";
import {Link, useNavigate} from "react-router-dom";
import {UserVipList} from "./UserVipList";
import {ApiController} from "../../serverConnect/ApiController";
import {isSuccess} from "../../handlers/auth";
import {success} from "../../utils/MyToast";

export const UserPanel = ({user, load, lan, getMe}) => {
    const [aboutApp, setAboutApp] = useState({})
    const [id, setId] = useState('')
    const navigate = useNavigate();
    const [money, setMoney] = useState(0)
    const [userFriendProfit, setUserFriendProfit] = useState('')

    const getAll = async () => {
        try {
            await embeddedGet(Apis.coin, setCoins, "data")
            await embeddedGet(Apis.aboutAppGet, setAboutApp, "data")
            await embeddedGet(Apis.vips, setVips, "data")
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getAll().then(r => r)
    }, [])

    const numberArr = [
        1, 2, 3, 4, 5
    ]

    const updateMinutMoney = async (money) => {
        const data = {
            money
        }
        const res = await ApiController.doPut(localStorage.getItem("__id__"), Apis.userProfitByVip, data)
        if (isSuccess(res.status)) {
            navigate("/")
        }
        await getMe()
        setUserFriendProfit(load ? user.wallet ? user.wallet.friendsProfit + " USDT" : 0 : 0)
    }
    useEffect(() => {
        // if (load ? user.wallet ? user.wallet.theMoneyHeInvested : 0 : 0 !== 0) {
        const timer = setInterval(() => {
            setMoney(money + numberArr[[Number.parseInt(Math.random() * 5)]])
            updateMinutMoney(money).then(r => r)
        }, 3000);
        return () => {
            clearInterval(timer);
        };
        // }
    });
    const [vips, setVips] = useState([])

    const [loading, setLoading] = useState(false)
    const [coin, setCoins] = useState([])

    const copyToClipboard = () => {
        let input;
        input = document.getElementById('copyId').defaultValue;
        navigator.clipboard.writeText(input).then(r => r);
        success("nusxalandi")
    }

    return (
        <div className={"p-2"} style={{height: '100vh'}}>
            {loading ? (
                <>
                    {user ? (
                        <>
                            <PrimaryModal lan={lan}/>
                            <div className="card p-2 pb-4">
                                <div className={"w-100"}>
                                    <div
                                        className={"w-100 d-flex align-items-center justify-content-between flex-column"}>
                                        <div className={"w-100 mt-2 mb-2"}><h3
                                            className={"text-success fw-bold text-center"}>{load ? user.wallet !== undefined ? user.wallet.nowMoney.toString().substr(0, 12) : "0" : 0}
                                            $</h3>
                                        </div>
                                        <div className={"d-flex w-100 align-items-center justify-content-between"}>
                                            <Link to={"/auth/now-pay"}
                                                  className={"btn btn-success col-5"}>{lan === "ENG" ? "top up " : "пополнить "}
                                                <i className="bi bi-box-arrow-in-down"/></Link>
                                            <Link to={"/auth/release-now"}
                                                  className={"btn btn-primary col-5"}>{lan === "ENG" ? "deposit " : "внести "}
                                                <i className="bi bi-upload"/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={"mb-3 w-100 mt-3 d-flex align-items-center justify-content-center flex-column"}>
                                <div className={"p-3 d-flex"}
                                     style={{
                                         width: '99%',
                                         backgroundColor: 'white',
                                         borderTopRightRadius: '10px',
                                         borderTopLeftRadius: '10px',
                                         boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
                                     }}>
                                    <div className={"w-100 d-flex"}>
                                        <div className="col-8">
                                            <p className={"fw-bold text-secondary"}>{lan === "ENG" ? "Investment bonus" : "Инвестиционный бонус"}</p>
                                            <div className={"fw-bold text-primary"}
                                                 style={{fontSize: '26px'}}>{load ? user.wallet ? user.wallet.friendsProfit + " USDT" : 0 : 0}</div>
                                        </div>
                                        <div className="col-4">
                                            <p className={"fw-bold text-secondary"}>{lan === "ENG" ? "In day" : "В день"}</p>
                                            <div className={"fw-bold text-secondary"}
                                                 style={{fontSize: '26px'}}>+0.01%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={"p-3"} style={{
                                    width: '99%',
                                    backgroundColor: '#cec6c66b',
                                    borderBottomRightRadius: '10px',
                                    borderBottomLeftRadius: '10px',
                                    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
                                }}>
                                    <p>
                                        {lan === "ENG" ? " The profit from the investment bonus is credited to the account balance\n" +
                                            "                                        every\n" +
                                            "                                        second" : "Прибыль от инвестиционного бонуса зачисляется на баланс счета каждую секунду"}

                                    </p>
                                </div>
                            </div>
                            <UserVipList vips={vips} lan={lan}
                                         balance={load ? user.wallet !== undefined ? user.wallet.nowMoney : "0" : 0}
                                         userVip={load ? user.vips !== undefined ? user.vips : "0" : 0}/>
                            <div
                                className={"mb-3 w-100 mt-3 d-flex align-items-center justify-content-center flex-column"}>
                                <div className={"p-3 d-flex flex-column align-items-center justify-content-center"}
                                     style={{
                                         width: '99%',
                                         backgroundColor: 'white',
                                         borderTopRightRadius: '10px',
                                         borderTopLeftRadius: '10px',
                                         boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
                                     }}>
                                    <div className={"w-100 d-flex p-2"}>
                                        {lan === "ENG" ? "If you invite a friend to this platform, 10% of the money they deposit will be transferred to you. Offer link" : "Если вы пригласите друга на эту платформу, 10% денег, которые он внесет, будут переведены вам. Предложить ссылку"}
                                    </div>
                                    <div className={"p-3"} style={{
                                        width: '98%',
                                        backgroundColor: '#cec6c66b',
                                        borderRadius: '10px',
                                        boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 6px 0px'
                                    }}>
                                        <p className={"text-secondary"} style={{overflow: 'hidden'}}>
                                            {lan === "ENG" ? "Your link" : "Ваша ссылка"}
                                            <h5 defaultValue={load ? user.wallet ? `https://main--lustrous-hamster-630dc1.netlify.app/auth/register?referralCode=${user.referralCode}` : 0 : 0}>{load ? user.wallet ? `http://localhost:5173/auth/register?referralCode=${user.referralCode}` : 0 : 0}</h5>
                                        </p>
                                    </div>
                                    <div className={"mt-3"} style={{
                                        width: '98%',
                                    }}>
                                        <button onClick={() => copyToClipboard()}
                                                className={"btn btn-success w-100"}>{lan === "ENG" ? "Copy" : "Копировать"}</button>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3 w-100 d-flex align-items-center justify-content-between">
                                <div className="p-3 d-flex align-items-center justify-content-center flex-column"
                                     style={{
                                         width: '31%',
                                         backgroundColor: 'white',
                                         borderRadius: '10px',
                                         boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
                                     }}>
                                    <i style={{fontSize: '26px'}} className="fw-bold bi bi-people-fill"/>
                                    <div style={{fontSize: '12px'}}
                                         className={"fw-bold"}>{lan === "ENG" ? "Number of users" : "Количество пользователей"}</div>
                                    <div>
                                        {aboutApp.howMuchMoneyApp}
                                    </div>
                                </div>
                                <div className="p-3 d-flex align-items-center justify-content-center flex-column"
                                     style={{
                                         width: '31%',
                                         backgroundColor: 'white',
                                         borderRadius: '10px',
                                         boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
                                     }}><
                                    i style={{fontSize: '26px'}} className="fw-bold bi bi-calendar-day"/>
                                    <div style={{fontSize: '12px'}}
                                         className={"fw-bold"}>{lan === "ENG" ? "Number of users" : "Количество пользователей"}</div>
                                    <div>
                                        {aboutApp.dayAppLaunched} {lan === "ENG" ? "Day" : "день"}
                                    < /div>
                                </div>
                                <div className="p-3 d-flex align-items-center justify-content-center flex-column"
                                     style={{
                                         width: '31%',
                                         backgroundColor: 'white',
                                         borderRadius: '10px',
                                         boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
                                     }}>
                                    <i style={{fontSize: '26px'}} className="fw-bold bi bi-cash-coin"/>
                                    <div style={{fontSize: '12px'}}
                                         className={"fw-bold"}>{lan === "ENG" ? "Number of users" : "Количество пользователей"}
                                    </div>
                                    <div style={{fontSize: '10px'}}>
                                        {aboutApp.howMuchMoneyApp} USDT
                                    </div>
                                </div>
                            </div>
                            <AboutApp aboutApp={aboutApp}/>
                        </>
                    ) : (<>
                        <PrimaryModal lan={lan}/>
                        <div className="card p-2">
                            <div className={"w-100"}>
                                <div
                                    className={"w-100 d-flex align-items-center justify-content-between flex-column"}>
                                    <div className={"w-100 mt-2 mb-2"}><h3
                                        className={"text-success fw-bold text-center"}>0
                                        $</h3>
                                    </div>
                                    <div className={"d-flex w-100 align-items-center justify-content-between"}>
                                        <button
                                            className={"btn btn-success col-5"}>{lan === "ENG" ? "top up " : "пополнить "}
                                            <i className="bi bi-box-arrow-in-down"/></button>
                                        <button
                                            className={"btn btn-primary col-6"}>{lan === "ENG" ? "deposit money " : "внести деньги "}
                                            <i className="bi bi-upload"/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <UserVipList vips={vips} lan={lan}
                                     balance={0}
                                     userVip={0}/>
                        <AboutApp aboutApp={aboutApp}/>
                    </>)}
                </>
            ) : (
                <Loader/>
            )}
        </div>
    )
}