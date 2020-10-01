import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return <div className={s.dialog + ' ' + s.active}>
    <img src='https://avatars.mds.yandex.net/get-pdb/963327/4f3cab6f-7f5e-4bce-be67-31ac2260b871/s1200?webp=false'/>
    {/* Без перезагрузки поменять url в браузере */}
    <NavLink to={path}>{props.name}</NavLink>
  </div>
}

export default DialogItem;
