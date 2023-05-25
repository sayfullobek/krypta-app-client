import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getOneAbout} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {Loader} from "../../component/Loader";

export const HelpItem = () => {
    const helpId = useParams().helpId
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [help, setHelp] = useState([])

    const getAll = async () => {
        try {
            setHelp(await getOneAbout(Apis.help, helpId, "data"))
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
                            {help.uzName}
                        </h5>
                    </div>
                    <div className={"fw-bold"} style={{overflow: 'auto', height: '90vh'}}>
                        {help.uzInfo}
                    </div>
                </div>
            ) : (
                <Loader/>
            )}
        </>
    )
}