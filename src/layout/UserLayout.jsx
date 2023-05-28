import {Outlet, useLocation} from 'react-router-dom'
import {NotFoundPages} from "../pages/NotFoundPages";
import {NavBar} from "../component/navbar/NavBar";

export const UserLayout = () => {
    const location = useLocation().pathname
    const token = localStorage.getItem("token")

    return (
        <div>
            {token ? (
                <div className={"w-100 d-flex align-items-center justify-content-center flex-column"}>
                    <NavBar/>
                    <main className={""}
                          style={{height: '92vh', overflow: 'auto', backgroundColor: 'rgba(226, 222, 222, 0.42)'}}>
                        <section style={{width: '100%', overflow: 'auto'}} className="section section__height"
                                 id="home">
                            <Outlet/>
                        </section>
                    </main>
                    {/*<TabBar/>*/}
                </div>
            ) : (
                <NotFoundPages/>
            )}
        </div>
    )
}