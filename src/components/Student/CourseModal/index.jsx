import React from 'react'
import './style.css'
import Modal from 'react-modal'

const CourseModal = ({ openModal, handleCloseModal }) => {
    return (
        <div>
            <Modal isOpen={openModal} className="modal">
                <div className='course-details'>
                    <div className="course-wrapper">
                        <div className='before-content' onClick={handleCloseModal}>X</div>
                        <span className='title-large'>Taught By </span>
                        <div>
                            <span className='title-medium'>Course Description:</span>
                            <p className=''></p>
                        </div>
                        <button className='enroll-btn'>Enroll</button>
                    </div>
                </div>
            </Modal >
        </div>
    )
}

export default CourseModal