import React from 'react';
import style from './style.css';
export const Header = () => {
  return (
    <div>
      <div className={style.chatgpt_button}>
      <button type="button" className={style.new_chat}>
        New Chat +
      </button>
      <button type="button" className={style.chatgpt_menu}></button>
      </div>
    </div>
  );
};
