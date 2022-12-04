import React from "react"
import { NavLink } from "react-router-dom";
import DialogsItem from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css'
import MessageM from "./Message/Message";


const Dialogs = (props) => {

    let messagesElements = props.state.message.map(m => <MessageM message={m.message} />)

    let dialogsElements = props.state.dialog.map(d => <DialogsItem name={d.name} id={d.id} />)


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
            </div>
        </div>
    );
}

export default Dialogs;