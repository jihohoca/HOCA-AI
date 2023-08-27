import React from 'react';
import style from './style.css';

interface Props {
  text: string;
}


export const Label = ({ text }: Props): JSX.Element => {
  return <div  className={style.label}>{text}</div>;
};
