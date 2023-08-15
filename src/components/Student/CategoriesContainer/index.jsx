import React from 'react'
import Category from '../Category'
import './style.css'

const CategoriesContainer = ({categories}) => {

  return (
    <div className='categories-container'>
        {categories.map((item, index) => {
            return <Category key={index} category={item}/>
        })}
    </div>
  )
}

export default CategoriesContainer