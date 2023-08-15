import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'


const ClassworkListItem = ({ item }) => {

    const navigate = useNavigate()

    const navigateToTask = () => navigate(`/Student/Submission/${item.id}`)

    return (
        <div className='list-item' onClick={navigateToTask}>
            <span>{item.title}</span>
            <span>{item.due}</span>
        </div>
    )
}

export default ClassworkListItem