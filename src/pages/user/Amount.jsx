import {Register} from "../auth/Register";
import {Button, Card, CardText, CardTitle, Col, Row} from "reactstrap";
import {Apis} from "../../serverConnect/Apis";
import React, {useEffect, useState} from "react";
import {embeddedGet} from "../../serverConnect/service/Service";
import {Loader} from "../../component/Loader";

export const Amount = () => {
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
                            <div className="card text-bg-dark">
                                <img src={globe1} className="card-img" alt="1"/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title text-light">METAGO Staking hovuzi</h5>
                                    <p className="card-text">Staking osonroq</p>
                                    <p className="card-text"><small className={"text-success"}>Osonlik bilan soqqa
                                        qiling okalar</small>
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 fw-bold text-center">
                                darajalar ro'yxati
                            </div>
                            {vips.map(item => (
                                <div style={card} className={"p-2 m-2"}>
                                    <div className="d-flex align-items-center justify-content-center flex-column">
                                        <div className={"w-100 d-flex align-items-center justify-content-between"}>
                                            <div className={"col-6 d-flex align-items-center justify-content-between"}>
                                                <img style={{
                                                    borderRadius: '50%',
                                                    width: '22%',
                                                }}
                                                     src={Apis.getPhoto + item.photoId}
                                                     alt=""/>
                                                <h6 className={"fw-bold"} style={{fontSize: '15px'}}>Daraja
                                                    [{item.name}]</h6>
                                            </div>
                                            <div className={"col-6 d-flex align-items-center justify-content-end"}>
                                                <p className={item.active ? "bg-success text-light mt-3" : "bg-secondary mt-3"}>{item.active ? "faollashtirilgan" : "tez kunlarda"}</p>
                                            </div>
                                        </div>
                                        <div className={"col"}>
                                            <div className={"d-flex mb-1"}>
                                                <div style={{fontSize: '14px'}} className={"w-75"}>minimum pul miqdori
                                                </div>
                                                <div className={"w-25 text-end fw-bold"}>{item.minQuantifyAmount} USDT
                                                </div>
                                            </div>
                                            <div className={"d-flex mb-1"}>
                                                <div style={{fontSize: '14px'}} className={"w-75"}>maximum pul miqdori
                                                </div>
                                                <div style={{fontSize: '12px'}}
                                                     className={"w-25 text-end fw-bold"}>{item.maxQuantifyAmount} USDT
                                                </div>
                                            </div>
                                            <div className={"d-flex mb-1"}>
                                                <div style={{fontSize: '14px'}} className={"w-75"}>ulush miqdori</div>
                                                <div style={{fontSize: '14px'}}
                                                     className={"w-25 text-end fw-bold"}>{item.shareRatio}%
                                                </div>
                                            </div>
                                            <div className={"d-flex mb-1"}>
                                                <div style={{fontSize: '14px'}} className={"w-75"}>samarali miqdor</div>
                                                <div style={{fontSize: '14px'}}
                                                     className={"w-25 text-end fw-bold"}>{item.effectiveEmount}
                                                </div>
                                            </div>
                                            <div className={"d-flex mb-1"}>
                                                <div style={{fontSize: '14px'}} className={"w-75"}>a'zolarni bevosita
                                                    targib
                                                    qilish
                                                </div>
                                                <div style={{fontSize: '14px'}}
                                                     className={"w-25 text-end fw-bold"}>{item.directlyPromoteMembers}
                                                </div>
                                            </div>
                                            <div className={"d-flex mb-1"}>
                                                <div style={{fontSize: '14px'}} className={"w-75"}>ikkinchi va uchinchi
                                                    avlod
                                                </div>
                                                <div style={{fontSize: '14px'}}
                                                     className={"w-25 text-end fw-bold"}>{item.secondThridGenerationMembers}
                                                </div>
                                            </div>
                                            <div className={"d-flex mb-1"}>
                                                <div style={{fontSize: '14px'}} className={"w-75"}>foyda
                                                </div>
                                                <div style={{fontSize: '14px'}}
                                                     className={"w-25 text-end fw-bold"}>{item.profits}%
                                                </div>
                                            </div>
                                            <div className={"d-flex mb-1"}>
                                                <div style={{fontSize: '14px'}} className={"w-75"}>kuniga tekshiruv soni
                                                </div>
                                                <div style={{fontSize: '14px'}}
                                                     className={"w-25 text-end fw-bold"}>{item.metaGORobotsAvailablePerDay} vaqt
                                                </div>
                                            </div>
                                            <div className={"d-flex mb-1"}>
                                                <div style={{fontSize: '14px'}} className={"w-75"}>jamoa mukofoti foizi
                                                </div>
                                                <div style={{fontSize: '14px'}}
                                                     className={"w-25 text-end fw-bold"}>{item.teamAward}%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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