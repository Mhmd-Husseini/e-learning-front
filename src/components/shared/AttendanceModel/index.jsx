import Modal from 'react-modal';
import '../AttendanceModel/style.css';
import StudentAttendance from '../teacherAttendance/index';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendanceModal = ({ openModal, handleCloseModal }) => {

    let [students, setStudents] = useState([]);
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
        // localStorage.setItem("students", JSON.stringify(response.data.course.students));
    })
    .catch(error => {
      console.log(error);
    });
    };
    
    useEffect(() => {
        getStudnets();
    }, []);


    return (
        <div >
            <Modal isOpen={openModal} className="attend_modal">
                <div className='attend_head'>
                    <div><h2>Attendance</h2></div>
                    <div onClick={handleCloseModal} className='exit'>x</div>
                </div>
                <div>
                    {students.map((student) => (
                        <StudentAttendance key={student.id} info={student} />
                    ))}
                </div>
                <div className='btn'><button>Submit</button></div>
            </Modal>

        </div>
    )
}

export default AttendanceModal