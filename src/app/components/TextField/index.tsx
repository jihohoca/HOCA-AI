import React from 'react';
import style from './style.css';

interface Props {
  place_holder?: string;
  isPropmt?: boolean;
}

export const TextField = ({ place_holder = '', isPropmt = false }: Props): JSX.Element => {
  return <div contentEditable="true" className={isPropmt ? style.input_prompt  :style.input_user} placeholder={place_holder}></div>;
};
