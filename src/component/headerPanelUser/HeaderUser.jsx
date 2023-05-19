import {Link} from "react-router-dom";
import React from "react";

export const HeaderUser = ({text, link}) => {
    return (
        <div className={"w-100 d-flex align-items-center justify-content-center"} style={{height: '7vh'}}>
            <div className={"col p-3 w-25 d-flex"}>
                <Link to={link}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 320 512" style={{width: '18px'}}>
                        <path
                            d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                    </svg>
                </Link>
            </div>
            <div style={{position: 'absolute', top: '2vh'}}>
                <h6 className={"text-center text-dark fw-bold"}>{text}</h6>
            </div>
        </div>
    )
}