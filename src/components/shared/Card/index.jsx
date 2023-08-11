import React from 'react'
import './style.css'

const Card = ({course_id, name, description}) => {

    let link = "courses/" + {course_id}

    return (
        <>
            <a href={link}>
                <div className="card">
                    <span>{name}</span>
                    <p>{description}</p>
                </div>
                </a>
        </>
    )
}

export default Card