import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {embeddedGet, getWithdrawal} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {Loader} from "../../component/Loader";

export const WithDrawal = ({user, status}) => {
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
        getAll()
    })
    const navLinks = (item) => {
        localStorage.setItem("nickName", item.nickName)
        localStorage.setItem("valyutaType", item.valyutaType)
        localStorage.setItem("primaryTarmoq", item.primaryTarmoq)
        localStorage.setItem("withAddress", item.withAddress)
        if (status === "address") {
            navigate("/auth/save-address")
        } else {
            navigate("/auth/release-now/now-release")
        }
    }
    const removeStorage = () => {
        localStorage.setItem("nickName", "")
        localStorage.setItem("valyutaType", "")
        localStorage.setItem("primaryTarmoq", "")
        localStorage.setItem("withAddress", "")
    }
    return (
        <div className={"w-100"} style={{height: '100vh'}}>
            {loading ? (
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
                        address qo'shish
                    </Link>
                </>
            ) : (
                <Loader/>
            )}
        </div>
    )
}