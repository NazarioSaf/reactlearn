import { type } from "@testing-library/user-event/dist/type";
import React from "react"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../Redux/DialogReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogPage;

    
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <Dialogs updateNewMessageText={onMessageChange} sendMessage={addMessage} dialogPage={state} />
    )
}

export default DialogsContainer;