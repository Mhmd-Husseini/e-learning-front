import React from 'react'
import './style.css';
// import 'font-awesome/css/font-awesome.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment } from '@fortawesome/free-regular-svg-icons';

const Person = ({info, handleOpenModal}) => {

  return (
    <div className='body'>
        <div className='person-item student'>
            <span>Student: {info.name}</span>
            <span className='icons' onClick={() => handleOpenModal(info)}/>
        </div>
        <div className='person-item'>
            <span>Parent: {info.parent.name}</span>
            <span className='icons' onClick={() => handleOpenModal(info)}/>
        </div>
    </div>
    

  )
}

export default Person