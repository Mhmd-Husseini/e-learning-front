import React from 'react'
import Container from '../../../shared/Container'
import ChatModal from '../../../Student/ChatModal'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../../../config/request'

const StudentChat = () => {

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await sendRequest({ method: 'GET', route: `classmates/2`, body:"", });
      setPeople(response.data);
      console.log(people)
      
    } catch (error) {
    }
  };


  return (
    <div>
        <Container element={'person'} data={people} handleOpenModal={handleOpenModal}/>
        <ChatModal openModal={openModal} handleCloseModal={handleCloseModal}/>
    </div>
  )
}

export default StudentChat