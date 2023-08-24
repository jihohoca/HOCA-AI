import React, { useState } from 'react';
import style from './style.css';
import avatar from '../../../../images/Ellipse 35.svg';

export const Body = () => {
  const [chat, setChat] = useState<any>([]);
  // const [chatHistory, setChatHistory] = useState<any>([]);
  // const [title, setTitle] = useState<any>('');
  const [input, setInput] = useState<any>('');

  const handleSend = async () => {
    if (input.trim) {
      setChat([...chat, { role: 'user', content: input }]);
      setInput('');
      const response: any = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          messages: [...chat, { role: 'user', content: input }]
        })
      });
      console.log('🚀 ~ file: index.tsx:24 ~ handleSend ~ response:', response);

      //eslint-disable-next-line
      const readData = response.body.pipeThrough(new TextDecoderStream()).getReader();
      console.log('🚀 ~ file: index.tsx:27 ~ handleSend ~ readData:', readData);
      let aiRes = '';
      while (true) {
        const { done, value } = await readData.read();
        console.log('dang doc ' + value);
        if (done) {
          break;
        }
        aiRes += value;
        setChat([...chat, { role: 'user', content: input }, { role: 'assistant', content: aiRes }]);
      }

      // if (!title) {
      //   const createTitle = await fetch('http://localhost:8000/api/title', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       title: input,
      //     }),
      //   });

      //   const title = await createTitle.json();
      //   setTitle(title?.title);
      //   setChatHistory([...chatHistory, title]);
      // }
    }
  };

  return (
    <div>
      {chat.map((item: any, index: any) =>
        item.role === 'user' ? (
          <div className={style.infor_input_user}>
            <div className={style.avatar_user}>
              <img className={style.avatar} src={avatar}></img>
            </div>
            <div className={style.input_user}>{item.content}</div>
          </div>
        ) : (
          <div className={style.chatgpt_answer_user}>
            <div className={style.avatar_user}>
              <img className={style.avatar} src={avatar}></img>
            </div>
            <div className={style.input_user}>{item.content}</div>
          </div>
        )
      )}

      <div>
        <div className={style.button_input}>
          <input
            className={style.input_message}
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Send a message"
          />
          <span
            className=" absolute right-4 top-4 cursor-pointer"
            onClick={() => (input.trim() ? handleSend() : undefined)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-send"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 14l11 -11"></path>
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
