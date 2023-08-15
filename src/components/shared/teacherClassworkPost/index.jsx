import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const ClassworkPost = ({post}) => {
    console.log(post)
    const handleClick = () => {
        localStorage.setItem("post", JSON.stringify(post));
    };

    return (
        <Link to={'/teacher/PostDetails'} onClick={handleClick}>
            <div className='post_body'>
                <div className='content'>
                    <div className='title'>{post.title}</div>
                    <div>{post.date} {post.due}</div>
                </div>
            </div>
        </Link>
        
    )
}

export default ClassworkPost