import {Link, useNavigate} from "react-router-dom";
import React from "react";
import {HeaderMe} from "../../component/meComponent/HeaderMe";
import {error, success} from "../../utils/MyToast";
import {Loader} from "../../component/Loader";
import globe from '../../assets/lucky jet.jpg'

export const Me = ({user, loading, lan}) => {
    const token = localStorage.getItem("token")
    const navigete = useNavigate()

    const logoutHanlder = () => {
        localStorage.clear()
        window.location.reload()
    }

    const clearCache = () => {
        success("muvaffaqiyatli tozalandi")
    }

    const meArr = [
        {
            name:
                lan === "ENG" ? "WithDrawal Address" : "Адрес с отрисовкой",
            icon: 'bi bi-geo-alt',
            link: "/auth/withdrawal-address",
            type: "auto",
            isHidden: true
        },
        {
            name:
                lan === "ENG" ? "Contact customer service" : "Связаться со службой поддержки клиентов",
            icon: 'bi bi-headset',
            link: "/me",
            type: "auto",
            isHidden: true
        },
        {
            name: 'Security Settings',
            icon: 'bi bi-shield-check',
            link: "/auth/security-settings",
            type: "auto",
            isHidden: !!token
        },
        {type: "none", isHidden: true},
        {name: 'Feedback', icon: 'bi bi-envelope-open', link: "/auth/feedback", type: "auto", isHidden: !!token},
        {
            name:
                lan === "ENG" ? "Switch Language" : "Переключить язык",
            icon: 'bi bi-translate',
            link: "/auth/switch-languages",
            type: "auto",
            isHidden: true
        },
        {
            name:
                lan === "ENG" ? "Help" : "помощь",
            icon: 'bi bi-question-circle',
            link: "/help",
            type: "auto",
            isHidden: true
        },
        {
            name:
                lan === "ENG" ? "About us" : "О нас",
            icon: 'bi bi-info-circle',
            link: "/me",
            type: "auto",
            isHidden: true
        },
        {
            name:
                lan === "ENG" ? "Clear the cache" : "Очистить кеш",
            icon: 'fas fa-broom',
            type: "auto",
            functions: clearCache,
            isHidden: true
        },
        {type: "none", isHidden: true},
        {
            name:
                lan === "ENG" ? "Log out" : "Выйти",
            type: "center",
            functions: logoutHanlder,
            isHidden: !!token
        },
    ]

    const balanceArr = [
        {
            name:
                lan === "ENG" ? "All Balance" : "Общая прибыль",
            sum: localStorage.length === 0 ? "0" : user.wallet === undefined ? 0 : user.wallet.allInCome
            //sum: localStorage.length === 0 ? "0" : user.wallet === undefined ? 0 : user.wallet.allInCome
        },
        {
            name:
                lan === "ENG" ? "Total Withdrawal" : "Общий вывод",
            sum: localStorage.length === 0 ? "0" : user.wallet === undefined ? 0 : user.wallet.nechaMartaPulKiritgan
        },
        {
            name:
                lan === "ENG" ? "Number of teams" : "Количество команд",
            sum: localStorage.length === 0 ? "0" : user.wallet === undefined ? 0 : user.wallet.offer
        },
    ]

    return (
        <div style={{width: '98%', padding: '0 0 0 4%', backgroundColor: '#fffefe6b'}} className={"p-2"}>
            {loading ? (
                <>
                    <HeaderMe token={token} user={user}/>
                    <div style={{backgroundColor: 'white'}}>
                        <div className={"w-100 text-primary text-center pb-2"}
                             style={{fontSize: '30px', borderBottom: '1px solid #e7dfdf78'}}>
                            {token ? (
                                <>
                                    {user.wallet.nowMoney}
                                </>
                            ) : (0)}
                            <div>
                                {lan === "ENG" ? "My total assets USDT" : "ruscha"}
                            </div>
                        </div>
                        <div
                            className={"w-100 mt-2 pb-2 text-primary text-center fw-bold d-flex alignt-items-center justify-content-center"}
                            style={{fontSize: '30px'}}>
                            {balanceArr.map(item => (
                                <div className={"col-4"}>
                                    <div className={"text-dark fw-bold"} style={{fontSize: '16px'}}>
                                        {item.sum}
                                    </div>
                                    <div style={{fontSize: '11px'}}>
                                        {item.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card text-bg-dark mt-3">
                        <img src={globe} className="card-img" alt="1"
                             onClick={() => error("Sizning mintaqangizda muammo mavjud")}/>
                    </div>
                    {token ? (
                        <></>
                    ) : (
                        <div className={"d-flex align-items-center justify-content-center"}>
                            <Link to={"/auth/register"} className={"btn"}>register</Link>
                        </div>
                    )}
                    <div className="mt-3">
                        {meArr.map(item => (
                            item.type === "auto" ? (
                                <>
                                    {item.isHidden ? (
                                        <Link to={item.link} onClick={item.functions}
                                              className="w-100 d-flex p-3 text-decoration-none"
                                              style={{
                                                  height: '10%',
                                                  display: 'flex',
                                                  alignItems: 'center',
                                                  justifyContent: 'space-between',
                                                  backgroundColor: 'white',
                                                  borderBottom: '1px solid rgb(169 162 162 / 25%)'
                                              }}>
                                            <div className={"d-flex w-75 align-items-center"}>
                                                <i className={item.icon + " text-secondary"}
                                                   style={{fontSize: '18px', margin: '0 20px 0 0'}}/>
                                                <div className={"fw-bold"}>{item.name}</div>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 320 512"
                                                 style={{width: '12px', transform: 'rotate(180deg)'}}>
                                                <path
                                                    d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                                            </svg>
                                        </Link>
                                    ) : (<></>)}
                                </>
                            ) : item.type === "none" ? (
                                <div className={"p-2"}/>
                            ) : (
                                item.isHidden ? (
                                    <button
                                        className="btn w-100 d-flex align-items-center justify-content-center p-3 text-decoration-none"
                                        style={{
                                            height: '10%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            backgroundColor: 'white'
                                        }} onClick={() => item.functions()}>
                                        <div className={"text-danger"}>{item.name}</div>
                                    </button>
                                ) : (
                                    <></>
                                )
                            )
                        ))}
                    </div>
                    <br/>
                    <br/>
                </>
            ) : (
                <Loader/>
            )}
        </div>
    )
}