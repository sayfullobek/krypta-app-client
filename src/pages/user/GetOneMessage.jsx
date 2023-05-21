import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {embeddedGet, getOneAbout} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {Loader} from "../../component/Loader";

export const GetOneMessage = () => {
    const msgId = useParams().messageId
    const notId = useParams().id
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState([])
    const [notification, setNotification] = useState([])

    const getAll = async () => {
        try {
            setMessage(await getOneAbout(Apis.getOneMessage, msgId, "data"))
            setNotification(await getOneAbout(Apis.notification, notId, "data"))
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getAll()
    }, [])

    return (
        <>
            {loading ? (
                <div className={"w-100 p-2"}>
                    <div style={{height: '10vh'}}>
                        <h5 className={"text-center fw-bold"}>
                            {notification.description}
                        </h5>
                        <p className={"text-center"}>
                            {message.whenWrite.substr(0, 10)} {message.whenWrite.substr(11, 8)}
                        </p>
                    </div>
                    <div className={"fw-bold"} style={{overflow: 'auto', height: '90vh'}}>
                        {message.uzDescription}
                    </div>
                </div>
            ) : (
                <Loader/>
            )}
        </>
    )
}
