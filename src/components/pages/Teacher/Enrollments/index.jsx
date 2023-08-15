import Navbar from '../../../shared/navbar';
import Person from '../../../shared/teacher_person';
import '../Enrollments/style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatModal from '../../../shared/ChatModel';
import {Link } from 'react-router-dom';

const Enrollments = () => {

  let [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  const handleOpenModal = (student) => {
    setSelectedStudent(student);
    setOpenModal(true);
  }

  const token = localStorage.getItem("token")
  const courseid = localStorage.getItem("courseid")

  const getStudnets = async () => {
    await axios.get(`http://127.0.0.1:8000/api/teacher/courses/${courseid}`, {
      "headers": {
          'Authorization': `Bearer ${token}`
      }
  })
    .then(response => {
      // console.log(response.data.course.students);
      setStudents(response.data.course.students);
      localStorage.setItem("students", JSON.stringify(response.data.course.students));
    })
    .catch(error => {
      console.log(error);
    });
  };

  useEffect(() => {
    getStudnets();
  }, []);

  useEffect(() => {
    localStorage.setItem("students",JSON.stringify(students));
  }, [students]);

  return (
    <div className='body_enroll'>
      <div className='nav'><Navbar one={'teacher/Classwork'} two={'teacher/Enrollments'}/></div>
        <div className='enroll_head'>
            <div><h1>Enrollments</h1></div>
            <div><button><Link to={`/teacher`}> Back </Link> </button> </div>
        </div>
      <div className='studnets'>
        {students.map((student) => (
          <Person key={student.id} info={student} handleOpenModal={() => handleOpenModal(student)}/>
        ))}
      </div>
      {selectedStudent && (
      <ChatModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        student={selectedStudent}/>
      )}
    </div>
  );
};
  
  export default Enrollments;