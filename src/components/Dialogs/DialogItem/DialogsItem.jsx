import React from "react"
import { NavLink } from "react-router-dom";
import s from './Dialogsitem.module.css'




const DialogItem = (props) => {
    return <div className={s.dialogs}>
        <img src="https://w7.pngwing.com/pngs/68/342/png-transparent-computer-icons-user-profile-priest-miscellaneous-avatar-user.png" alt="" />
        <NavLink to={'/dialogs/' + props.id} className={dialogData => dialogData.isActive ? s.active : s.dialogs}>{props.name}</NavLink>
    </div>
}


export default DialogItem;