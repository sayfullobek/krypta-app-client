import React, {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {Apis} from "../../serverConnect/Apis";
import {getOneAbout, Save} from "../../serverConnect/service/Service";
import {Loader} from "../../component/Loader";
import {error} from "../../utils/MyToast";
import {ApiController} from "../../serverConnect/ApiController";
import {isSuccess} from "../../handlers/auth";
import toast from "react-hot-toast";
import {baseUrl} from "../../serverConnect/baseUrl";
import axios from "axios";

export const UpdateVipInUser = ({lan, user, load}) => {
    const navigate = useNavigate()
    const id = useParams().id
    const [vip, setVip] = useState({})
    const [loading, setLoading] = useState(false)
    const getOne = async () => {
        try {
            setVip(await getOneAbout(Apis.vips, id, "data"))
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getOne().then(r => r)
    }, [])

    const updateVip = async () => {
        const res = await axios.put(
            baseUrl + Apis.updateUserVip + "/" + localStorage.getItem("__id__") + "?vipId=" + id
        )
        if (isSuccess(res.status)) {
            navigate("/")
            window.location.reload()
        }
    }
    return (
        <div>
            {loading ? (
                <>
                    <div className={"p-2 m-2"}>
                        <p className={"mt-3 text-dark fw-bold"}>{lan === "ENG" ? "Platform information" : "Информация о платформе"}</p>
                        <div className={"d-flex mb-1"}>
                            <div style={{fontSize: '14px'}}
                                 className={"w-75"}>{lan === "ENG" ? "minimum amount of money" : "минимальная сумма денег"}
                            </div>
                            <div
                                className={"w-25 text-end fw-bold"}>{vip ? vip.minQuantifyAmount : ""} USDT
                            </div>
                        </div>
                        <div className={"d-flex mb-1"}>
                            <div style={{fontSize: '14px'}}
                                 className={"w-75"}>{lan === "ENG" ? "maximum amount of money" : "максимум сумма денег"}
                            </div>
                            <div
                                className={"w-25 text-end fw-bold"}>{vip ? vip.maxQuantifyAmount : ""} USDT
                            </div>
                        </div>
                        <div className={"d-flex mb-1"}>
                            <div style={{fontSize: '14px'}}
                                 className={"w-75"}>{lan === "ENG" ? "share amount" : "сумма доли"}</div>
                            <div style={{fontSize: '14px'}}
                                 className={"w-25 text-end fw-bold"}>{vip ? vip.shareRatio + "%" : ""}
                            </div>
                        </div>
                        <div className={"d-flex mb-1"}>
                            <div style={{fontSize: '14px'}}
                                 className={"w-75"}>{lan === "ENG" ? "benefit" : "выгода"}
                            </div>
                            <div style={{fontSize: '14px'}}
                                 className={"w-25 text-end fw-bold"}>{vip ? vip.profits : ""}%
                            </div>
                        </div>
                        <div className={"d-flex mb-1"}>
                            <div style={{fontSize: '14px'}}
                                 className={"w-75"}>{lan === "ENG" ? "number of inspections per day" : "количество проверок в день"}
                            </div>
                            <div style={{fontSize: '14px'}}
                                 className={"w-25 text-end fw-bold"}>{vip ? vip.alfaRobotsAvailablePerDay : ""} {lan === "ENG" ? "time" : "время"}
                            </div>
                        </div>
                        <p className={"mt-3 text-dark fw-bold"}>{lan === "ENG" ? "Platform Record" : "Запись платформы"}</p>
                        <div className="card text-bg-dark">
                            <img src={vip ? Apis.getPhoto + vip.photoId : ""}
                                 className="card-img"
                                 alt="1"/>
                        </div>
                    </div>
                    <div className={"w-100 d-flex align-items-center justify-content-center mt-2"}>
                        <button onClick={() => updateVip()}
                                className={"btn btn-primary"}
                                style={{width: '96%'}}>{lan === "ENG" ? "Save" : 'Сохранять'}</button>
                    </div>
                </>
            ) : (
                <Loader/>
            )}
        </div>
    )
}