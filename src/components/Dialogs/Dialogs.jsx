import React from "react"
import { NavLink } from "react-router-dom";
import DialogsItem from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css'
import MessageM from "./Message/Message";


const Dialogs = (props) => {

    let messagesElements = props.dialogPage.message.map(m => <MessageM message={m.message} />)

    let dialogsElements = props.dialogPage.dialog.map(d => <DialogsItem name={d.name} id={d.id} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={s.dialogs}>
            <div>
                {
                    (dialogsElements)
                }
            </div>
            <div className={s.messages}>
                {
                    (messagesElements)
                }
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={ addMessage }>New message</button>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;