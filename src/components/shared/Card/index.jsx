import React from 'react'
import './style.css'

const Card = ({course, handleOpenModal}) => {

    return (
        <>
                <div className="card" onClick={handleOpenModal}>
                    <span>{course.title}</span>
                </div>
        </>
    )
}

export default Card