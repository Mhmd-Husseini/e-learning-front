import React from 'react'
import Navbar from '../../../shared/navbar'
import Container from '../../../shared/Container'


const StudentClasswork = () => {
  return (
    <div>
      <Navbar one={'Classwork'} two={'Enrollments'}/>
      <Container element={'task'} />
    </div>
  )
}

export default StudentClasswork