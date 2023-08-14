import React from 'react'
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
      const response = await sendRequest({ method: 'GET', route: `getTasks/2`, body:"", });
      setTasks(response.tasks);
      
    } catch (error) {
    }
  };
  
  return (
    <div>
      <Container element={'task'} data={tasks} />
    </div>
  )
}

export default StudentClasswork