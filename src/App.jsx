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
import {Gildirak} from "./component/gildirak/Gildirak";
import {Login} from "./pages/auth/Login";
import {Profile} from "./pages/user/Profile";
import {FeedBack} from "./pages/user/FeedBack";
import {SecuritySettings} from "./pages/user/SecuritySettings";
import {WithDrawal} from "./pages/user/WithDrawal";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<UserLayout/>}>
                        <Route index element={<UserPanel/>}/>
                        <Route path={"/pool"} element={<Pools/>}/>
                        <Route path={"/amount"} element={<Amount/>}/>
                        <Route path={"/assets"} element={<Assets/>}/>
                        <Route path={"/me"} element={<Me/>}/>
                    </Route>
                    <Route element={<MenyuLayout/>}>
                        <Route path={"/notification"} element={<Notification/>}/>
                        <Route path={"/auth/register"} element={<Register/>}/>
                        <Route path={"/auth/register/user-info"} element={<UserInfo/>}/>
                        <Route path={"/auth/login"} element={<Login/>}/>
                        <Route path={"/auth/profile"} element={<Profile/>}/>
                        <Route path={"/gildirak"} element={<Gildirak/>}/>
                        <Route path={"/auth/feedback"} element={<FeedBack/>}/>
                        <Route path={"/auth/security-settings"} element={<SecuritySettings/>}/>
                        <Route path={"/auth/withdrawal-address"} element={<WithDrawal/>}/>
                    </Route>
                    <Route path={"*"} element={<NotFoundPages/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
