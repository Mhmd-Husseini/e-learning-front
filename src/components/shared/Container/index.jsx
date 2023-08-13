import React from 'react'
import Card from '../Card'
import ClassworkListItem from '../../Student/ClassworkListItem'
import Person from '../../Student/Person'
import './style.css'

const CardsContainer = ({element, data, handleOpenModal}) => {

    let sample_data =
    [
      {
        id: 2,
        course_id: 1,
        title: "FSW",
        name: "FSW",
        description: "lorem",
        due: "23:59 8-16-2023",
      },
      {
        id: 2,
        course_id: 2,
        title: "UIX",
        name: "UIX",
        description: "lorem",
        due: "23:59 8-16-2023",
      },
      {
        id: 2,
        course_id: 3,
        title: "FSD",
        name: "FSD",
        description: "lorem",
        due: "23:59 8-16-2023",
      },
      {
        id: 2,
        course_id: 3,
        title: "FSBatata",
        name: "FSBatata",
        description: "lorem",
        due: "23:59 8-16-2023",
      },
      {
        id: 2,
        course_id: 4,
        title: "FSTe3tir",
        name: "FSTe3tir",
        description: "lorem",
        due: "23:59 8-16-2023",
      },
    ]
  return (
    <div className='course-container'>
        <div className="course-content">
        {data.map((item, index) => {
            return element=="course"? <Card key={index} course={item} handleOpenModal={handleOpenModal}/>
            : element=="person" ?  <Person item={item} handleOpenModal={handleOpenModal}/>
            : element=="task" ? <ClassworkListItem item={item}/>
            : <div></div>   
        })}
        </div>
    </div>
  )
}

export default CardsContainer