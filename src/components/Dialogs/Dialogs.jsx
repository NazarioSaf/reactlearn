import { type } from "@testing-library/user-event/dist/type";
import React from "react"
import { NavLink } from "react-router-dom";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../Redux/DialogReducer";
import DialogsItem from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css'
import MessageM from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogPage;

    let messagesElements = state.message.map(m => <MessageM message={m.message} />)

    let dialogsElements = state.dialog.map(d => <DialogsItem name={d.name} id={d.id} />)

    let newMessageElement = state.newMessageText;

    let addMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div>
                {
                    (dialogsElements)
                }
            </div>
            <div className={s.messages}>
                {(messagesElements)}
                <div>
                    <textarea onChange={onMessageChange} value={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>New message</button>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;