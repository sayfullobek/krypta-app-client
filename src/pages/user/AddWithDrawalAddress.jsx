import React, {useState} from "react";
import {Button} from "reactstrap";
import {error} from "../../utils/MyToast";
import {Save} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {useNavigate} from 'react-router-dom'

export const AddWithDrawalAddress = ({status, lan}) => {
    const userId = localStorage.getItem("__id__")
    const navigate = useNavigate();
    const [valyutaType, setValyutaType] = useState(localStorage.getItem("valyutaType") || 'USDT')
    const [primaryTarmoq, setPrimaryTarmoq] = useState(localStorage.getItem("primaryTarmoq") || 'TRC20')
    const [nickName, setNickName] = useState(localStorage.getItem("nickName") || '')
    const [withAddress, setWithAddress] = useState(localStorage.getItem("withAddress") || '')
    const coinArr = [
        {logo: '', name: 'USDT', net: [{name: 'TRC20'}, {name: 'BEP20'}, {name: 'ERC20'}]},
        {logo: '', name: 'BTC', net: [{name: "BTC"}]},
        {logo: '', name: 'ETH', net: [{name: "ETH"}]},
        {logo: '', name: 'MAG', net: [{name: 'TRC20'}]},
        {logo: '', name: 'TRX', net: [{name: 'TRC20'}]},
    ]
    const saveAddress = async () => {
        if (nickName.trim().length < 3) {
            return error("Taxallusingiz xato iltimos qayta urinib ko'ring")
        }
        const data = {userId, valyutaType, primaryTarmoq, nickName, withAddress}
        await Save(data, Apis.withdrawal, "", navigate, status === "address" ? "/auth/withdrawal-address" : "/auth/release-now")
    }
    return (
        <div className={"w-100"} style={{height: '60vh'}}>
            <div style={{height: '1vh'}}/>
            <div className={"card p-3 m-2"} style={{backgroundColor: 'white', width: '97%'}}>
                <p className={"text-dark"}>{lan === "ENG" ? "select a currency" : "выберите валюту"}</p>
                <button type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"
                        className="form-control w-100 d-flex p-2 text-decoration-none"
                        style={{
                            height: '10%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: '#a598984a',
                            borderBottom: '1px solid rgb(169 162 162 / 25%)'
                        }}>
                    <div className={"d-flex w-75 align-items-center"}>
                        <div className={"text-dark"}>{valyutaType}</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 320 512" style={{width: '12px', transform: 'rotate(180deg)'}}>
                        <path
                            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                    </svg>
                </button>
            </div>
            <div className={"card p-3 m-2"} style={{backgroundColor: 'white', width: '97%'}}>
                <p className={"text-dark"}>{lan === "ENG" ? "Select the main network" : "Выберите основную сеть"}</p>
                <div className={"w-100 d-flex align-items-center justify-content-around"}>
                    {coinArr.map(item => (
                        item.name === valyutaType ? (
                            item.net.map(i => (
                                <Button color={primaryTarmoq === i.name ? "primary" : "secondary"}
                                        onClick={() => setPrimaryTarmoq(i.name)} outline
                                        className={"w-25"}>
                                    {i.name}
                                </Button>
                            ))
                        ) : (<></>)
                    ))}
                </div>
            </div>
            <div className={"card p-3 m-2"} style={{backgroundColor: 'white', width: '97%'}}>
                <p className={"text-dark"}>{lan === "ENG" ? "Nickname" : "Псевдоним"}</p>
                <input type="text" value={nickName} onChange={e => setNickName(e.target.value)}
                       placeholder={lan === "ENG" ? "Please enter your nickname" : "Пожалуйста, введите ваш никнейм"}
                       className={"form-control"}/>
            </div>
            <div className={"card p-3 m-2"} style={{backgroundColor: 'white', width: '97%'}}>
                <p className={"text-dark"}>{lan === "ENG" ? "Easy removal" : "Легкое удаление"}</p>
                <input type="text" value={withAddress} onChange={e => setWithAddress(e.target.value)}
                       placeholder={lan === "ENG" ? "Please enter your wallet address" : "Пожалуйста, введите адрес вашего кошелька"}
                       className={"form-control"}/>
            </div>
            <Button onClick={() => saveAddress()}
                    color={withAddress.trim().length > 6 ? "primary m-2" : "primary m-2 disabled"}
                    style={{width: '97%', position: 'absolute', bottom: '10px'}}>{lan === "ENG" ? "To add\n" +
                "                confirm" : "Добавить\n" +
                "                подтверждать"}</Button>

            <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom"
                 aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title"
                        id="offcanvasBottomLabel">{lan === "ENG" ? "Select a currency type" : "Выберите тип валюты"}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"/>
                </div>
                <div className="offcanvas-body small">
                    {coinArr.map(item => (
                        <div className={"w-100 d-flex align-items-center justify-content-between"}
                             onClick={() => setValyutaType(item.name)}
                             style={{borderBottom: '1px solid rgb(169 162 162 / 25%)'}}>
                            <div className={"text-dark fw-bold p-2"}>{item.name}</div>
                            <div><input type="radio" checked={valyutaType === item.name}/></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}