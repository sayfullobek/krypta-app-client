import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {HeaderUser} from "../component/headerPanelUser/HeaderUser";
import {useEffect} from "react";

export const MenyuLayout = () => {
    const location = useLocation().pathname
    const headers = [
        {link: "/auth/register", location: "/auth/register/user-info", text: "asosiy sahifaga o'tish"},
    ]
    return (
        <div>
            <HeaderUser text={"bosh sahifaga o'tish"}
                        link={location === "/auth/profile" ? "/me" : location === "/auth/withdrawal-address" ? "/me" : location === "/auth/security-settings" ? "/me" : location === "/auth/feedback" ? "/me" : location === "/auth/switch-languages" ? "/me" : location === "/auth/save-address" ? "/auth/withdrawal-address" : location === "/auth/now-pay/pay-photo" ? "/auth/now-pay" : "/"}/>
            <div className="section__height"
                 style={{backgroundColor: 'rgba(226, 222, 222, 0.42)'}}>
                <Outlet/>
            </div>
        </div>
    )
}