import React from 'react'
import './style.css'
import ClassworkListItem from '../ClassworkListItem'

const ClassworkListContainer = () => {

  let sample_data =
    [
      {
        id: 2,
        course_id: 1,
        title: "FSW",
        due: "23:59 8-16-2023",
      },
      {
        id: 2,
        course_id: 2,
        title: "UIX",
        due: "23:59 8-16-2023",
      },
      {
        id: 2,
        course_id: 3,
        title: "FSD",
        due: "23:59 8-16-2023",
      },
      {
        id: 2,
        course_id: 3,
        title: "FSBatata",
        due: "23:59 8-16-2023",
      },
      {
        id: 2,
        course_id: 4,
        title: "FSTe3tir",
        due: "23:59 8-16-2023",
      },
    ]

  return (
    <div className='list-container'>
      <div className="list-wrapper">
      {sample_data.map((item) => {
            return <ClassworkListItem id={item.id} course_id={item.course_id} title={item.title} due={item.due}/>
        })}
      </div>
    </div>
  )
}

export default ClassworkListContainer