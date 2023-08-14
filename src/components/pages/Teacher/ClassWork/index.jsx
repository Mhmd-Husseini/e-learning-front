import Navbar from '../../../shared/navbar'
import ClassworkPost from '../../../shared/teacherClassworkPost/index';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../ClassWork/style.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Classwork = () => {
  const { id } = useParams();
  console.log(id);

  let [assignments , setAssignments] = useState([]);
  let [quizzes , setQuizzes] = useState([]);
  let [lectures , setLeactures] = useState([]);
  let [materials , setMaterials] = useState([]);
  let [name , setName] = useState('');

  const token = localStorage.getItem("token")
  const courseid = localStorage.getItem("courseid")
  // console.log(courseid);
  // `http://127.0.0.1:8000/api/teacher/courses/${id}`
  const getPosts = async () => {
    await axios.get(`http://127.0.0.1:8000/api/teacher/courses/2`, {
      "headers": {
          'Authorization': `Bearer ${token}`
      }
  })
    .then(response => {
      console.log(response.data.course);
      setAssignments(response.data.course.assignments);
      setQuizzes(response.data.course.quizes);
      setLeactures(response.data.course.lectures);
      setMaterials(response.data.course.materials);
      setName(response.data.course.name)
    })
    .catch(error => {
      console.log(error);
    });
  };

  useEffect(() => {
    getPosts();
  }, [id]);

  return (
      <div className='classwork'>
        <div className='nav'><Navbar one={'teacher/Classwork'} two={'teacher/Enrollments'}/></div>
        
        <div className='course_head'>
          <div><h1>{name}</h1></div>
          <div>
            <button>Add Post</button>
            <button><Link to={`/teacher`}> Back </Link> </button> 
          </div>
        </div>

        <div className='posts_section'>
          <h2 className='postsTitle'>Lectures</h2>
          {lectures.map((lecture) => (
              <ClassworkPost post={lecture}/>
          ))}
        </div>
        <div className='posts_section'>
          <h2 className='postsTitle'>Materials</h2>
          {materials.map((material) => (
            <ClassworkPost post={material}/>
          ))}
        </div>
        <div className='posts_section'>
          <h2 className='postsTitle'>Quizzes</h2>
          <div className='post_body'>
            {quizzes.map((quiz) => (
                <ClassworkPost post={quiz}/>
            ))} 
          </div>
          
        </div>
        <div className='posts_section'>
          <h2 className='postsTitle'>Assignments</h2>
          {assignments.map((assignment) => (
              <ClassworkPost post={assignment}/>
          ))}
        </div>
      </div>
    );
  };
  
  export default Classwork;