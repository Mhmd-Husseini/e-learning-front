import React from 'react'
import './style.css'
import { sendRequest } from '../../../config/request';
import CourseModal from '../../Student/CourseModal';
import {useState} from 'react'

const Card = ({ setSelectedCourse, course, handleOpenModal }) => {
    
    const grabCourse = async () => {
        setSelectedCourse(course)
        handleOpenModal()
    }

    return (
        <>
            <div className="card" onClick={grabCourse}>
                <span className='course-title'>{course.title}</span>
            </div>
        </>
    )
}

export default Card