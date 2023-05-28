import React, {useState} from "react";
import logo from '../../assets/alfa-logo.png'

export const Profile = ({lan}) => {
    const [name, setName] = useState(localStorage.getItem("firstName"))
    const [gander, setGander] = useState(localStorage.getItem("gander"))
    const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem("phoneNumber"))
    const [email, setEmail] = useState(localStorage.getItem("email"))
    return (
        <div className={"w-100 d-flex align-items-center justify-content-center flex-column"}>
            <div className={"w-100 d-flex align-items-center justify-content-center"}
                 style={{height: '20vh', backgroundColor: 'white'}}>
                <img src={logo} width={"100px"} alt="1"/>
            </div>
            <div className={"p-3 mt-3 w-100 d-flex align-items-center justify-content-between"}
                 style={{backgroundColor: 'white'}}>
                <div>{lan === "ENG" ? "name" : "имя"}</div>
                <input className={"text-secondary text-end"} style={{outline: 'none', border: 'none'}} type="text"
                       value={name}
                       onChange={e => setName(e.target.value)}/>
            </div>
            <div className={"p-3 w-100 d-flex align-items-center justify-content-between"}
                 style={{backgroundColor: 'white'}}>
                <div>{lan === "ENG" ? "gender" : "пол"}</div>
                <div>
                    <div className="form-check form-check-inline m-3">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                               id="inlineRadio1" value="option1" defaultChecked={gander === "MALE"}
                               onClick={() => setGander("MALE")}/>
                        <label className="form-check-label m-0"
                               htmlFor="inlineRadio1">{lan === "ENG" ? "Male" : "Мужской"}</label>
                    </div>
                    <div className="form-check form-check-inline m-3">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                               id="inlineRadio2" value="option2" defaultChecked={gander === "FEMALE"}
                               onClick={() => setGander("FEMALE")}/>
                        <label className="form-check-label m-0"
                               htmlFor="inlineRadio2">{lan === "ENG" ? "Female" : "Девушка"}</label>
                    </div>
                </div>
            </div>

            <div className={"p-3 w-100 d-flex align-items-center justify-content-between"}
                 style={{backgroundColor: 'white'}}>
                <div>{lan === "ENG" ? "phone number" : "номер телефона"}</div>
                <input className={"text-secondary text-end"} style={{outline: 'none', border: 'none'}} type="text"
                       value={phoneNumber.substr(4, 2) + "****" + phoneNumber.substr(10)}/>
            </div>
            <div className={"p-3 w-100 d-flex align-items-center justify-content-between"}
                 style={{backgroundColor: 'white'}}>
                <div>{lan === "ENG" ? "email" : "электронная почта"}</div>
                <input className={"text-secondary text-end"} style={{outline: 'none', border: 'none'}} type="text"
                       value={email}/>
            </div>
            <button className={"btn btn-primary w-75 mt-4"}>{lan == "ENG" ? "Save" : "Сохранять"}</button>
        </div>
    )
}