import {useEffect, useState} from "react";
import {embeddedGet} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {Loader} from "../../../component/Loader";

export const History = () => {
    const [history, setHistory] = useState([])
    const [loading, setLoading] = useState(false)
    const getAll = async () => {
        try {
            await embeddedGet(Apis.history + "/" + localStorage.getItem("__id__"), setHistory, "data")
            setLoading(loading)

        } catch (err) {
        }
    }
    useEffect(() => {
        getAll()
    }, [])
    console.log(history)
    return (
        <div>
            {loading ? (
                <div>salom</div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}