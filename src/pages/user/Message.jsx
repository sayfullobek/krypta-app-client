import {useParams, useNavigate} from 'react-router-dom'
import {useEffect, useState} from "react";
import {embeddedGet, getOneAbout} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {Loader} from "../../component/Loader";

export const Message = () => {
    const ids = useParams().id
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState([])
    const [notification, setNotification] = useState({})

    const getAll = async () => {
        try {
            await embeddedGet(Apis.message + "/" + ids, setMessage, "data")
            setNotification(await getOneAbout(Apis.notification, ids, "data"))
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getAll()
    }, [])

    const getOne = (id) => {
        navigate("/notification/messages/" + ids + "/get-message/" + id)
    }

    return (
        <div>
            {loading ? (
                <div className={"w-100 d-flex align-items-center justify-content-center flex-column"}>
                    {message.map(item => (
                        <div onClick={() => getOne(item.id)} className={"p-3 m-2"}
                             style={{
                                 width: '96%',
                                 borderRadius: '10px',
                                 borderBottom: '1px solid #aea4a475',
                                 backgroundColor: 'white'
                             }}>
                            <div className={"fw-bold d-flex align-items-center justify-content-between"}>
                                <div style={{fontSize: '16px'}}>
                                    {notification.description}
                                </div>
                                <div style={{fontSize: '12px'}}>
                                    {item.whenWrite.substr(0, 10)} {item.whenWrite.substr(11, 8)}
                                </div>
                            </div>
                            <div>
                                {item.uzName}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}