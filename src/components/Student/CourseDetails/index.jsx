import React from 'react'
import './style.css'

const CourseDetails = ({ teacher, description }) => {
    return (
        <div className='course-details'>
            <div className="course-wrapper">
                <span className='title-large'>Taught By {teacher}</span>
                <div>
                    <span className='title-medium'>Course Description:</span>
                    <p className=''>{description}</p>
                </div>
                <button className='enroll-btn'>Enroll</button>
            </div>
        </div>
    )
}

export default CourseDetails