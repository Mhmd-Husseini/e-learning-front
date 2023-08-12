import React from 'react'
import './style.css'
import Person from '../Person'

const PeopleContainer = () => {

    let sample_data =
        [
            {
                id: 2,
                course_id: 1,
                name: "FSW",
            },
            {
                id: 2,
                course_id: 2,
                name: "UIX",
            },
            {
                id: 2,
                course_id: 3,
                name: "FSD",
            },
            {
                id: 2,
                course_id: 3,
                name: "FSBatata",
            },
            {
                id: 2,
                course_id: 4,
                name: "FSTe3tir",
            },
        ]

    return (
        <div className='list-container'>
            <div className="list-wrapper">
                {sample_data.map((item) => {
                    return <Person item={item} />
                })}
            </div>
        </div>
    )
}

export default PeopleContainer