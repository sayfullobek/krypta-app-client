import {useState} from "react";
import {Button} from "reactstrap";
import {useNavigate} from "react-router-dom";

export const SwitchLanguage = () => {
    const navigate = useNavigate()
    const [lan, setLan] = useState(localStorage.getItem("__lan__"))
    const lanArr = [
        {name: "O'zbelcha", val: 'UZB'},
        {name: "Inglizcha", val: "ENG"},
        {name: "Ruscha", val: "RUS"},
    ]
    const changeLan = (lan) => {
        localStorage.setItem("__lan__", lan)
        navigate("/me")
        window.location.reload()
    }
    return (
        <div className={"d-flex align-items-center justify-content-between flex-column"} style={{height: '84vh'}}>
            <div className="card p-1" style={{backgroundColor: 'white', width: '100%'}}>
                {lanArr.map(item => (
                    <div style={item.val !== "RUS" ? {borderBottom: '1px solid #c8c0c078'} : {border: 'none'}}
                         className="w-100 d-flex align-items-center justify-content-between"
                         onClick={() => setLan(item.val)}>
                        <div className={"text-secondary fw-bold"}>
                            {item.name}
                        </div>
                        <div className={"p-2"}>
                            <input type="radio" className={"form-check"}
                                   checked={lan === item.val}/>
                        </div>
                    </div>
                ))}
            </div>
            <Button color={"primary"} onClick={() => changeLan(lan)} style={{width: '96%'}}>
                O'zgarishni Saqlash
            </Button>
        </div>
    )
}