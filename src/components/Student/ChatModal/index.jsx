import React, { useState } from 'react'
import './style.css'
import Modal from 'react-modal'

const ChatModal = ({person, openModal, handleCloseModal }) => {

  const [message, setMessage] = useState()

  async function sendRequest() {
    try {
      const response = await sendRequest({ method: 'POST', route: `chat/${person.id}/send`, body: message, });
      console.log(response)
      handleCloseModal()
  } catch (error) {
  }
    handleCloseModal();
  }

  return (
    <div>
      <Modal isOpen={openModal} className="modal">
        <div className='chat-container'>
          <div className='before-content' onClick={handleCloseModal}>X</div>
          <textarea name="" onChange={(e) => {
            setMessage(e.target.value)
          }} className='message-input' placeholder='Enter your message here'></textarea>
          <div className='filler'><i class="fa-solid fa-paper-plane send-icon" onClick={sendRequest}></i></div>
        </div>
      </Modal>
    </div>
  )
}

export default ChatModal