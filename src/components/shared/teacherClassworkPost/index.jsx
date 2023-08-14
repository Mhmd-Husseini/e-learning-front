import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const ClassworkPost = ({post}) => {
    
    // let id = posts.id;
    return (
        <Link to={'/teacher/PostDetails'}>
            <div className='post_body'>
                <div className='content'>
                    <div className='title'>{post.title}</div>
                    <div>{post.due}</div>
                </div>
            </div>
        </Link>
        
    )
}

export default ClassworkPost