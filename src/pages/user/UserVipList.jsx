import {Apis} from "../../serverConnect/Apis";
import {useNavigate} from 'react-router-dom'

export const UserVipList = ({vips, lan, balance, userVip}) => {
    const navigate = useNavigate()
    console.log(userVip)
    return (
        <div className={"w-100 d-flex align-items-center justify-content-center flex-column"}>
            {vips.map(item => (
                <div className={"mt-3 p-3 d-flex align-items-center justify-content-center flex-column"}
                     style={{
                         width: '99%',
                         backgroundColor: 'white',
                         borderRadius: '10px',
                         boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px'
                     }}>
                    <div className={"w-100 mb-4 d-flex align-items-center justify-content-between"}>
                        <div className={"col-5 d-flex align-items-center justify-content-between"}>
                            <img style={{width: '45%', borderRadius: '50%'}} src={Apis.getPhoto + item.photoId}
                                 alt="connection error"/>
                            <div className={"fw-bold"} style={{fontSize: '18px'}}>
                                {item.name}
                            </div>
                        </div>
                        <div className={"col-5 d-flex align-items-center justify-content-end"}>
                            <div className={"fw-bold"} style={{fontSize: '18px'}}>
                                {item.shareRatio} %
                            </div>
                        </div>
                    </div>
                    <div className={"w-100 d-flex align-items-center justify-content-between"}>
                        <div className={"col-5 d-flex align-items-center justify-content-between"}>
                            <div>
                                <p className={"m-0"}>{lan === "ENG" ? "device price" : "цена устройства"}</p>
                                <div className={"fw-bold"} style={{fontSize: '14px'}}>
                                    {item.minQuantifyAmount}-{item.maxQuantifyAmount}$
                                </div>
                            </div>
                        </div>
                        <div className={"col-7 d-flex align-items-center justify-content-end"}>
                            {userVip !== null ? userVip.id === item.id : "" ? (
                                <button
                                    className={"btn btn-success fw-bold"}
                                    style={{borderRadius: '16px'}}>{lan === "ENG" ? "purchased" : "купил"}
                                    {" "}
                                </button>
                            ) : (
                                Number.parseFloat(balance) >= Number.parseFloat(item.minQuantifyAmount) ? (
                                    <button onClick={() => navigate(`/change-vip-by-user/${item.id}`)}
                                            className={"btn btn-warning fw-bold"}
                                            style={{borderRadius: '16px'}}>{lan === "ENG" ? "Buy now" : "Купить сейчас"}{" "}
                                        <i className="bi bi-unlock"/>
                                    </button>
                                ) : (
                                    <button className={"btn btn-warning disabled fw-bold"}
                                            style={{borderRadius: '16px'}}>{lan === "ENG" ? "Buy now" : "Купить сейчас"}{" "}
                                        <i className="bi bi-lock"/>
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}