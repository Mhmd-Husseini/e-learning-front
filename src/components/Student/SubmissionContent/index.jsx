import React from 'react'
import './style.css'

const SubmissionContent = () => {
    return (
        <div className='submission-container'>
            <div className="submission-wrapper">
                <div className='submission-instructions'>
                    <span className='title-large'>Assignment Title</span>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et itaque porro fugit cupiditate voluptate. Repellendus unde qui, placeat optio enim id ullam dolorem eos numquam quae neque expedita, nemo tenetur!
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