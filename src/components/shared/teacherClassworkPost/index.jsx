import React from 'react'
import './style.css'

const ClassworkPost = ({post}) => {
    
    // let id = posts.id;
    return (
        <div className='post_body'>
            <div className='content'>
                <div className='title'>{post.title}</div>
                <div>{post.due}</div>
            </div>
        </div>
    )
}

export default ClassworkPost