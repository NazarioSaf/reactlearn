import React from 'react';
import { connect } from 'react-redux';

import { addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/ProfileReducer';
import MyPosts from './MyPosts';



// const MyPostsContainer = (props) => {

//   let state = props.store.getState();

//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   }

// let onPostChange = (text) => {
//   let action = updateNewPostTextActionCreator(text);
//   props.store.dispatch(action);
// }

//   return (<MyPosts updateNewPostText={onPostChange} 
//     OnAddPost={addPost} post={state.profilePage.post} 
//     newPostText={state.profilePage.newPostText} />)
// }

let mapStateToProps = (state) => {
  return {
    post: state.profilePage.post,
    newPostText: state.profilePage.newPostText
  }
  };
  let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
    dispatch(action);
      },
      OnAddPost: () => {
        dispatch(addPostActionCreator());
      }
  }
  };
  
  const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;