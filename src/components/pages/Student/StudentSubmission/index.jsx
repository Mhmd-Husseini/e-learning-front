import React from 'react'
import Navbar from '../../../shared/navbar'
import SubmissionContent from '../../../Student/SubmissionContent'

const StudentSubmission = () => {
  return (
    <div>
      <Navbar one={'Classwork'} two={'Enrollments'}/>
      <SubmissionContent />
    </div>
  )
}

export default StudentSubmission