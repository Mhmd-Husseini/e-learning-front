import React from 'react'
import './style.css'

const Card = ({course, handleOpenModal}) => {

    return (
        <>
                <div className="card" onClick={handleOpenModal}>
                    <span>{course.name}</span>
                    <p>{course.description}</p>
                </div>
        </>
    )
}

export default Card