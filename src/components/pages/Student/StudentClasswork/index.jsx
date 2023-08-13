import React from 'react'
import Navbar from '../../../shared/navbar'
import Container from '../../../shared/Container'
import { useEffect, useState } from 'react'
import { sendRequest } from '../../../../config/request'


const StudentClasswork = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await sendRequest({ method: 'GET', route: "/courses/1", body:"", });
      setTasks(response);
      
    } catch (error) {
    }
  };
  
  return (
    <div>
      <Navbar one={'Classwork'} two={'Enrollments'}/>
      <Container element={'task'} data={tasks} />
    </div>
  )
}

export default StudentClasswork