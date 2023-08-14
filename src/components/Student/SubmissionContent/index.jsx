import React from 'react'
import './style.css'

const SubmissionContent = ({task}) => {
    return (
        <div className='submission-container'>
            <div className="submission-wrapper">
                <div className='submission-instructions'>
                    <span className='title-large'>{task.title}</span>
                    <p>
                        {task.description}
                    </p>
                </div>
                <div className='submission-upload'>
                    <span className='title-medium'>Submit Work</span>
                    <input type="file" />
                </div>
            </div>
            <div className="submission-wrapper">
                <button className='attend-btn'>Attendance</button>
            </div>
        </div>
    )
}

export default SubmissionContent