import React from 'react'
import Card from '../Card'
import ClassworkListItem from '../../Student/ClassworkListItem'
import Person from '../../Student/Person'
import './style.css'

const Container = ({setSelectedCourse, teacher, element, data, openModal, handleOpenModal, handleCloseModal}) => {

  return (
    <div className='course-container'>
        <div className="course-content">
        {data.map((item, index) => {
            return element=="course"? <Card key={index} course={item} handleOpenModal={handleOpenModal} setSelectedCourse={setSelectedCourse}/>
            : element=="person" ?  <Person key={index} item={item} handleOpenModal={handleOpenModal}/>
            : element=="task" ? <ClassworkListItem key={index} item={item}/>
            : element=="enrollment" ? <Card key={index} course={item} type="enrollment" /> 
            : <div></div>
        })}
        </div>
    </div>
  )
}

export default Container