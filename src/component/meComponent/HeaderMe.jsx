import {Link, useNavigate} from "react-router-dom";
import './copy'
import {success} from "../../utils/MyToast";
import logo from '../../assets/alfa-logo.jpg'

export const HeaderMe = ({token, user}) => {
    const navigate = useNavigate();
    const copyToClipboard = () => {
        let input;
        input = document.getElementById('copyId').innerText;
        navigator.clipboard.writeText(input).then(r => r);
        success("nusxalandi")
    }

    return (
        <div className={"w-100 d-flex align-items-center justify-content-center"}>
            {token ? (
                <div className={"w-50 d-flex"}>
                    <Link to={token ? "/auth/profile" : "/auth/login"} className={"btn w-25 m-0 p-0"}
                          style={{outline: 'none'}}>
                        <img width={"100%"} style={{borderRadius: '50%'}} src={logo} alt=""/>
                    </Link>
                    <div className={"w-75 d-flex align-items-start justify-content-center flex-column"}>
                        <h6 className={"text-dark"}>{token ? localStorage.getItem("firstName") : "hush kelibsiz"}</h6>
                        <div className={"d-flex"}
                             style={{fontSize: '11px'}}>
                            <p className={"text-secondary"} style={{fontSize: '12px'}}> UID
                                : id </p>
                            <i className="fa-solid fa-copy" style={{marginLeft: '6px'}}
                               onClick={() => copyToClipboard()}/>
                            <p id="copyId"
                               className={"d-none"}>{token ? user.id : ""}</p>
                        </div>
                        <div id="output"/>
                    </div>
                </div>
            ) : (
                <></>
            )}
            <div className={"w-50"}>
                <div onClick={() => navigate(token ? "/auth/invite-friends" : "/auth/register")}
                     className={"w-100 d-flex align-items-center justify-content-center flex-column"}>
                    <i className="bi bi-person-add m-0 p-0" style={{fontSize: '26px'}}/>
                    <p className={"text-secondary mt-0 p-0"} style={{fontSize: '11px'}}>do'stlarni taklif qiling</p>
                </div>
            </div>
        </div>
    )
}