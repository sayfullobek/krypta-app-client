import {useState} from "react";
import {Button} from "reactstrap";
import {isSuccess, stringDataIf} from "../../handlers/auth";
import {error} from "../../utils/MyToast";
import {Save} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {useNavigate} from "react-router-dom";

export const FeedBack = () => {
    const [feedbackName, setFeedbackName] = useState('')
    const [information, setInformation] = useState('')
    const userId = localStorage.getItem("__id__")
    const navigate = useNavigate()

    const nameArr = [
        {name: "Dasturiy ta'minot funksiyasi muammosi", val: 'PROGRAMMING_ERROR'},
        {name: "Shikoyat va takliflar", val: 'COMPLAINTS_AND_SUGGESTIONS'},
        {name: "Sahifaning ishdan chiqishi", val: 'PAGE_DOWN'},
        {name: "Boshqa", val: 'OTHER'},
    ]

    const sendFeedback = async () => {
        if (stringDataIf(feedbackName)) {
            return error("Iltimos shikoyat yoki taklif turini tanlang")
        }
        if (stringDataIf(information)) {
            return error("Iltimos shikoyat yoki taklifingizni kiriting")
        }
        const data = {
            feedbackName, information, userId
        }
        await Save(data, Apis.feedback, "", navigate, "/me")
    }

    return (
        <div className={"w-100 d-flex align-items-center justify-content-center flex-column"}
             style={{backgroundColor: '#fffefe6b'}}>
            <div className="card m-2 p-2" style={{backgroundColor: 'white', width: '96%'}}>
                {nameArr.map(item => (
                    <div style={item.val !== "OTHER" ? {borderBottom: '1px solid #c8c0c078'} : {border: 'none'}}
                         className="w-100 d-flex align-items-center justify-content-between"
                         onClick={() => setFeedbackName(item.val)}>
                        <div className={"text-dark fw-bold"}>
                            {item.name}
                        </div>
                        <div className={"p-2"}>
                            <input type="radio" className={"form-check"}
                                   checked={feedbackName === item.val}/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="card" style={{backgroundColor: 'white', width: '96%'}}>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                              style={{height: "16vh", border: 'none'}} value={information}
                              onChange={e => setInformation(e.target.value)}/>
                    <label htmlFor="floatingTextarea2">Iltimos taklif yoki shikoyatingizni kiriting</label>
                </div>
            </div>
            <Button color={"primary"} onClick={() => sendFeedback()} className={"position-fixed"}
                    style={{width: '90%', bottom: '15px'}}>
                Yuborish
            </Button>
        </div>
    )
}