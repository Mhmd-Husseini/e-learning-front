import React from 'react'
import CategoriesContainer from '../../../Student/CategoriesContainer'
import "./style.css"
import Container from '../../../shared/Container'
import CourseModal from '../../../Student/CourseModal'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../../../config/request'

const StudentClasses = () => {

  const defaultState ={
    title: "",
    description:""
  }

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(defaultState)

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
      <Container setSelectedCourse={setSelectedCourse} element={'course'} data={courses} openModal={openModal} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal}/>
      <CourseModal details={selectedCourse} openModal={openModal} handleCloseModal={handleCloseModal} />
    </div>
  )
}

export default StudentClasses