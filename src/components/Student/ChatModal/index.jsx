import React from 'react'
import './style.css'
import Modal from 'react-modal'

const ChatModal = ({openModal, handleCloseModal}) => {
  return (
    <div>
        <Modal isOpen={openModal} className="modal">
          <div className='chat-container'>
            <div className='before-content' onClick={handleCloseModal}>X</div>
            <textarea name="" id="" className='message-input' placeholder='Enter your message here'></textarea>
            <div className='filler'><i class="fa-solid fa-paper-plane send-icon" onClick={handleCloseModal}></i></div>
          </div>
        </Modal>
    </div>
  )
}

export default ChatModal