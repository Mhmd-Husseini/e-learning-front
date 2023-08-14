import React from 'react'
import SubmissionContent from '../../../Student/SubmissionContent'
import { sendRequest } from '../../../../config/request';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

const StudentSubmission = () => {

  const { item_id , type} = useParams();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      const response = await sendRequest({ method: 'GET', route: `getOneTask/${type}/${item_id}`, body:"", });
      setTasks(response.tasks);
      
    } catch (error) {
    }
  };

  return (
    <div>
      <SubmissionContent />
    </div>
  )
}

export default StudentSubmission