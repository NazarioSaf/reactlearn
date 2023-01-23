import dialogseReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SideBarReducer";


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

    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

    getState() {
        return this._state
    },

    rerenderEntireTree() {
        console.log('');
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogseReducer(this._state.dialogPage, action);
        sidebarReducer(this._state.dialogPage, action);

        this.rerenderEntireTree(this._state);
    },


};





export default store;
