import React from 'react'
import SubmissionContent from '../../../Student/SubmissionContent'
import { sendRequest } from '../../../../config/request';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

const StudentSubmission = () => {

  const { item_id , type} = useParams();

  const [task, setTask] = useState([]);

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      const response = await sendRequest({ method: 'GET', route: `getOneTask/${type}/${item_id}`, body:"", });
      setTask(response.task);
      console.log(task)
      
    } catch (error) {
    }
  };

  return (
    <div>
      <SubmissionContent task={task} />
    </div>
  )
}

export default StudentSubmission