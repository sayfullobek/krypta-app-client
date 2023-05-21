import './notification.css'
import {useEffect, useState} from "react";
import {embeddedGet} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {useNavigate} from "react-router-dom";

export const Notification = () => {
    const navigate = useNavigate()
    const [notification, setNotification] = useState([])
    const [loading, setLoading] = useState(false)
    const getAll = async () => {
        try {
            await embeddedGet(Apis.notification, setNotification, "data")
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getAll()
    }, [])

    const getOneNoti = (id) => {
        navigate("/notification/messages/" + id)
    }

    return (
        <div className={"w-100 p-0 notification"}>
            {notification.map(item => (
                <div onClick={() => getOneNoti(item.id)} className={"w-100 not"}>
                    <div>
                        <img className={"mt-1"} style={{borderRadius: '50%'}} width={"100%"}
                             src={Apis.getPhoto + item.photoId}
                             alt="1"/>
                    </div>
                    <div className="col-10">
                        <div className={"d-flex w-100 align-items-center justify-content-between"}
                             style={{height: '30%'}}>
                            <h5>{item.uzName}</h5>
                            <p>{item.systemInformationDate.substr(0, 10)}</p>
                        </div>
                        <div>
                            {item.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}