import React from "react"
import { NavLink } from "react-router-dom";
import DialogsItem from "./DialogItem/DialogsItem";
import s from './Dialogs.module.css'
import MessageM from "./Message/Message";


const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {
    let dialogData = [
        { id: 1, name: 'Nazar' },
        { id: 2, name: 'Kate' },
        { id: 3, name: 'Oleg' },
        { id: 4, name: 'Vasya' },
        { id: 5, name: 'Dima' },
        { id: 6, name: 'Ivan' },
    ]

    let dialogsElements = dialogData.map ( dialog => <DialogsItem name={dialog.name} id={dialog.id} />)

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yeap' },
        { id: 4, message: 'пока пока' },
        { id: 5, message: 'бай' },
    ]

    let messagesElements = messagesData.map( message => <MessageM message={message.message} /> )


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
(dialogsElements)
                }
            </div>
            <div className={s.messages}>
                {
                ( messagesElements )
            }
            </div>
        </div>
    );
}

export default Dialogs;