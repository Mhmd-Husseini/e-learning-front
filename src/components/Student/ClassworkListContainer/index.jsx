import React from 'react'
import './style.css'

const ClassworkListContainer = () => {

  let sample_data =
        [
            {
                course_id: 1,
                name:"FSW",
                description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nobis deserunt corrupti velit!",
            },
            {
                course_id: 2,
                name:"UIX",
                description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nobis deserunt corrupti velit!",
            },
            {
                course_id: 3,
                name:"FSD",
                description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nobis deserunt corrupti velit!",
            },
            {
                course_id: 3,
                name:"FSBatata",
                description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nobis deserunt corrupti velit!",
            },
            {
                course_id: 4,
                name:"FSTe3tir",
                description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde nobis deserunt corrupti velit!",
            },
        ]

  return (
    <div className='list-container'>
        <div className="list-wrapper">
        </div>
    </div>
  )
}

export default ClassworkListContainer