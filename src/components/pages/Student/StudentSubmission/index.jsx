import React from 'react'
import { sendRequest } from '../../../../config/request';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './style.css'

const StudentSubmission = () => {

  const { item_id, type } = useParams();

  const [task, setTask] = useState([]);

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      const response = await sendRequest({ method: 'GET', route: `getOneTask/${type}/${item_id}`, body: "", });
      setTask(response.task);
      console.log(task)

    } catch (error) {
    }
  };

  async function submitAssignment() {
    try {
      const response = await sendRequest({ method: 'POST', route: `upload`, body: "", });
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    < div className='submission-container' >
      {/* <SubmissionContent task={task} /> */}
      <div className="submission-wrapper">
        <div className='submission-instructions'>
          <span className='title-large'>{task.title}</span>
          <p>
            {task.description}
          </p>
        </div>
        <div className='submission-upload'>
          <span className='title-medium'>Submit Work</span>
          <input type="file" onClick={submitAssignment} />
        </div>
      </div>
      <div className="submission-wrapper">
        <button className='attend-btn'>Attendance</button>
      </div>
    </div >
  )
}

export default StudentSubmission