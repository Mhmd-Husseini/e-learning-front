import React from 'react'
import Card from '../Card'
import './style.css'

const CardsContainer = ({courses}) => {

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
    <div className='course-container'>
        <div className="course-content">
        {sample_data.map((item) => {
            return <Card course={item}/>
        })}
        </div>
    </div>
  )
}

export default CardsContainer