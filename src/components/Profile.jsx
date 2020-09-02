import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
        <img src='https://img5.goodfon.ru/wallpaper/nbig/2/f9/lisa-zima-sneg-8.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My post
        <div>
            New post
        </div>
        <div className={s.posts}>
            <div className={s.item}>
                post 1
            </div>
            <div className={s.item}>
                post 2
            </div>
        </div>
        </div>
    </div>
}

export default Profile;
