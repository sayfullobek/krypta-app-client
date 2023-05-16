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
                        <Route path={"/gildirak"} element={<Gildirak/>}/>
                    </Route>
                    <Route path={"*"} element={<NotFoundPages/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
