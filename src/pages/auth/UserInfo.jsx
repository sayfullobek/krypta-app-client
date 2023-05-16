import {NotFoundPages} from "../NotFoundPages";
import React, {useState} from "react";
import {MyPhoto} from "../../component/MyPhoto";
import {Link, useNavigate} from "react-router-dom";
import {RegisterSecond} from "../../serverConnect/service/AuthService";
import {HeaderUser} from "../../component/headerPanelUser/HeaderUser";


export const UserInfo = () => {
    const referralCode = localStorage.getItem("referralCode")
    const photoId = localStorage.getItem('photoId')
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gander, setGander] = useState('MALE')

    const registerSecond = async () => {
        const data = {
            firstName, lastName, gander
        }
        await RegisterSecond(localStorage.getItem("id"), data, navigate)
    }

    return (
        <div>
            {referralCode ? (
                <div className={"col-12 d-flex align-items-center justify-content-center"}
                     style={{flexDirection: 'column', height: '86vh'}}>
                    <div style={{height: '30%', position: 'absolute', top: '0'}} className={"w-100"}>
                        <div className="col">
                            <MyPhoto/>
                        </div>
                        <div className="col-12 mb-4">
                            <label htmlFor="firstName">ismingizni kiriting</label>
                            <input type={"text"} placeholder="Ismingizni kiriting"
                                   className="form-control" value={firstName}
                                   onChange={e => setFirstName(e.target.value)} id={"firstName"} name={"firstName"}/>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="firstName">familiyangizni kiriting</label>
                            <input type={"text"} placeholder="Familiyangizni kiriting"
                                   className="form-control" value={lastName}
                                   onChange={e => setLastName(e.target.value)}/>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="gander">jinsingizni tanlang</label>
                        </div>
                        <div className="col-12">
                            <div className="form-check form-check-inline m-3">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                       id="inlineRadio1" value="option1" onClick={() => setGander("MALE")}/>
                                <label className="form-check-label m-0" htmlFor="inlineRadio1">Erkak</label>
                            </div>
                            <div className="form-check form-check-inline m-3">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                       id="inlineRadio2" value="option2" onClick={() => setGander("FEMALE")}/>
                                <label className="form-check-label m-0" htmlFor="inlineRadio2">Ayol</label>
                            </div>
                        </div>
                    </div>
                    <div className="col row" style={{position: 'absolute', bottom: '4%'}}>
                        <button className={"btn btn-primary mb-2"} onClick={() => registerSecond()}>Kirish</button>
                        <Link to={"/"} className={"text-center"}>O'tkazib yuborish</Link>
                    </div>
                </div>
            ) : (
                <div>
                    <NotFoundPages/>
                </div>
            )}
        </div>
    )
}