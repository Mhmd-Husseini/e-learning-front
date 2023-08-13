import React from 'react'
import './style.css'

const ClassworkListItem = ({ item }) => {

    return (
        <div className='list-item'>
            <span>{item.title}</span>
            <span>{item.due}</span>
        </div>
    )
}

export default ClassworkListItem