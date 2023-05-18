import {Apis} from "../../serverConnect/Apis";
import {Link} from "react-router-dom";

export const HeaderMe = ({token}) => {
    return (
        <div className={"w-100 d-flex align-items-center justify-content-center"}>
            <div className={"w-50 d-flex"}>
                <Link to={token ? "/auth/profile" : "/auth/login"} className={"btn"}>
                    bos
                    <img className={"w-25"} src={Apis.getPhoto + localStorage.getItem("photoId")} alt=""/>
                </Link>
                <div className={"w-75 d-flex align-items-center justify-content-center flex-column"}>
                    <h6 className={"text-dark"}>{token ? localStorage.getItem("firstName") : "hush kelibsiz"}</h6>
                    <p className={"text-secondary"}
                       style={{fontSize: '11px'}}>{token ? localStorage.getItem("__id__") : ""}</p>
                </div>
            </div>
            <div className={"w-50"}>
                <div className={"w-100 d-flex align-items-center justify-content-center flex-column"}>
                    <h6>logo</h6>
                    <p className={"text-secondary"} style={{fontSize: '11px'}}>do'stlarni taklif qiling</p>
                </div>
            </div>
        </div>
    )
}