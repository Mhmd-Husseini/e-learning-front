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
        due: "23:59 8-16-2023",
      },
      {
        id: 2,
        course_id: 2,
        title: "UIX",
        name: "UIX",
        due: "23:59 8-16-2023",
      },
      {
        id: 2,
        course_id: 3,
        title: "FSD",
        name: "FSD",
        due: "23:59 8-16-2023",
      },
      {
        id: 2,
        course_id: 3,
        title: "FSBatata",
        name: "FSBatata",
        due: "23:59 8-16-2023",
      },
      {
        id: 2,
        course_id: 4,
        title: "FSTe3tir",
        name: "FSTe3tir",
        due: "23:59 8-16-2023",
      },
    ]
  return (
    <div className='course-container'>
        <div className="course-content">
        {sample_data.map((item) => {
            return element=="course"? <Card course={item} handleOpenModal={handleOpenModal}/>
            : element=="person" ?  <Person item={item} handleOpenModal={handleOpenModal}/>
            : element=="task" ? <ClassworkListItem item={item}/>
            : <div></div>   
        })}
        </div>
    </div>
  )
}

export default CardsContainer