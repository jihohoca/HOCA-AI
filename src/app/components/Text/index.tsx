import React from 'react';
import style from './style.css';

interface Props {
  text: string;
}

export const Text = ({ text }: Props): JSX.Element => {
  return <div className={style.text}>{text}</div>;
};
