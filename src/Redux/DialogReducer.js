const ADD_MESSAGE = 'ADD-MMESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const dialogseReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = state.newMessageText
            state.newMessageText = '';
            state.message.push({id: 6, message: newMessage});
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text });


export default dialogseReducer;