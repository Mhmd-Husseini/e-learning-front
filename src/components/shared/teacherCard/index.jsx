import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const TeacherCard = ({ id, name, description }) => {
  let courseid = id;
  let link = "courses/" + courseid;

  return (
    <Link to={`/teacher/CourseDetails/${id}`}>
      <a href={link}>
        <div className="card">
          <span>{name}</span>
          <p>{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default TeacherCard;
