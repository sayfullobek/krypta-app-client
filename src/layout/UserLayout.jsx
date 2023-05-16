import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import {TabBar} from "../component/tabbar/TabBar";

export const UserLayout = () => {
    const location = useLocation().pathname
    const token = localStorage.getItem("token")

    return (
        <div>
            <main className={""} style={{backgroundColor: 'rgba(226, 222, 222, 0.42)'}}>
                <section style={{overflow: 'auto'}} className="section section__height" id="home">
                    <Outlet/>
                </section>
            </main>
            <TabBar/>
        </div>
    )
}