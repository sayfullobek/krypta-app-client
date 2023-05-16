import {Link} from "react-router-dom";
import React from "react";

export const Me = () => {
    const globe1 = "https://media.sketchfab.com/models/cb636fdd7f124125a3b7d194da9942e1/thumbnails/3acf153eed654d31932803efcf37ea34/05fb0bf23df844bebb8710f1814bde20.jpeg"

    const logoutHanlder = () => {
        localStorage.clear()
        window.location.reload()
    }

    const meArr = [
        {name: 'WithDrawal Address', icon: 'bi bi-geo-alt', link: "/with-address", type: "auto"},
        {name: 'Verified', icon: 'bi bi-geo-alt', link: "/verified", type: "auto"},
        {name: 'Contact customer service', icon: 'bi bi-geo-alt', link: "/contact-customer", type: "auto"},
        {name: 'Security Settings', icon: 'bi bi-geo-alt', link: "/security-settings", type: "auto"},
        {type: "none"},
        {name: 'Feedback', icon: 'bi bi-geo-alt', link: "/feedback", type: "auto"},
        {name: 'Switch Language', icon: 'bi bi-geo-alt', link: "/switch-lan", type: "auto"},
        {name: 'Help', icon: 'bi bi-geo-alt', link: "/help", type: "auto"},
        {name: 'About us', icon: 'bi bi-geo-alt', link: "/about-us", type: "auto"},
        {name: 'Clear the cache', icon: 'bi bi-geo-alt', link: "/clear-cache", type: "auto"},
        {type: "none"},
        {name: 'Log out', type: "center", functions: logoutHanlder},
    ]

    return (
        <div style={{width: '98%', padding: '0 0 0 4%'}} className={"p-2"}>
            <div className="card text-bg-dark">
                <img src={globe1} className="card-img" alt="1"/>
                <div className="card-img-overlay">
                    <h5 className="card-title text-light">METAGO Staking hovuzi</h5>
                    <p className="card-text">Staking osonroq</p>
                    <p className="card-text"><small className={"text-success"}>Osonlik bilan soqqa qiling okalar</small>
                    </p>
                </div>
            </div>
            <Link to={"/auth/register"}>register</Link>
            <Link to={"/gildirak"}>gildirak</Link>
            <div className="mt-3">
                {meArr.map(item => (
                    item.type === "auto" ? (
                        <>
                            <Link to={item.link} className="w-100 d-flex p-3 text-decoration-none"
                                  style={{
                                      height: '10%',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      backgroundColor: 'white',
                                      borderBottom: '1px solid rgb(169 162 162 / 25%)'
                                  }}>
                                <i className={item.icon}/>
                                <div>{item.name}</div>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 320 512" style={{width: '12px', transform: 'rotate(180deg)'}}>
                                    <path
                                        d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                                </svg>
                            </Link>
                        </>
                    ) : item.type === "none" ? (
                        <div className={"p-2"}/>
                    ) : (
                        <button
                            className="btn w-100 d-flex align-items-center justify-content-center p-3 text-decoration-none"
                            style={{
                                height: '10%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                backgroundColor: 'white'
                            }} onClick={() => item.functions()}>
                            <div className={"text-danger"}>{item.name}</div>
                        </button>
                    )
                ))}
            </div>
            <br/>
            <br/>
        </div>
    )
}