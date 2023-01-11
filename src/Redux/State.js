let rerenderEntireTree = () => {
    console.log('state was');
}

let state = {
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
            { id: 1, name: 'Иван'},
            { id: 2, name: 'Петя'},
            { id: 3, name: 'Саша'}
        ]
    }
};


export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        like: 0
    };
    state.profilePage.post.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};


export const addMessage = () => {
    let newMessage = {
        id : 6,
        message: state.dialogPage.newMessageText
    };
    state.dialogPage.message.push(newMessage);
    state.dialogPage.newMessageText = '';
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newMessage) => {
    state.dialogPage.newMessageText= newMessage;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;