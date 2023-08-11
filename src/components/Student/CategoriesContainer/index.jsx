import React from 'react'
import Category from '../Category'
import './style.css'

const CategoriesContainer = ({categories}) => {

    let sample_data =
        [
            {
                id:1,
                category:"science",
            },
            {
                id:1,
                category:"math",
            },
            {
                id:1,
                category:"chemistry",
            },
        ]


  return (
    // replace sample_data with categories
    <div className='categories-container'>
        {sample_data.map((item) => {
            return <Category category={item.category}/>
        })}
    </div>
  )
}

export default CategoriesContainer