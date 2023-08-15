import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css"
import ChildCard from '../../../parent/ChildCard'
import Navbar from '../../../shared/navbar';



const Children = () => {

  const [childrenData, setChildrenData] = useState([]);

  useEffect(() => {
    async function fetchChildrenData() {
      axios.defaults.headers.authorization =  `Bearer ${localStorage.getItem("token")}` ;
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/parent/children');
        setChildrenData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchChildrenData();
  }, []);

  return (
    
    <div className="body">
      <Navbar/>
      <div className='container'>
        <h2>Your Children</h2>
        <div className="cards_container">
          {childrenData.map(child => (
            <ChildCard
              key={child.name}
              name={child.name}
              childId={child.id}
            />

          ))}
        </div>
      </div>
    </div>
  )
  
};

export default Children