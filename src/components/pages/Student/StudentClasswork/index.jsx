import React from 'react'
import Navbar from '../../../shared/navbar'
import ListContainer from '../../../Student/ListContainer'


const StudentClasswork = () => {
  return (
    <div>
      <Navbar one={'Classwork'} two={'Enrollments'}/>
      <ListContainer listItem={'task'} />
    </div>
  )
}

export default StudentClasswork