import './primaryCards.css'
import {Link} from "react-router-dom";

export const PrimaryCards = ({lan}) => {
    const token = localStorage.getItem("token")
    const cards = [
        {
            name: lan === "ENG" ? "Fill it now" : "Заполните сейчас",
            link: '/auth/now-pay',
            icon: 'bi bi-wallet-fill',
            bgColor: '#aecfdc7d',
            color: '#2121d1a8'
        },
        {
            name: lan === "ENG" ? "Release now" : "Выпустить сейчас",
            link: '/auth/release-now',
            icon: 'bi bi-cash-stack',
            bgColor: '#dfcacaa3',
            color: '#d5222294'
        },
        {
            name: lan === "UZB" ? "Mission Center" : "Миссионерский центр",
            link: '/',
            icon: 'bi bi-file-text',
            bgColor: '#c5b6d67a',
            color: '#a90ff19e'
        },
        {
            name: lan === "ENG" ? "My team" : "Моя команда",
            link: '/',
            icon: 'bi bi-people',
            bgColor: '#c5ae2a40',
            color: '#d2633ed6'
        }
    ]

    return (
        <div className={"w-100 d-flex bg-light p-2"}>
            {cards.map(item => (
                <Link to={token ? item.link : "/auth/register"} className={"col-3 boxs text-decoration-none text-dark"}>
                    <div className={"borderjon"} style={{backgroundColor: `${item.bgColor}`}}>
                        <i className={item.icon} style={{fontSize: '30px', color: `${item.color}`}}/>
                    </div>
                    <h6>{item.name}</h6>
                </Link>
            ))}
        </div>
    )
}