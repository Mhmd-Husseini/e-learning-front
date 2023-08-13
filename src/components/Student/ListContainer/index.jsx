import React from 'react'
import './style.css'
import ClassworkListItem from '../ClassworkListItem'
import Person from '../Person'

const ListContainer = ({data, listItem, handleOpenModal}) => {

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
    <div className='list-container'>
      <div className="list-wrapper">
      {sample_data.map((item) => {
            return listItem=="person"? <Person item={item} handleOpenModal={handleOpenModal}/> : <ClassworkListItem item={item} />
        })}
      </div>
    </div>
  )
}

export default ListContainer