import {Link} from "react-router-dom";
import React from "react";
import {HeaderMe} from "../../component/meComponent/HeaderMe";
import {success} from "../../utils/MyToast";

export const Me = () => {
    const globe1 = "https://media.sketchfab.com/models/cb636fdd7f124125a3b7d194da9942e1/thumbnails/3acf153eed654d31932803efcf37ea34/05fb0bf23df844bebb8710f1814bde20.jpeg"
    const token = localStorage.getItem("token")

    const logoutHanlder = () => {
        localStorage.clear()
        window.location.reload()
    }

    const clearCache = () => {
        success("muvaffaqiyatli tozalandi")
    }

    const meArr = [
        {
            name: 'WithDrawal Address',
            icon: 'bi bi-geo-alt',
            link: "/auth/withdrawal-address",
            type: "auto",
            isHidden: true
        },
        {name: 'Verified', icon: 'bi bi-person-check', link: "/verified", type: "auto", isHidden: !!token},
        {
            name: 'Contact customer service',
            icon: 'bi bi-headset',
            link: "/contact-customer",
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
        {name: 'Switch Language', icon: 'bi bi-translate', link: "/switch-lan", type: "auto", isHidden: true},
        {name: 'Help', icon: 'bi bi-question-circle', link: "/help", type: "auto", isHidden: true},
        {name: 'About us', icon: 'bi bi-info-circle', link: "/about-us", type: "auto", isHidden: true},
        {name: 'Clear the cache', icon: 'fas fa-broom', type: "auto", functions: clearCache, isHidden: true},
        {type: "none", isHidden: true},
        {name: 'Log out', type: "center", functions: logoutHanlder, isHidden: !!token},
    ]

    const balanceArr = [
        {name: 'jami daromad', sum: 0},
        {name: 'jami yechib olish', sum: 0},
        {name: 'jamoalar soni', sum: 0},
    ]

    return (
        <div style={{width: '98%', padding: '0 0 0 4%', backgroundColor: '#fffefe6b'}} className={"p-2"}>
            <HeaderMe token={token}/>
            <div style={{backgroundColor: 'white'}}>
                <div className={"w-100 text-primary text-center pb-2"}
                     style={{fontSize: '30px', borderBottom: '1px solid #e7dfdf78'}}>
                    {token ? (
                        8
                    ) : (0)}
                    <div>
                        My total assets USDT
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
                <img src={globe1} className="card-img" alt="1"/>
                <div className="card-img-overlay">
                    <h5 className="card-title text-light">METAGO Staking hovuzi</h5>
                    <p className="card-text">Staking osonroq</p>
                    <p className="card-text"><small className={"text-success"}>Osonlik bilan soqqa qiling okalar</small>
                    </p>
                </div>
            </div>
            <div className={"d-flex align-items-center justify-content-center"}>
                <Link to={"/auth/register"} className={"btn"}>register</Link>
                <Link to={"/gildirak"} className={"btn"}>gildirak</Link>
            </div>
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
                                         viewBox="0 0 320 512" style={{width: '12px', transform: 'rotate(180deg)'}}>
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
        </div>
    )
}