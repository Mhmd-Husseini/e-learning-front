import React, { useState } from 'react'
import './style.css'
import Modal from 'react-modal'

const ChatModal = ({openModal, handleCloseModal}) => {

  const [message, setMessage] = useState()

  function sendRequest(e) {
    setMessage(e.target.value)
    console.log(message)
    handleCloseModal();
  }

  return (
    <div>
        <Modal isOpen={openModal} className="modal">
          <div className='chat-container'>
            <div className='before-content' onClick={handleCloseModal}>X</div>
            <textarea name="" onChange={(e) => {
          setNewName(e.target.value);
          console.log(newName);
          handleCloseModal();
        }} className='message-input' placeholder='Enter your message here'></textarea>
            <div className='filler'><i class="fa-solid fa-paper-plane send-icon" onClick={sendRequest}></i></div>
          </div>
        </Modal>
    </div>
  )
}

export default ChatModal