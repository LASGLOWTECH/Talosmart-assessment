"use client"


import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); 


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Listen for incoming messages
    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  },);

  const sendMessage = () => {
    e.preventDefault()
    socket.emit('chat message', newMessage);
    setNewMessage('');
  };

  return (
    <div className='flex items-center flex-col'>
      <h1 className='text-center  text-white text-lg'>Chat Box</h1>
      <div className='w-[50px} h-[40px]   bg-white' >
        {messages.map((message, index) => (
          <div className='w-[200px} h-[30px] rounded-4    bg-white'  key={index}>
            
            <p className="text-darkBlue">{message}</p></div>
        ))}
      </div>

      <div className="submit flex  flex-col justify-start ">
          <input
          type="text"
         onChange={(e) => setNewMessage(e.target.value)}
         className="ps-5  border focus:outline-none shadow-md border-double py-2 mt-2 w-full text-base  "
            value={newMessage} />

        

<div className="submit flex  flex-col justify-start ">
         
 
<button className="text-lg text-white flex place-self-start  focus:outline-none rounded-md px-16 py-2  my-3 bg-darkGreen"
             onClick={sendMessage}>Send</button>
        </div>

     
      </div>
    </div>
  );
};

export default Chat;