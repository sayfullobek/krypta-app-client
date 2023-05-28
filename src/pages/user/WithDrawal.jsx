import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {embeddedGet} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {Loader} from "../../component/Loader";
import {CantForgetPassword} from "./CantForgetPassword";

export const WithDrawal = ({user, status, lan}) => {
    const navigate = useNavigate();
    const [address, setAddress] = useState([])
    const [loading, setLoading] = useState(false)
    const id = localStorage.getItem("__id__")
    useEffect(() => {
        const getAll = async () => {
            try {
                await embeddedGet(Apis.withdrawal + "/" + user.id, setAddress, "data")
                setLoading(true)
            } catch (err) {
            }
        }
        getAll().then(r => r)
    }, [])
    const navLinks = (item) => {
        localStorage.setItem("nickName", item.nickName)
        localStorage.setItem("valyutaType", item.valyutaType)
        localStorage.setItem("primaryTarmoq", item.primaryTarmoq)
        localStorage.setItem("withAddress", item.withAddress)
        if (status === "address") {
            navigate("/auth/save-address")
        } else {
            localStorage.setItem("__address_id__", item.id)
            navigate("/auth/release-now/now-release")
        }
    }
    const removeStorage = () => {
        localStorage.setItem("nickName", "")
        localStorage.setItem("valyutaType", "")
        localStorage.setItem("primaryTarmoq", "")
        localStorage.setItem("withAddress", "")
    }
    console.log(user)
    return (
        <div className={"w-100"} style={{height: '100vh'}}>
            {loading ? (
                <>
                    {user.aPasswordThatCannotBeForgotten === "" || user.apasswordThatCannotBeForgotten === null ? (
                        <>
                            <CantForgetPassword lan={lan}/>
                        </>
                    ) : (
                        <>
                            <div className={"w-100"}>
                                {address.map(item => (
                                    <div onClick={() => navLinks(item)} className={"w-100 p-2 fw-bold text-center"}
                                         style={{
                                             backgroundColor: 'white',
                                             borderBottom: '1px solid rgb(169 162 162 / 25%)',
                                             fontSize: '18px'
                                         }}>
                                        {item.nickName}
                                    </div>
                                ))}
                            </div>
                            <Link onClick={() => removeStorage()}
                                  to={status === "address" ? "/auth/save-address" : "/auth/pay/save-address"}
                                  className={"btn btn-primary m-2"}
                                  style={{position: 'absolute', bottom: '0', width: '97%'}}>
                                {lan === "ENG" ? "Add address" : "Добавить адрес"}
                            </Link>
                        </>
                    )}
                </>
            ) : (
                <Loader/>
            )}
        </div>
    )
}