import {Apis} from "../../serverConnect/Apis";
import {embeddedGet} from "../../serverConnect/service/Service";
import {useEffect, useState} from "react";
import Carousel from "react-multi-carousel";
import {Loader} from "../../component/Loader";
import {useNavigate} from 'react-router-dom'

export const Help = ({lan}) => {
    const [loading, setLoading] = useState(false)
    const [help, setHelp] = useState([])
    const [id, setId] = useState('')
    const [helpName, setHelpName] = useState('ACCOUNT_PROBLEMS')
    const navigate = useNavigate()
    const getAll = async () => {
        try {
            await embeddedGet(Apis.help, setHelp, "embedded")
            setLoading(true)
        } catch (err) {
        }
    }

    useEffect(() => {
        getAll()
    }, [])

    const buttons = [
        {name: lan === "ENG" ? "account" : "счет", val: "ACCOUNT_PROBLEMS"},
        {name: lan === "ENG" ? "income" : "доход", val: "PROBLEM_OF_INCOME"},
        {name: lan === "ENG" ? "other" : "другой", val: "OTHER_PROBLEMS"},
    ]

    const getOneHelp = (id) => {
        navigate(`/help/${id}`)
    }

    return (
        <div className={"w-100 d-flex align-items-center justify-content-evenly flex-column p-2"}>
            {loading ? (
                <>
                    <div className="d-flex align-items-center justify-content-evenly"
                         style={{width: '100%', height: '6vh'}}>
                        {buttons.map(item => (
                            <div className={helpName === item.val ? "btn btn-primary" : "btn"}
                                 onClick={() => setHelpName(item.val)}>
                                {item.name}
                            </div>
                        ))}
                    </div>
                    <div className={"w-100 mt-3"}>
                        {help.map(item => (
                            item.helpName === helpName ? (
                                <div className="card p-3" onClick={() => getOneHelp(item.id)}>
                                    <div className={'text-dark'}>
                                        {item.uzName}
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )
                        ))}
                    </div>
                </>
            ) : (
                <Loader/>
            )}
        </div>
    )
}