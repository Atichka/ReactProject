import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  //map - преобразуем один массив в другой
  let postsElement =
      props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

  //создай ссылку
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

    return (
    <div className={s.postsBlock}>
        <h3>My post</h3>
        <div>
          <div>
            {/* Привязка ссылки */}
            <textarea ref={ newPostElement }></textarea>
          </div>
          <div>
            <button onClick={ addPost }>Add post</button>
          </div>
        </div>
        <div className={s.posts}>
          { postsElement }
        </div>
    </div>)
}

export default MyPosts;
