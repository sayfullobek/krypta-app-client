import {Register} from "../auth/Register";
import {Button, Card, CardText, CardTitle, Col, Row} from "reactstrap";
import {Apis} from "../../serverConnect/Apis";
import React, {useEffect, useState} from "react";
import {embeddedGet} from "../../serverConnect/service/Service";
import {Loader} from "../../component/Loader";
import {Link} from "react-router-dom";

export const Amount = ({user, lan, load}) => {
    const token = localStorage.getItem("token")
    const globe1 = "https://media.sketchfab.com/models/cb636fdd7f124125a3b7d194da9942e1/thumbnails/3acf153eed654d31932803efcf37ea34/05fb0bf23df844bebb8710f1814bde20.jpeg"

    const [vips, setVips] = useState([])
    const [loading, setLoading] = useState(false)

    const getAll = async () => {
        try {
            await embeddedGet(Apis.vips, setVips, "data")
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getAll()
    }, [])

    const card = {
        width: '95%',
        border: '1px solid #ab9c9c73',
        borderRadius: "6px",
        boxShadow: 'rgb(213 202 202 / 45%) 2px 6px 1px 0.01px',
        backgroundColor: 'white'
    }
    return (
        <div className={"bg-light"}>
            {token ? (
                <>
                    {loading ? (
                        <div className={"p-1"}>
                            <div style={card} className={"p-2 m-2"}>
                                <div className={"d-flex w-100 align-items-center justify-content-between"}>
                                    <div>
                                        <p className={"m-0"}>{lan === "ENG" ? "Total assets" : "Всего активов"}
                                            (USDT)</p>
                                        <h3>
                                            {load ? user.wallet !== undefined ? user.wallet.nowMoney : "0" : 0}
                                        </h3>
                                    </div>
                                    <Link to={"/amount/money-upload"}
                                          className={"btn btn-primary"}>{lan === "ENG" ? "enable coin insterest" : "активировать интерес к монетам"}</Link>
                                </div>
                                <div className={"d-flex mt-3 w-100 align-items-center justify-content-between"}>
                                    <div>
                                        <p style={{fontSize: '10px'}}
                                           className={"m-0"}>{lan === "ENG" ? "today quanity profit" : "сегодня количество прибыли"} (USDT)</p>
                                        <h3 className={"text-center"}>0</h3>
                                    </div>
                                    <div>
                                        <p style={{fontSize: '10px'}} className={"m-0"}>today coin holding income
                                            (USDT)</p>
                                        <h3 className={"text-center"}>{user.wallet ? user.wallet.nowMoney : "0"}</h3>
                                    </div>
                                </div>
                                <p className={"mt-3 text-dark fw-bold"}>{lan === "ENG" ? "Platform information" : "Информация о платформе"}</p>
                                <div className={"d-flex mb-1"}>
                                    <div style={{fontSize: '14px'}}
                                         className={"w-75"}>{lan === "ENG" ? "minimum amount of money" : "минимальная сумма денег"}
                                    </div>
                                    <div
                                        className={"w-25 text-end fw-bold"}>{user.vips ? user.vips.minQuantifyAmount : ""} USDT
                                    </div>
                                </div>
                                <div className={"d-flex mb-1"}>
                                    <div style={{fontSize: '14px'}}
                                         className={"w-75"}>{lan === "ENG" ? "maximum amount of money" : "максимум сумма денег"}
                                    </div>
                                    <div
                                        className={"w-25 text-end fw-bold"}>{user.vips ? user.vips.maxQuantifyAmount : ""} USDT
                                    </div>
                                </div>
                                <div className={"d-flex mb-1"}>
                                    <div style={{fontSize: '14px'}}
                                         className={"w-75"}>{lan === "ENG" ? "share amount" : "сумма доли"}</div>
                                    <div style={{fontSize: '14px'}}
                                         className={"w-25 text-end fw-bold"}>{user.vips ? user.vips.shareRatio : ""}%
                                    </div>
                                </div>
                                <div className={"d-flex mb-1"}>
                                    <div style={{fontSize: '14px'}}
                                         className={"w-75"}>{lan === "ENG" ? "benefit" : "выгода"}
                                    </div>
                                    <div style={{fontSize: '14px'}}
                                         className={"w-25 text-end fw-bold"}>{user.vips ? user.vips.profits : ""}%
                                    </div>
                                </div>
                                <div className={"d-flex mb-1"}>
                                    <div style={{fontSize: '14px'}}
                                         className={"w-75"}>{lan === "ENG" ? "number of inspections per day" : "количество проверок в день"}
                                    </div>
                                    <div style={{fontSize: '14px'}}
                                         className={"w-25 text-end fw-bold"}>{user.vips ? user.vips.alfaRobotsAvailablePerDay : ""} {lan === "ENG" ? "time" : "время"}
                                    </div>
                                </div>
                                <button
                                    className={"btn btn-primary w-100 mt-3"}>{lan === "ENG" ? "Single start Alfa coin quantufy" : "Однократный запуск количества монет Альфа"}
                                </button>
                                <p className={"mt-3 text-dark fw-bold"}>{lan === "ENG" ? "Platform Record" : "Запись платформы"}</p>
                                <div className="card text-bg-dark">
                                    <img src={user.vips ? Apis.getPhoto + user.vips.photoId : ""}
                                         className="card-img"
                                         alt="1"/>
                                </div>
                            </div>
                            <div className="col-12 fw-bold text-center">
                                {lan === "ENG" ? "list of levels" : "список уровней"}
                            </div>
                            {vips.map(item => (
                                item.id !== load ? user.vips ? user.vips.id : '' : '' ? (
                                    <div style={card} className={"p-2 m-2"}>
                                        <div className="d-flex align-items-center justify-content-center flex-column">
                                            <div className={"w-100 d-flex align-items-center justify-content-between"}>
                                                <div
                                                    className={"col-6 d-flex align-items-center justify-content-between"}>
                                                    <img style={{
                                                        borderRadius: '50%',
                                                        width: '22%',
                                                    }}
                                                         src={Apis.getPhoto + item.photoId}
                                                         alt=""/>
                                                    <h6 className={"fw-bold"}
                                                        style={{fontSize: '15px'}}>{lan === "ENG" ? "Lavel" : "Степень"}
                                                        [{item.name}]</h6>
                                                </div>
                                                <div className={"col-6 d-flex align-items-center justify-content-end"}>
                                                    <p className={item.active ? "bg-success text-light mt-3" : "bg-secondary mt-3"}>{item.active ? "faollashtirilgan" : "tez kunlarda"}</p>
                                                </div>
                                            </div>
                                            <div className={"col"}>
                                                <div className={"d-flex mb-1"}>
                                                    <div style={{fontSize: '14px'}}
                                                         className={"w-75"}>{lan === "ENG" ? "minimum amount of money" : "минимальная сумма денег"}
                                                    </div>
                                                    <div
                                                        className={"w-25 text-end fw-bold"}>{item.minQuantifyAmount} USDT
                                                    </div>
                                                </div>
                                                <div className={"d-flex mb-1"}>
                                                    <div style={{fontSize: '14px'}}
                                                         className={"w-75"}>{lan === "ENG" ? "maximum amount of money" : "максимум сумма денег"}
                                                    </div>
                                                    <div
                                                        className={"w-25 text-end fw-bold"}>{item.maxQuantifyAmount} USDT
                                                    </div>
                                                </div>
                                                <div className={"d-flex mb-1"}>
                                                    <div style={{fontSize: '14px'}}
                                                         className={"w-75"}>{lan === "ENG" ? "share amount" : "сумма доли"}</div>
                                                    <div style={{fontSize: '14px'}}
                                                         className={"w-25 text-end fw-bold"}>{item.shareRatio}%
                                                    </div>
                                                </div>

                                                <div className={"d-flex mb-1"}>
                                                    <div style={{fontSize: '14px'}}
                                                         className={"w-75"}>{lan === "ENG" ? "benefit" : "выгода"}
                                                    </div>
                                                    <div style={{fontSize: '14px'}}
                                                         className={"w-25 text-end fw-bold"}>{item.profits}%
                                                    </div>
                                                </div>
                                                <div className={"d-flex mb-1"}>
                                                    <div style={{fontSize: '14px'}}
                                                         className={"w-75"}>{lan === "ENG" ? "number of inspections per day" : "количество проверок в день"}
                                                    </div>
                                                    <div style={{fontSize: '14px'}}
                                                         className={"w-25 text-end fw-bold"}>{item.alfaRobotsAvailablePerDay} {lan === "ENG" ? "time" : "время"}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (<></>)
                            ))}
                            <br/>
                            <br/>
                        </div>
                    ) : (
                        <Loader/>
                    )}
                </>
            ) : (
                <Register/>
            )}
        </div>
    )
}