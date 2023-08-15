import React from 'react'
import './style.css'

const Person = ({item, handleOpenModal}) => {

  return (
    
    <div className='person-item'>
        <span>{item.name}</span>
        <i class="fa-regular fa-comment chat-icon" onClick={handleOpenModal}></i>
    </div>

  )
}

export default Person