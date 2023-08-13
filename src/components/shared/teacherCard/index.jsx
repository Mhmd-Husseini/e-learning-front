import React from 'react';
import './style.css';

const TeacherCard = ({ id, name, description }) => {
  let courseid = id;
  let link = "courses/" + courseid;

  return (
    <a href={link}>
      <div className="card">
        <span>{name}</span>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default TeacherCard;
