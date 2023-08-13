import React from 'react'
import Navbar from '../../../shared/navbar'
import CategoriesContainer from '../../../Student/CategoriesContainer'
import "./style.css"
import Container from '../../../shared/Container'
import CourseModal from '../../../Student/CourseModal'
import { useState } from 'react'

const StudentClasses = () => {

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  return (
    <div>
      <Navbar one={'Classwork'} two={'Enrollments'}/>
      <CategoriesContainer/>
      <Container element={'course'} handleOpenModal={handleOpenModal}/>
      <CourseModal openModal={openModal} handleCloseModal={handleCloseModal}/>
    </div>
  )
}

export default StudentClasses