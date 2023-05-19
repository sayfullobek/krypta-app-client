import {Apis} from "../../serverConnect/Apis";
import {Link, useNavigate} from "react-router-dom";
import './copy'
import {success} from "../../utils/MyToast";

export const HeaderMe = ({token}) => {
    const navigate = useNavigate();
    const copyToClipboard = () => {
        let input;
        input = document.getElementById('copyId').innerText;
        navigator.clipboard.writeText(input).then(r => r);
        success("nusxalandi")
    }

    return (
        <div className={"w-100 d-flex align-items-center justify-content-center"}>
            <div className={"w-50 d-flex"}>
                <Link to={token ? "/auth/profile" : "/auth/login"} className={"btn"}>
                    bos
                    <img className={"w-25"} src={Apis.getPhoto + localStorage.getItem("photoId")} alt=""/>
                </Link>
                <div className={"w-75 d-flex align-items-start justify-content-center flex-column"}>
                    <h6 className={"text-dark"}>{token ? localStorage.getItem("firstName") : "hush kelibsiz"}</h6>
                    <div className={"d-flex"}
                         style={{fontSize: '11px'}}>
                        <p className={"text-secondary"} style={{fontSize: '12px'}}> UID
                            : {token ? localStorage.getItem("__id__").substr(0, 6) : ""}</p>
                        <i className="fa-solid fa-copy" style={{marginLeft: '6px'}}
                           onClick={() => copyToClipboard()}/>
                        <p id="copyId"
                           className={"d-none"}>{token ? localStorage.getItem("__id__") : ""}</p>
                    </div>
                    <div id="output"/>
                </div>
            </div>
            <div className={"w-50"}>
                <div onClick={() => navigate("/auth/invite-friends")}
                     className={"w-100 d-flex align-items-center justify-content-center flex-column"}>
                    <i className="bi bi-person-add m-0 p-0" style={{fontSize: '26px'}}/>
                    <p className={"text-secondary mt-0 p-0"} style={{fontSize: '11px'}}>do'stlarni taklif qiling</p>
                </div>
            </div>
        </div>
    )
}