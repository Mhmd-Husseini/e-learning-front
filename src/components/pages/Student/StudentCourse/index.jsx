import React from 'react'
import './style.css'
import Navbar from '../../../shared/navbar'
import Hero from '../../../Student/Hero'


const StudentCourse = () => {
  return (
    <div>
      <Navbar one={'Classwork'} two={'Enrollments'}/>
      <Hero course_name={"Math"} />
    </div>
  )
}

export default StudentCourse