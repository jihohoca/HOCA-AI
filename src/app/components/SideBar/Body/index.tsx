import React from 'react';
import style from './style.css';
import chatbox from '../../../../images/boxchat.png'
export const Body = () => {
  return (
    <div>
      <div className={style.text}>
      Previous 7 Days 
      </div>
      <div className={style.chat_box}>
        <div className={style.image}><img src={chatbox}/></div>
        <div className={style.message}>Senior Graphic/UI Designer</div>
      </div>
      <div className={style.chat_box}>
        <div className={style.image}><img src={chatbox}/></div>
        <div className={style.message}>Rewriting Request: Title for the</div>
      </div>
      <div className={style.chat_box}>
        <div className={style.image}><img src={chatbox}/></div>
        <div className={style.message}>Movie News and Updates</div>
      </div>

      <div className={style.month}>
        June
      </div>

      <div className={style.chat_box}>
        <div className={style.image}><img src={chatbox}/></div>
        <div className={style.message}>Senior Graphic/UI Designer</div>
      </div>
      <div className={style.chat_box}>
        <div className={style.image}><img src={chatbox}/></div>
        <div className={style.message}>Rewriting Request: Title for the</div>
      </div>
      <div className={style.chat_box}>
        <div className={style.image}><img src={chatbox}/></div>
        <div className={style.message}>Movie News and Updates</div>
      </div>
    </div>
  );
};