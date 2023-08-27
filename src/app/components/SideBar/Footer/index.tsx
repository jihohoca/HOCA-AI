import React from 'react';
import style from './style.css';
import setting from '../../../../images/more-horizontal.png'
export const Footer = () => {
  return (
    <div>
     <div className={style.test}>
     <div className={style.blank}></div>
        <div className={style.avatar_account}>
            <div className={style.avatar}></div>
            <div className={style.account}>Tony@hoca.dev</div>
            <div className={style.setting}><img src={setting}></img></div>
        </div>
     </div>
    </div>
  );
};