import React from 'react'
import './style.css'

const ClassworkListItem = ({ id, course_id, title, due }) => {

    return (
        <div className='list-item'>
            <span>{title}</span>
            <span>{due}</span>
        </div>
    )
}

export default ClassworkListItem