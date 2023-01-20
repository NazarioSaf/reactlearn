const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MMESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            post: [
                { id: 1, message: 'Hi, how are you', like: 12 },
                { id: 2, message: 'Это мой первый пост?', like: 42 },
            ],
            newPostText: ''
        },
        dialogPage: {
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
        },
        sideBar: {
            name: [
                { id: 1, name: 'Иван' },
                { id: 2, name: 'Петя' },
                { id: 3, name: 'Саша' }
            ]
        }
    },

    getState() {
        return this._state
    },

    rerenderEntireTree() {
        console.log('');
    },



    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.post.push(newPost);
            this._state.profilePage.newPostText = '';
            this.rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this.rerenderEntireTree(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogPage.newMessageText
            };
            this._state.dialogPage.message.push(newMessage);
            this._state.dialogPage.newMessageText = '';
            this.rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogPage.newMessageText = action.newMessage;
            this.rerenderEntireTree(this._state);
        }
    },






    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });



export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text });

export default store;
