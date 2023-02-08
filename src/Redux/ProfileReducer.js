const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    post: [
        { id: 1, message: 'Hi, how are you', like: 12 },
        { id: 2, message: 'Это мой первый пост?', like: 42 },
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = state.newPostText
            return {
                ...state,
                newPostText: '',
                post: [...state.post, { id: 3, message: newPost, like: 0 } ]
            };
        }

        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText:action.newText
            }
        }
            default:
            return state;
        
    }
};


export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });



export default profileReducer;

