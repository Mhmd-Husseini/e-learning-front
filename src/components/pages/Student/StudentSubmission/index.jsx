import React from 'react'
import { sendRequest } from '../../../../config/request';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';
import './style.css'

const StudentSubmission = () => {

  let { course_id, item_id, type } = useParams();

  const [task, setTask] = useState([]);
  const [file, setFile] = useState([])
  

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };


  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      const response = await sendRequest({ method: 'GET', route: `getOneTask/${type}/${item_id}`, body: "", });
      setTask(response.task);

    } catch (error) {
    }
  };

  async function submitAssignment() {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('course_id', course_id);
      if (type == 'assignment') {
        formData.append('assignment_id', item_id)
      } else {
        formData.append('quiz_id', item_id)
      }
      try {
        let token = localStorage.getItem('token')
        const response = await axios.post('http://127.0.0.1:8000/api/submit', formData, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
  
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
  
  }

  return (
    < div className='submission-container' >
      <div className="submission-wrapper">
        <div className='submission-instructions'>
          <span className='title-large'>{task.title}</span>
          <p>
            {task.description}
          </p>
        </div>
        <div className='submission-upload'>
          <span className='title-medium'>Submit Work</span>
          <input type="file" onChange={handleFileChange} />
          <button onClick={submitAssignment}>Submit</button>
        </div>
      </div>
      <div className="submission-wrapper">
      </div>
    </div >
  )
}

export default StudentSubmission