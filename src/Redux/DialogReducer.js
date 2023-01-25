const ADD_MESSAGE = 'ADD-MMESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialog: [
        { id: 1, name: 'Nazar' },
        { id: 2, name: 'Kate' },
        { id: 3, name: 'Oleg' },
        { id: 4, name: 'Vasya' },
        { id: 5, name: 'Dima' },
        { id: 6, name: 'Ivan' },
    ],
    message: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yeap' },
        { id: 4, message: 'пока пока' },
        { id: 5, message: 'бай' },
    ],
    newMessageText: ''
};

const dialogseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = state.newMessageText
            state.newMessageText = '';
            state.message.push({ id: 6, message: newMessage });
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