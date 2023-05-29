import {useState} from "react";
import {Button} from "reactstrap";
import {isSuccess, stringDataIf} from "../../handlers/auth";
import {error} from "../../utils/MyToast";
import {Save} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {useNavigate} from "react-router-dom";

export const FeedBack = ({lan}) => {
    const [feedbackName, setFeedbackName] = useState('')
    const [information, setInformation] = useState('')
    const userId = localStorage.getItem("__id__")
    const navigate = useNavigate()

    const nameArr = [
        {
            name: lan === "ENG" ? "Software functionality problem" : "Проблема с функциональностью программного обеспечения",
            val: 'PROGRAMMING_ERROR'
        },
        {
            name: lan === "ENG" ? "Complaints and suggestions" : "Жалобы и предложения",
            val: 'COMPLAINTS_AND_SUGGESTIONS'
        },
        {name: lan === "ENG" ? "Page crash" : "Сбой страницы", val: 'PAGE_DOWN'},
        {name: lan === "ENG" ? "Другой" : "Other", val: 'OTHER'},
    ]

    const sendFeedback = async () => {
        if (stringDataIf(feedbackName)) {
            return error(lan === "ENG" ? "Please select the type of complaint or suggestion" : "Пожалуйста, выберите тип жалобы или предложения")
        }
        if (stringDataIf(information)) {
            return error(lan === "ENG" ? "Please enter your complaint or suggestion" : "Пожалуйста, введите вашу жалобу или предложение")
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
                    <label
                        htmlFor="floatingTextarea2">{lan === "ENG" ? "Please enter your suggestion or complaint" : "Пожалуйста, введите ваше предложение или жалобу"}</label>
                </div>
            </div>
            <Button color={"primary"} onClick={() => sendFeedback()} className={"position-fixed"}
                    style={{width: '90%', bottom: '15px'}}>
                {lan === "ENG" ? "Sending" : "Отправка"}
            </Button>
        </div>
    )
}