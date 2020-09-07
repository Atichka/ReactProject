import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return <div>
        <div>
        <img src='https://img5.goodfon.ru/wallpaper/nbig/2/f9/lisa-zima-sneg-8.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}

export default Profile;
