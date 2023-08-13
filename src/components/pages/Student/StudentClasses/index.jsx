import React from 'react'
import CategoriesContainer from '../../../Student/CategoriesContainer'
import "./style.css"
import Container from '../../../shared/Container'
import CourseModal from '../../../Student/CourseModal'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../../../config/request'

const StudentClasses = () => {

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await sendRequest({ method: 'GET', route: "/courses", body:"", });
      setCourses(response.courses);
      setCategories(response.categories);
      
    } catch (error) {
    }
  };

  return (
    <div>
      <CategoriesContainer categories={categories}/>
      <Container element={'course'} data={courses} handleOpenModal={handleOpenModal}/>
      <CourseModal openModal={openModal} handleCloseModal={handleCloseModal}/>
    </div>
  )
}

export default StudentClasses