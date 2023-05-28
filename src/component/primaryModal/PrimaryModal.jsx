import './modal.css'
import {useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

export const PrimaryModal = ({lan}) => {
    const [modal, setModal] = useState(true);

    const toggle = () => setModal(!modal);

    const externalCloseBtn = (
        <button
            type="button"
            className="close"
            style={{position: 'absolute', top: '15px', right: '15px'}}
            onClick={toggle}
        >
            &times;
        </button>
    );

    return (
        <div style={{zIndex: '1000'}}>
            <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
                <ModalHeader>{lan === "ENG" ? "Announcement" : "Объявление"}</ModalHeader>
                <ModalBody>
                    <b>{lan === "ENG" ? "Welcome to our platform, you can reach financial freedom with us" : "Добро пожаловать на нашу платформу, с нами вы можете достичь финансовой свободы"}</b>
                    <br/>
                </ModalBody>
                <ModalFooter>
                    < div
                        className={"closejon"}>
                        < div
                            id="close"
                            className={"closes"}
                            onClick={() => toggle()}><i className="uil uil-times"
                                                        style={{fontSize: '28px'}}/>
                        </div>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    )
}