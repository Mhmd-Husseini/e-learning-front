import React from 'react'
import './style.css'

const ClassworkListItem = ({ id, course_id, title, due }) => {

    let link = "/" + { id }

    return (
        <a href={link}>
            <div className='list-item'>
                <span>{title}</span>
                <span>{due}</span>
            </div>
        </a>
    )
}

export default ClassworkListItem