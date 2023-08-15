import React from 'react'
import './style.css'
import Modal from 'react-modal'
import { sendRequest } from '../../../config/request'

const CourseModal = ({ details, openModal, handleCloseModal }) => {

    async function enrollStudent() {
        try {
            const response = await sendRequest({ method: 'POST', route: `enroll-course/${details.id}`, body: "", });
            console.log(response)
            handleCloseModal()
        } catch (error) {
        }
    }

    return (
        <div>
            <Modal isOpen={openModal} className="modal">
                <div className='course-details'>
                    <div className="course-wrapper">
                        <div className='before-content' onClick={handleCloseModal}>X</div>
                        <span className='title-large'>Taught By {details.course.teacher_id}</span>
                        <div>
                            <div className='title-medium'>Course Description: <span>{details.course.description}</span> </div>
                            <div className='title-medium'>Course Category: <span>{details.course.category_id}</span></div>
                            <div className='title-medium'>Seats: <span>{details.course.seats}</span></div>
                        </div>
                        {!details.isEnrolled && <button className='enroll-btn' onClick={enrollStudent}>Enroll</button>}
                    </div>
                </div>
            </Modal >
        </div>
    )
}

export default CourseModal