import React from 'react'
import './style.css'

const Person = ({item}) => {

    const id = item.id

    let link = "/" + { id }

  return (
    
    <div className='person-item'>
        <span>{item.name}</span>
        <a href={link}><span>Chat_icon</span></a>
    </div>

  )
}

export default Person