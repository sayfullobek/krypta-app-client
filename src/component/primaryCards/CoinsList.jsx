import './coins'
import './primaryCards.css'
import {useEffect, useState} from "react";
import {embeddedGet} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {Loader} from "../Loader";

export const CoinsList = ({status, coin, loading}) => {

    return (
        <div className={"p-2 bg-light"}>
            <div id={"fulls"}/>
            {status === "assets" ? (
                <div className={"row w-100 d-flex align-items-center justify-content-between"}>
                    {coin.map(item => (
                        <>
                            <div className={"d-flex align-items-center justify-content-center mt-2 mb-2"}>
                                <div className={"w-50 d-flex align-items-center justify-content-start"}>
                                    <img width={"26%"} src={Apis.getPhoto + item.photoId} alt="not found"/>
                                    <h6 className={"text-dark fw-bold mt-2"}>{item.name}</h6>
                                </div>
                                <div
                                    className={"w-50 d-flex align-items-end justify-content-center flex-column"}>
                                    <p className={"m-0 text-dark fw-bold"} style={{fontSize: '18px'}}>8</p>
                                    <p className={"m-0"}>= 8 USTD</p>
                                </div>
                            </div>
                            <hr/>
                        </>
                    ))}
                </div>
            ) : (
                <table className={"table table-borderless"}>
                    <thead>
                    <tr>
                        <th>coin nomi</th>
                        <th>price</th>
                        <th>foizi</th>
                    </tr>
                    </thead>
                    <tbody>
                    {coin.map(item => (
                        <tr>
                            <td className={"d-flex align-items-center justify-content-start"}>
                                <img
                                    src={Apis.getPhoto + item.photoId}
                                    alt="1"/>
                                <h6 className={"m-2"}>{item.name}</h6>
                            </td>
                            <td>
                                <p className={`m-2`} style={{color: 'black'}}
                                   id={`${item.colors}+${item.id}`}>${item.dollar}</p>
                            </td>
                            <td>
                                <button className={`btn btn-success w-100`}>{item.percentage}%</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}