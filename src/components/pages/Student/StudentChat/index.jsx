import React from 'react'
import Navbar from '../../../shared/navbar'
import PeopleContainer from '../../../Student/PeopleContainer'

const StudentChat = () => {
  return (
    <div>
        <Navbar one={'Classwork'} two={'Enrollments'}/>
        <PeopleContainer/>
    </div>
  )
}

export default StudentChat