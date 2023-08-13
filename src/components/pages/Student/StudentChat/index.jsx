import React from 'react'
import Navbar from '../../../shared/navbar'
import Container from '../../../shared/Container'
import ChatModal from '../../../Student/ChatModal'
import { useState } from 'react'

const StudentChat = () => {

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  return (
    <div>
        <Navbar one={'Classwork'} two={'Enrollments'}/>
        <Container element={'person'} handleOpenModal={handleOpenModal}/>
        <ChatModal openModal={openModal} handleCloseModal={handleCloseModal}/>
    </div>
  )
}

export default StudentChat