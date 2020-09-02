import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://avatars.mds.yandex.net/get-pdb/963327/4f3cab6f-7f5e-4bce-be67-31ac2260b871/s1200?webp=false'/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>)
}

export default Post;
