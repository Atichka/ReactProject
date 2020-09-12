import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div>
        <div>
          <img src='https://img5.goodfon.ru/wallpaper/nbig/2/f9/lisa-zima-sneg-8.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
    )
}

export default ProfileInfo;
