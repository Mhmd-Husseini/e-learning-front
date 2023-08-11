import React from 'react'
import './style.css'
import Navbar from '../../../shared/navbar'
import Hero from '../../../Student/Hero'
import CourseDetails from '../../../Student/CourseDetails'



const StudentCourse = () => {
  return (
    <div>
      <Navbar one={'Classwork'} two={'Enrollments'}/>
      <Hero course_name={"Math"} />
      <CourseDetails teacher={"Quibusdam, consequuntur"} description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, consequuntur."} />
    </div>
  )
}

export default StudentCourse