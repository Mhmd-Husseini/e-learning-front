import React from 'react'
import './style.css'

const Card = ({course}) => {

    let id = course.course_id

    let link = "courses/" + {id}

    return (
        <>
            <a href={link}>
                <div className="card">
                    <span>{course.name}</span>
                    <p>{course.description}</p>
                </div>
                </a>
        </>
    )
}

export default Card