import React from 'react'
import '../PostDetails/style.css'
import Navbar from '../../../shared/navbar'
import { Link } from 'react-router-dom'
const PostDetails = () => {
    const postString = localStorage.getItem("post")
    const post = JSON.parse(postString);
    console.log(post)

    const postId = post.id;
    const postTitle = post.title;
    const postDescription = post.description;
    console.log(postTitle, postId)

    return (
        <div className="submission-container">
        <div className="submission-wrapper">
            <div className="submission-instructions">
                <div className='nav'><Navbar one={'teacher/Classwork'} two={'teacher/Enrollments'}/></div>
                <div className='body'>
                    <span className="title-large">{postTitle}</span>
                    <p>{postDescription}</p>
                </div>
                
            </div>
        </div>
        <div className="bottom">
            <Link to={'/teacher/Classwork'}><button className="btn">back</button></Link>
            
            <button className="btn">Attendance</button>
        </div>
    </div>
    )
}

export default PostDetails