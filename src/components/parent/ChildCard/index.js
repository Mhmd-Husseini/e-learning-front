import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import "./style.css";


const ChildCard = ({ name, childId }) => {
    
    const navigate = useNavigate();
    const link = childId;

  return(<div className="single_card" onClick={() => navigate(`/parent/childCourses`)}>
    
    <h3>{name}</h3>
    
  </div>
  )
};

export default ChildCard;