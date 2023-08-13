import React from 'react'
import Category from '../Category'
import './style.css'

const CategoriesContainer = ({categories}) => {

  return (
    <div className='categories-container'>
        {categories.map((item) => {
            return <Category category={item}/>
        })}
    </div>
  )
}

export default CategoriesContainer