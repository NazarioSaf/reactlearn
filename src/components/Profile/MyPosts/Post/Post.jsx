import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
       <div className={s.item}>
        <img src='https://w7.pngwing.com/pngs/159/434/png-transparent-computer-icons-avatar-avatar-heroes-share-icon-symbol.png'></img>
        { props.message }
        <div>
        <span>
         {props.like} like
         </span>
        </div>
      </div>
      )
}

export default Post;