import Navbar from '../../../shared/navbar';
import Person from '../../../shared/teacher_person';
import '../Enrollments/style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatModal from '../../../shared/ChatModel';

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
  // const courseid = localStorage.getItem("courseid")
  // `http://127.0.0.1:8000/api/teacher/courses/${courseid}`
  const getStudnets = async () => {
    await axios.get(`http://127.0.0.1:8000/api/teacher/courses/2`, {
      "headers": {
          'Authorization': `Bearer ${token}`
      }
  })
    .then(response => {
      console.log(response.data.course.students);
      setStudents(response.data.course.students);
    })
    .catch(error => {
      console.log(error);
    });
  };

  useEffect(() => {
    getStudnets();
  }, []);

  console.log(students , 2222222)

    return (
      <div className='body'>
        <div className='nav'><Navbar one={'teacher/Classwork'} two={'teacher/Enrollments'}/></div>
        <div className="title"><h1>Enrollments</h1></div>
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