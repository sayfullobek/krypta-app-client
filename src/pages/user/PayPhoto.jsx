import {useNavigate} from "react-router-dom";
import {deleteService, Save, SendPhoto} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {Button} from "reactstrap";
import {success} from "../../utils/MyToast";

export const PayPhoto = ({user, lan}) => {
    const photoId = localStorage.getItem('__pay_photo__')

    const navigate = useNavigate()

    const sendPhoto = async (e) => {
        let formData = new FormData();
        formData.append("photo", e.target.files[0])
        await SendPhoto(formData)
    }
    const deletePhoto = async () => {
        if (photoId === "") {
            navigate("/auth/universal-academy/admin/course")
        } else {
            await deleteService(photoId, Apis.deletePhoto, navigate, "/")
        }
    }
    const backMenyu = async () => {
        let userId = user.id;
        const data = {
            userId: userId,
            photoId: photoId
        }
        console.log(data)
        await Save(data, Apis.archivePay, "", navigate, "/")
        localStorage.setItem("__pay_photo__", "")
        success("sizga 1soat ichida pul tashlab beriladi")
    }
    return (
        <div className={"w-100"}>
            <h5 className={"p-3 text-center text-dark"}>{lan === "ENG" ? "Confirm your payment" : "Подтвердите платеж"}</h5>
            {photoId ? (
                <div className={"mt-5 w-100 d-flex align-items-center justify-content-center"} style={{height: '70vh'}}>
                    <img src={Apis.getPhoto + photoId} width={"90%"} height={"100%"} alt=""/>
                </div>
            ) : (
                <>
                    <label htmlFor={"rasm"} className={"d-flex align-items-center justify-content-center fw-bold"}
                           style={{
                               width: '80%',
                               backgroundColor: 'white',
                               height: '14vh',
                               margin: '0 auto',
                               marginTop: '10vh',
                               border: '1px dashed black',
                               fontSize: '20px'
                           }}>
                        {lan==="ENG"?"post a picture":"опубликовать картинку"}
                    </label>
                    <input multiple accept="image/*"
                           onChange={(item) => sendPhoto(item)}
                           type="file" id={"rasm"} name={"rasm"} style={{display: 'none'}}/>
                </>
            )}
            <div className={"w-100 d-flex align-items-center justify-content-center"}>
                {photoId ? (
                    <Button color={"primary"} onClick={() => backMenyu()}
                            style={{width: '96%'}}>{lan === "ENG" ? "I approve" : "я одобряю"}</Button>
                ) : (<></>)}
            </div>
        </div>
    )
}