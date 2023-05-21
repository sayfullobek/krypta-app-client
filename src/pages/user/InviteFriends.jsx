import {Button} from "reactstrap";
import {success} from "../../utils/MyToast";

export const InviteFriends = ({user}) => {
    const token = localStorage.getItem("token")
    const copyToClipboard = () => {
        let input;
        input = document.getElementById('copyReferral').value;
        navigator.clipboard.writeText(input).then(r => r);
        success("nusxalandi")
    }
    const copyReferral = () => {
        let input;
        input = document.getElementById('referal').innerText;
        navigator.clipboard.writeText(input).then(r => r);
        success("nusxalandi")
    }
    return (
        <div className={"w-100 d-flex align-items-center justify-content-center flex-column"} style={{height: '100vh'}}>
            <div className={"bg-primary d-flex align-items-center justify-content-center flex-column"}
                 style={{
                     width: '96%',
                     height: '70%',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     borderRadius: '10px',
                     backgroundImage: 'url("https://i0.wp.com/thetechhacker.com/wp-content/uploads/2020/07/How-To-Use-What%C2%ADsApp-QR-Codes-To-Add-Contacts.jpg?fit=1000%2C640&ssl=1")'
                 }}>
                <div className={"w-100 text-center"} style={{height: '45%'}}>
                    <h5>Alfa Coin</h5>
                    <p>moliyaviy mutaxasislar yoningizda</p>
                </div>
                <div className={"w-50 bg-success"} style={{height: '25%'}}>
                </div>
                <div className={"w-75 mt-3 bg-light"}
                     style={{height: '10%', borderRadius: '10px', boxShadow: '#77727278 0px 0px 10px 1px'}}>
                    <div className={"p-3"}>
                        <div className={"w-100 p-0 m-0 fw-bold d-flex"} style={{fontSize: '14px'}}>Taklif kodi
                            : <p className={"m-0"} id={"referal"}>{user.referralCode}</p><i className="fa-solid fa-copy"
                                                                                            style={{marginLeft: '6px'}}
                                                                                            onClick={() => copyReferral()}/>
                        </div>
                        <p className={"m-0"} style={{fontSize: '10px'}}>Taklifnoma</p>
                    </div>
                </div>
            </div>
            <div className={"bg-light d-flex align-items-center justify-content-center flex-column"}
                 style={{width: '96%', height: '25%'}}>
                <div className="w-100 d-flex mb-3">
                    <input type="text" className={"form-control w-75"} id="copyReferral"
                           value={token ? "https://main--incredible-maamoul-f59b93.netlify.app/auth/register?referralCode=" + user.referralCode : ""}/>
                    <div id="output"/>
                    <Button color={"primary w-25"} style={{fontSize: '10px'}} onClick={() => copyToClipboard()}>nusxa
                        olish</Button>
                </div>
                <Button color={"primary"} className={"mb-5"} style={{fontSize: '14px', width: '96%'}}>Albomga
                    saqlash
                    uchun bosing</Button>
            </div>
        </div>
    )
}
