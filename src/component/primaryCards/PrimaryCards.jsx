import './primaryCards.css'
import {Link} from "react-router-dom";

export const PrimaryCards = () => {
    const cards = [
        {name: "Hozir to'ldiring", link: '/', icon: 'bi bi-currency-dollar'},
        {name: "Hozir chiqaring", link: '/', icon: ''},
        {name: "Missiya markazi", link: '/', icon: ''},
        {name: "Mening jamoam", link: '/', icon: ''}
    ]
    return (
        <div className={"w-100 d-flex bg-light p-2"}>
            {cards.map(item => (
                <Link to={item.link} className={"col-3 boxs"}>
                    <div className={"borderjon"}>
                        <i className={item.icon}/>
                    </div>
                    <h6>{item.name}</h6>
                </Link>
            ))}
        </div>
    )
}