import './myPhoto.css'
import logo from '../assets/logo.jpg'
import {useState} from "react";
import {uploadPhotoId} from "../serverConnect/service/AuthService";

export const MyPhoto = () => {
    const [photo, setPhoto] = useState()
    const sendPhoto = async (e) => {
        let formData = new FormData();
        console.log(e.target.files[0])
        formData.append("photo", e.target.files[0])
        const data = {
            formData
        }
        await uploadPhotoId(data, localStorage.getItem("id"))
        // await SendPhoto(data)
    }
    return (
        <div>
            <div className="content">
                <div className="container" style={{height: "26vh", alignItems: 'start'}}>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="text-center card-box">
                                <label htmlFor={"filer_input2"} className="member-card pt-2 pb-2">
                                    <div className="thumb-lg member-thumb mx-auto"><img
                                        src={logo}
                                        className="rounded-circle img-thumbnail" alt="profile-image"/></div>
                                    <input
                                        style={{
                                            zIndex: "999",
                                            opacity: "0",
                                            width: "320px",
                                            height: "200px",
                                            position: "absolute",
                                            right: "0px",
                                            left: "0px",
                                            marginRight: "auto",
                                            marginLeft: "auto",
                                            display: 'none'
                                        }}
                                        multiple accept="image/*"
                                        onChange={(item) => sendPhoto(item)}
                                        name="files[]" id="filer_input2" type="file"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}