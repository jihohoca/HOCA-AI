
import React from 'react';
import { Header } from 'app/components/ChatBase/DataSource/Header'
import style from './style.css'
import { Body } from './Body';
import { Footer } from './Footer';

export const DataSource = () => {  
    return (
      <div className={style.chatgptmain}>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  };