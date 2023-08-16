import Modal from 'react-modal';
import '../ChatModel/style.css'
import React, { useState } from 'react';
import axios from 'axios';

const ChatModal = ({openModal, student, handleCloseModal , messages}) => {
  const token = localStorage.getItem("token");
  const defaultState = {message: '',}
  const [data, setData] = useState(defaultState)
    
  const handleDataChange = (e) => {
    setData({ [e.target.name]: e.target.value });
  };

  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  async function sendMessage() {
    axios.post(`http://127.0.0.1:8000/api/chat/${student.id}/send`, data, config)
    .then(response => {
      console.log(response.data);
      setData({ message: "" })
      handleCloseModal();
    })
    .catch (error => {
      console.error("Error sending message:", error);
    });
  }

  return (
    <div>
        <Modal isOpen={openModal} className="modal">
          <div className='chat-container'>
              {messages.map((msg, index) => {
                if(msg.user1_id === student.id){
                  return <div key={index}>{student.name}: {msg.message}</div>
                }else{return <div key={index}>You: {msg.message}</div>}
              })}
            <div className='before-content' onClick={handleCloseModal}>X</div>
            <textarea name="message" value={data.message || ""} onChange={handleDataChange} className='message-input' placeholder='Enter your message here'></textarea>
            <div className='filler'><i className="fa-solid fa-paper-plane send-icon" onClick={sendMessage}></i></div>
          </div>
        </Modal>
    </div>
  )
}

export default ChatModal