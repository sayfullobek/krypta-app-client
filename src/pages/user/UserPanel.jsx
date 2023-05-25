import {PrimaryCards} from "../../component/primaryCards/PrimaryCards";
import {CoinsList} from "../../component/primaryCards/CoinsList";
import {AboutApp} from "../../component/primaryCards/AboutApp";
import React, {useEffect, useState} from "react";
import {embeddedGet} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {Carusel} from "../../component/Carusel";
import {PrimaryModal} from "../../component/primaryModal/PrimaryModal";
import video from '../../assets/video.mp4'
import {Loader} from "../../component/Loader";
import {useNavigate} from "react-router-dom";

export const UserPanel = ({user}) => {
    const [aboutApp, setAboutApp] = useState({})
    const [id, setId] = useState('')
    const navigate = useNavigate();

    const getAppAbout = async () => {
        try {
            setLoading(true)
        } catch (err) {
        }
    }

    useEffect(() => {
        getAppAbout()
    }, [])
    const arr = [
        {name: 'boboxon 100$ yutib oldi'},
        {name: 'asl 200$ yutib oldi'},
        {name: 'shavkat 10$ yutib oldi'},
        {name: 'qozi raxmat yutib oldi'},
        {name: 'ali 90$ yutib oldi'},
        {name: 'musulmon 300$ yutib oldi'},
        {name: 'hoji brat 200$ yutib oldi'},
        {name: 'boboxon 100$ yutib oldi'},
        {name: 'boboxon 100$ yutib oldi'},
        {name: 'boboxon 100$ yutib oldi'},
        {name: 'boboxon 100$ yutib oldi'},
    ]
    let stylejon = {
        overflow: 'hidden',
        width: '100%',
        height: '30px',
    }
    const [loading, setLoading] = useState(false)
    const [coin, setCoins] = useState([])

    const getAll = async () => {
        try {
            await embeddedGet(Apis.coin, setCoins, "data")
            await embeddedGet(Apis.aboutAppGet, setAboutApp, "data")
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        const getJar = () => {
            setTimeout(() => {
                stylejon = {
                    transform: `translateY(${arr.length}px)`
                }
            }, 1000)
        }
        getJar()
        getAll()
    }, [])


    return (
        <div className={"p-2"}>
            {loading ? (
                <>
                    <PrimaryModal/>
                    <Carusel/>
                    <br/>
                    <div className="card text-bg-dark">
                        <video controls>
                            <source src={video}/>
                        </video>
                    </div>
                    <br/>
                    <PrimaryCards/>
                    <CoinsList status={"panel"} coin={coin} user={user}/>
                    <AboutApp aboutApp={aboutApp}/>
                </>
            ) : (
                <Loader/>
            )}
        </div>
    )
}