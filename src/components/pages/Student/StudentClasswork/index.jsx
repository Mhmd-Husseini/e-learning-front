import React from 'react'
import Navbar from '../../../shared/navbar'
import ClassworkListContainer from '../../../Student/ClassworkListContainer'


const StudentClasswork = () => {
  return (
    <div>
      <Navbar one={'Classwork'} two={'Enrollments'}/>
      <ClassworkListContainer />
    </div>
  )
}

export default StudentClasswork