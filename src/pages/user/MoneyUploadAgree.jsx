import React, {useEffect, useState} from "react";
import first from '../../assets/gifs/mining 1.gif'
import {success} from "../../utils/MyToast";
import {useNavigate} from 'react-router-dom'
import {Save} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";

export const MoneyUploadAgree = ({user, lan}) => {
    const navigate = useNavigate()
    const combinatinArr = [
        {by: 'BTC', to: 'LTC'},
        {by: 'LTC', to: 'BTC'},
        {by: 'DOGE', to: 'BTC'},
        {by: 'LTC', to: 'DOGE'},
        {by: 'ETH', to: 'BTC'},
        {by: 'LTC', to: 'TRX'},
        {by: 'TRX', to: 'ETH'},
        {by: 'ALF', to: 'BTC'},
        {by: 'ETH', to: 'TRX'},
        {by: 'BTC', to: 'ALF'},
    ]

    const timeArr = [
        {minutes: 2},
        {minutes: 1},
        {minutes: 1.5},
        {minutes: 0.8},
        {minutes: 0.6},
    ]

    let tr = 1;
    const [delay, setDelay] = useState(10);
    useEffect(() => {
        const generator = () => {
            if (tr === 2) {
                let timeRand = Number.parseInt(Math.random() * 5)
                setDelay(timeArr[timeRand].minutes * 60)
            }
            tr++;
        }
        generator()
    }, [])
    const save = async () => {
        let rand = Number.parseInt(Math.random() * 10)
        let arr = combinatinArr[rand]
        let info = arr.by + " - " + arr.to
        const data = {
            vipsId: user.vips.id,
            money: localStorage.getItem("__money__"),
            usersId: user.id,
            info
        }
        await Save(data, Apis.investmentUser, '', navigate, "/amount")
        window.location.reload()
    }
    let minutes = Math.floor(delay / 60);
    let seconds = Math.floor(delay % 60);
    useEffect(() => {
        const timer = setInterval(() => {
            setDelay(delay - 1);
        }, 1000);

        if (delay === 0) {
            clearInterval(timer);
        }

        if (minutes === 0 && seconds === 0) {
            success(lan === "ENG" ? "Please wait" : "пожалуйста, подождите")
            save().then(r => r)
        }

        return () => {
            clearInterval(timer);
        };
    });

    return (
        <div style={{marginTop: '12vh', height: '80vh', backgroundColor: 'white'}}
             className={"w-100 d-flex align-items-center justify-content-between flex-column"}>
            <div className={"w-100 d-flex align-items-center justify-content-between flex-column"}>
                <h5 className={"text-center"}>{lan === "ENG" ? "Please don't refresh the window and wait..." : "Пожалуйста, не обновляйте окно и подождите..."}</h5>
                <img src={first} alt=""/>
            </div>
            <div>
                <span>
                    {minutes}:{seconds}
                </span>
            </div>
        </div>
    )
}