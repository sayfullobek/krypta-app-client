import {Link, useLocation, useNavigate} from "react-router-dom";
import logo from '../../assets/alfa-logo.png'
import {error} from "../../utils/MyToast";

export const NavBar = ({lan}) => {
    const pathName = useLocation().pathname
    const navigate = useNavigate()
    const navs = [
        {
            name: "Primary",
            link: '/',
            funct: "none",
            icons: "bx bx-home-alt nav__icon"
        },
        {
            name: lan === "ENG" ? "Profile" : "профиль",
            link: '/me',
            funct: "none",
            icons: "bx bx-user nav__icon"
        },
        {
            name: lan === "ENG" ? "History" : "история",
            link: '/history',
            funct: () => error(lan === "ENG" ? "Configuring for your device" : "Настройка для вашего устройства"),
            icons: "bx bx-book-alt nav__icon"
        },
        {
            name: lan === "ENG" ? "Contact us" : "Связаться с нами",
            link: '/contact-us',
            funct: () => error(lan === "ENG" ? "Configuring for your device" : "Настройка для вашего устройства"),
            icons: "bx bx-briefcase-alt nav__icon"
        },
        {
            name: lan === "ENG" ? "about Us" : "о нас",
            link: '/about-us',
            funct: () => error(lan === "ENG" ? "Configuring for your device" : "Настройка для вашего устройства"),
            icons: "bx bx-message-square-detail nav__icon"
        },
    ]
    return (
        <div style={{height: '8vh', position: 'fixed', top: '0'}}>
            <div className={"w-100 d-flex align-items-center justify-content-between"} style={{padding: '0 0 0 4%'}}>
                <div className={"w-75 d-flex align-items-center justify-content-start"}>
                    <img src={logo} style={{width: '10%'}} alt=""/>
                    <span className={"fw-bold"} style={{fontSize: '20px', marginLeft: '10px'}}>alpha - dig</span>
                </div>
                <div>
                    <button className="btn" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <i className="bi bi-list" style={{fontSize: '30px'}}/>
                    </button>
                </div>
            </div>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions"
                 aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Alpha - Dig</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"/>
                </div>
                <div className="offcanvas-body">
                    {navs.map(item => (
                        item.funct === "none" ? (
                            <div className={"mt-3 w-100 d-flex align-items-center justify-content-center"}>
                                <Link style={{
                                    height: '10%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-start',
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid rgb(169 162 162 / 25%)',
                                    fontSize: '17px'
                                }} to={item.link}
                                      className={"w-100 d-flex p-3 text-decoration-none text-dark fw-bold"}><i
                                    className={item.icons + " m-1 text-secondary"}
                                    style={{fontSize: '20px'}}/>{item.name}
                                </Link>
                            </div>
                        ) : (
                            <div className={"mt-3 w-100 d-flex align-items-center justify-content-center"}>
                                <button style={{
                                    height: '10%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-start',
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid rgb(169 162 162 / 25%)',
                                    fontSize: '17px'
                                }} onClick={() => item.funct()}
                                        className={"w-100 d-flex p-3 text-decoration-none text-dark fw-bold"}><i
                                    className={item.icons + " m-1 text-secondary"}
                                    style={{fontSize: '20px'}}/>{item.name}
                                </button>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}