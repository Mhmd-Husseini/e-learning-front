import React from 'react'
import './style.css'

const Person = ({ teacher, item, handleOpenModal }) => {

  if (!teacher) {
    return (
      <div className='person-item'>
        <span>{item.name}</span>
        <i class="fa-regular fa-comment chat-icon" onClick={handleOpenModal}></i>
      </div>
    )
  } else {
    return (
      <>
    <div className='person-item'>
      <span className='title'>Teacher</span>
      <span>{item.name}</span>
      <i class="fa-regular fa-comment chat-icon" onClick={handleOpenModal}></i>
    </div>
    </>
    )
  }
}

export default Person