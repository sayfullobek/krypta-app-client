import {useEffect, useState} from "react";
import {embeddedGet} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {Loader} from "../../component/Loader";
import {useNavigate} from "react-router-dom";

export const Pools = ({lan}) => {
    const globe = "https://github.blog/wp-content/uploads/2020/12/102573561-8e872300-40a3-11eb-9feb-b480aeae0564.png?resize=1024%2C513"
    const navigate = useNavigate()
    const [pools, setPools] = useState([])
    const [loading, setLoading] = useState(false)

    const getAll = async () => {
        try {
            await embeddedGet(Apis.pools, setPools, "data")
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getAll()
    }, [])

    const card = {
        width: '100%',
        height: '20%',
        border: '1px solid #ab9c9c73',
        borderRadius: "6px",
        boxShadow: '0 0 4px .01px #ab9c9c73',
        backgroundColor: 'white'
    }

    const getOne = (id) => {
        navigate(`/pool/item/${id}`)
    }

    return (
        <>
            {loading ? (
                <div style={{width: '100%', padding: '0 0 0 4%', backgroundColor: 'white'}} className={"p-3"}>
                    <div className="card text-bg-dark">
                        <img src={globe} className="card-img" alt="1"/>
                        <div className="card-img-overlay">
                            <h5 className="card-title text-light">{lan === "ENG" ? "ALFA mining pool" : "Пул для майнинга АЛЬФА"}</h5>
                            <p className="card-text">Staking osonroq</p>
                            <p className="card-text"><small className={"text-success"}>Osonlik bilan soqqa qiling
                                okalar</small>
                            </p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <p className={"text-dark"} style={{fontSize: '14px'}}><span
                            style={{fontSize: '16px'}}>🔥</span></p>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center flex-column">
                        {pools.map(item => (
                            <div onClick={() => getOne(item.id)} style={card} className={"p-2 mt-2 mb-2"}>
                                <div className="d-flex">
                                    <img style={{borderRadius: '50%', width: '14%', height: '80%', margin: '1% 0'}}
                                         src={Apis.getPhoto + item.photoId}
                                         alt=""/>
                                    <div className={"row p-0"} style={{margin: '0 8%', height: ''}}>
                                        <div className="col-12 p-0"><h6
                                            style={{fontSize: '14px'}}>{lan === "ENG" ? item.enName : item.ruName}</h6>
                                        </div>
                                        <div className="col-12 p-0"><p
                                            style={{fontSize: '12px'}}>{lan === "ENG" ? "floating rate" : "плавающая ставка"}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className={"col-5"}>
                                        <div className="col text-primary">{item.annualizedInterest}%</div>
                                        <div className="col">{lan === "ENG" ? "percentage" : 'процент'}</div>
                                    </div>
                                    <div className={"col-5"}>
                                        <div className="col text-primary">{item.stakingMinimum}</div>
                                        <div className="col">{lan === "ENG" ? "rate" : "ставка"}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <br/>
                    <br/>
                </div>
            ) : (
                <Loader/>
            )}
        </>
    )
}