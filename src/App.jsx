import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Register} from "./pages/auth/Register";
import {UserPanel} from "./pages/user/UserPanel";
import {UserLayout} from "./layout/UserLayout";
import {NotFoundPages} from "./pages/NotFoundPages";
import {UserInfo} from "./pages/auth/UserInfo";
import {Notification} from "./pages/user/Notification";
import {MenyuLayout} from "./layout/MenyuLayout";
import {Pools} from "./pages/user/Pools";
import {Amount} from "./pages/user/Amount";
import {Assets} from "./pages/user/Assets";
import {Me} from "./pages/user/Me";
import {Login} from "./pages/auth/Login";
import {Profile} from "./pages/user/Profile";
import {FeedBack} from "./pages/user/FeedBack";
import {SecuritySettings} from "./pages/user/SecuritySettings";
import {WithDrawal} from "./pages/user/WithDrawal";
import {SwitchLanguage} from "./pages/user/SwitchLanguage";
import {AddWithDrawalAddress} from "./pages/user/AddWithDrawalAddress";
import {NowPay} from "./pages/user/NowPay";
import {PayPhoto} from "./pages/user/PayPhoto";
import {useEffect, useState} from "react";
import {getOneAbout} from "./serverConnect/service/Service";
import {Apis} from "./serverConnect/Apis";
import {NowRelease} from "./pages/user/NowRelease";
import {InviteFriends} from "./pages/user/InviteFriends";
import {Message} from "./pages/user/Message";
import {PoolItem} from "./pages/user/PoolItem";
import {GetOneMessage} from "./pages/user/GetOneMessage";
import {Help} from "./pages/user/Help";
import {InvestUser} from "./pages/user/InvestUser";
import {HelpItem} from "./pages/user/HelpItem";
import {MoneyUploadInvest} from "./pages/user/MoneyUploadInvest";
import {MoneyUploadAgree} from "./pages/user/MoneyUploadAgree";

function App() {
    const lan = localStorage.getItem("__lan__")
    const id = localStorage.getItem("__id__")
    const [user, setUser] = useState({})
    const [wallet, setWallet] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const getMe = async () => {
            try {
                setUser(await getOneAbout(Apis.getMe, id, "data"))
                setLoading(true)

            } catch (err) {
            }
        }
        getMe()
    }, [])
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<UserLayout/>}>
                        <Route index element={<UserPanel user={user}/>}/>
                        <Route path={"/pool"} element={<Pools/>}/>
                        <Route path={"/amount"} element={<Amount user={user}/>}/>
                        <Route path={"/assets"} element={<Assets user={user} load={loading}/>}/>
                        <Route path={"/me"} element={<Me lan={lan} user={user} loading={loading}/>}/>
                    </Route>
                    <Route element={<MenyuLayout/>}>
                        <Route path={"/notification"} element={<Notification/>}/>
                        <Route path={"/notification/messages/:id"} element={<Message/>}/>
                        <Route path={"/notification/messages/:id/get-message/:messageId"} element={<GetOneMessage/>}/>
                        <Route path={"/pool/item/:id"} element={<PoolItem/>}/>
                        <Route path={"/pool/item/:id/:invId"} element={<InvestUser user={user}/>}/>
                        {/*<Route path={"/pool/item/:id/:invId/money-upload"} element={<MoneyUploadInvest user={user}/>}/>*/}
                        {/*<Route path={"/pool/item/:id/:invId/money-upload/agree"}*/}
                        {/*       element={<MoneyUploadAgree user={user}/>}/>*/}
                        <Route path={"/auth/register"} element={<Register lan={lan}/>}/>
                        <Route path={"/auth/register/user-info"} element={<UserInfo/>}/>
                        <Route path={"/auth/login"} element={<Login/>}/>
                        <Route path={"/auth/profile"} element={<Profile/>}/>
                        {/*<Route path={"/lucky-jet"} element={<Gildirak/>}/>*/}
                        <Route path={"/auth/feedback"} element={<FeedBack/>}/>
                        <Route path={"/auth/security-settings"} element={<SecuritySettings/>}/>
                        <Route path={"/auth/withdrawal-address"}
                               element={<WithDrawal user={user} status={"address"}/>}/>
                        <Route path={"/auth/switch-languages"} element={<SwitchLanguage/>}/>
                        <Route path={"/auth/save-address"} element={<AddWithDrawalAddress status={"address"}/>}/>
                        <Route path={"/auth/now-pay"} element={<NowPay/>}/>
                        <Route path={"/auth/now-pay/pay-photo"} element={<PayPhoto user={user}/>}/>
                        <Route path={"/auth/release-now"} element={<WithDrawal user={user} status={"pay"}/>}/>
                        <Route path={"/auth/release-now/now-release"}
                               element={<NowRelease user={user} loading={loading}/>}/>
                        <Route path={"/auth/pay/save-address"} element={<AddWithDrawalAddress status={"pay"}/>}/>
                        <Route path={"/auth/invite-friends"} element={<InviteFriends user={user}/>}/>
                        <Route path={"/help"} element={<Help/>}/>
                        <Route path={"/help/:helpId"} element={<HelpItem/>}/>
                        <Route path={"/amount/money-upload"}
                               element={<MoneyUploadInvest user={user}/>}/>
                        <Route path={"/amount/money-upload/agree"}
                               element={<MoneyUploadAgree user={user}/>}/>
                    </Route>
                    <Route path={"*"} element={<NotFoundPages/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
