import React, { useState } from 'react';import '../PostDetails/style.css'
import Navbar from '../../../shared/navbar'
import { Link } from 'react-router-dom'
import AttendanceModal from '../../../shared/AttendanceModel/index'

const PostDetails = () => {
    const postString = localStorage.getItem("post")
    const type = localStorage.getItem("type")
    const post = JSON.parse(postString);
    const postTitle = post.title;
    const postDescription = post.description;
    localStorage.setItem("lecture_id", post.id);

    const [isAttendanceModalOpen, setIsAttendanceModalOpen] = useState(false);

    const openAttendanceModal = () => {
        setIsAttendanceModalOpen(true);
    };

    const closeAttendanceModal = () => {
        setIsAttendanceModalOpen(false);
    };

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
            <AttendanceModal openModal={isAttendanceModalOpen} handleCloseModal={closeAttendanceModal} />
            <div className="bottom">
                <Link to={'/teacher/Classwork'}><button className="btn">back</button></Link>
                {type === "lecture" && <button className="btn" onClick={openAttendanceModal}>Attendance</button>}
                
                <Link to={'/teacher/solution'}>
                    {(type === "assignment" || type === "quiz") && <button className="btn">View Solution</button>}
                </Link>
            </div>
            
        </div>
    )
}

export default PostDetails;