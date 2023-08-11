import React from 'react'
import Navbar from '../../../shared/navbar'
import CategoriesContainer from '../../../Student/CategoriesContainer'
import "./style.css"
import CardsContainer from '../../../shared/CardsContainer'

const StudentClasses = () => {

  return (
    <div>
      <Navbar one={'Classwork'} two={'Enrollments'}/>
      <CategoriesContainer/>
      <CardsContainer/>
    </div>
  )
}

export default StudentClasses