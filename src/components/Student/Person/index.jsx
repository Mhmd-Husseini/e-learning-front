import React from 'react'
import './style.css'

const Person = ({setSelectedPerson, teacher, item, handleOpenModal }) => {

  const grabPerson = async () => {
    setSelectedPerson(item)
    handleOpenModal()
}

  if (!teacher) {
    return (
      <div className='person-item'>
        <span>{item.name}</span>
        <i class="fa-regular fa-comment chat-icon" onClick={grabPerson}></i>
      </div>
    )
  } else {
    return (
      <>
    <div className='person-item'>
      <span className='title'>Teacher</span>
      <span>{item.name}</span>
      <i class="fa-regular fa-comment chat-icon" onClick={grabPerson}></i>
    </div>
    </>
    )
  }
}

export default Person