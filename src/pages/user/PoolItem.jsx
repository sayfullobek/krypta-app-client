import {useEffect, useState} from "react";
import {embeddedGet, getOneAbout} from "../../serverConnect/service/Service";
import {Apis, PrimaryImg} from "../../serverConnect/Apis";
import {useNavigate, useParams} from "react-router-dom";
import {Loader} from "../../component/Loader";
import logo from '../../assets/alfa-coin.jpg'
import {Button} from "reactstrap";


export const PoolItem = () => {
    const id = useParams().id
    const navigate = useNavigate()
    const [pool, setPool] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const getAll = async () => {
            try {
                await embeddedGet(Apis.getInvest + "/" + id, setPool, "data")
                setLoading(true)
            } catch (err) {
            }
        }
        getAll()
    }, [])
    const bacImgStyle = {
        backgroundImage: `url("${logo}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '20vh'
    }
    const imgParda = {
        backgroundColor: '#38363675',
        height: '100%'
    }
    const getInvest = (invId) => {
        navigate(`/pool/item/${id}/${invId}`)
    }
    return (
        <>
            {loading ? (
                <div className={"w-100 d-flex align-items-center justify-content-center flex-column"}>
                    <div className={"w-100"} style={bacImgStyle}>
                        <div className={"w-100"} style={imgParda}/>
                    </div>
                    <div className={"w-100 d-flex align-items-center justify-content-center flex-column"}>
                        {pool.map(item => (
                            <div className={"mt-2 p-3 d-flex align-items-center justify-content-center flex-column"}
                                 style={{
                                     width: '96%',
                                     backgroundColor: 'white',
                                     borderRadius: '10px',
                                     boxShadow: '#cfc6c67a 0px 0px 10px 1px'
                                 }}>
                                <div className={"w-100 d-flex align-items-center justify-content-between mb-2"}>
                                    <div className={"text-dark"}>
                                        <img
                                            src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Tether-USDT-icon.png"
                                            width={"22px"} alt=""/><span className={"m-2"}>{item.stakingPool}</span>
                                    </div>
                                    <div>Financial amount {item.financialAmount}</div>
                                </div>
                                <div className={"w-100 d-flex align-items-center justify-content-between"}>
                                    <div className={"d-flex align-items-start justify-content-center flex-column"}>
                                        <div style={{fontSize: '12px'}} className={"text-secondary"}>
                                            Monthly income
                                        </div>
                                        <div className={"fw-bold"}>
                                            {item.monthly}%
                                        </div>
                                    </div>
                                    <div className={"d-flex align-items-start justify-content-center flex-column"}>
                                        <div style={{fontSize: '12px'}} className={"text-secondary"}>
                                            finanacial duration
                                        </div>
                                        <div className={"fw-bold"}>
                                            {item.howManyDays}day
                                        </div>
                                    </div>
                                    <div className={"d-flex align-items-start justify-content-center flex-column"}>
                                        <div style={{fontSize: '12px'}} className={"text-secondary"}>
                                            Open level
                                        </div>
                                        <div className={"fw-bold"}>
                                            barcha sinflar
                                        </div>
                                    </div>
                                </div>
                                <div className={"w-100 d-flex align-items-center justify-content-center mt-3"}>
                                    <Button onClick={() => getInvest(item.id)} style={{fontSize: '14px', width: '98%'}}
                                            color={"primary"}>Immediately
                                        deposit
                                        in quanification</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <Loader/>
            )}
        </>
    )
}