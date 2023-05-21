import '../../assets/tabBar/js/main'
import '../../assets/tabBar/scss/styles.scss'
import {Link, useLocation, useNavigate} from "react-router-dom";
import photo from '../../assets/alfa-logo.jpg'

export const TabBar = () => {
    const pathName = useLocation().pathname
    const navigate = useNavigate()
    const navs = [
        {name: "Asosiy", link: '/', icons: "bx bx-home-alt nav__icon"},
        {name: "Miqdoriy", link: '/amount', icons: "bx bx-user nav__icon"},
        {name: "Hovuz", link: '/pool', icons: "bx bx-book-alt nav__icon"},
        {name: "Aktivlar", link: '/assets', icons: "bx bx-briefcase-alt nav__icon"},
        {name: "Men", link: '/me', icons: "bx bx-message-square-detail nav__icon"},
    ]

    return (
        <div>
            <header className="header p-2" id="header">
                <nav className="nav container">
                    {pathName === "/me" ? (
                        <div/>
                    ) : (
                        <img src={photo} alt="" className="nav__img"/>
                    )}
                    <div className="nav__menu" id="nav-menu">
                        <div className="nav__list">
                            {navs.map(item => (
                                <li className="nav__item">
                                    <Link to={item.link}
                                          className={item.link === pathName ? "nav__link text-decoration-none active-link" : "nav__link text-decoration-none"}>
                                        <i className={item.icons}/>
                                        <span className="nav__name">{item.name}
                                    </span>
                                    </Link>
                                </li>
                            ))}
                        </div>
                    </div>
                    <Link to={"/notification"} className="m-2 nav__logo position-relative">
                        <i className="bi bi-bell" style={{fontSize: '20px'}}/>
                        <span
                            style={{top: '6px'}}
                            className="position-absolute start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                <span className="visually-hidden">New alerts</span>
                                </span>
                    </Link>
                </nav>
            </header>
        </div>
    )
}