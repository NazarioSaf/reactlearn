import React from "react"
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
   return <div className={s.message}>{props.message}</div> 
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Nazar' id='1' />
                <DialogItem name='Kate' id='2' />
                <DialogItem name='Oleg' id='3' />
                <DialogItem name='Vasya' id='4' />
                <DialogItem name='Dima' id='5' />
                <DialogItem name='Ivan' id='6' />
            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='How are you?' />
                <Message message='Yeap!' />
                <Message message='пока пока' />
            </div>
        </div>
    );
}

export default Dialogs;