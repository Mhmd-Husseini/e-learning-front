import Modal from 'react-modal';
import '../AddPostModel/style.css';
import React, { useState } from 'react';
import axios from 'axios';

const AddPostFormModal = ({ openModal, handleCloseModal }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [type, setPostType] = useState('quiz');
    const [date,setDate] = useState();

//    const due = "2023-08-15 21:50:56";
    const link = "wwwwwwwwww";
    const rubric =" ooooo"
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        
        const token = localStorage.getItem("token");
        const course_id = localStorage.getItem("courseid");

        const postData = { title, description, link,rubric, due:date, type, course_id };

        //console.log(postData)

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        console.log(postData,config);

        axios.post('http://127.0.0.1:8000/api/teacher/post', postData, config)
        .then(response => {
            console.log(response);
            window.location.href = `CourseDetails/${course_id}`;
            handleCloseModal();
        })
        .catch(error => {
            if (error.response) {
                console.log('Server response data:', error.response.data);
                console.log('Server response status:', error.response.status);
                console.log('Server response headers:', error.response.headers);
            } else if (error.request) {
                console.log('No server response received');
            } else {
                console.log('Error setting up request', error.message);
            }
        });
    };

    return (
        <div>
            <Modal isOpen={openModal} className="attend_modal">
                <div className='attend_head'>
                    <div><h2>Add Post</h2></div>
                    <div onClick={handleCloseModal} className='exit'>x</div>
                </div>
                <div className='post_form'>
                    <form onSubmit={onSubmit} encType="multipart/form-data">
                        <div className='input_div'>
                            <label htmlFor="title">Title:</label><br></br>
                            <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            />
                        </div>
                        <div className='input_div'>
                            <label htmlFor="description">Description:</label><br></br>
                            <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            />
                        </div>
                        <div className='input_div'>
                            <label htmlFor="file">Upload File:</label>
                            <input
                            type="file"
                            id="file"
                            accept=".pdf,.doc,.docx,.txt"
                            onChange={handleFileChange}
                        />
                        </div>

                        <div className='input_div'>
                            <label htmlFor="file">Choose date:</label>
                            <input
                            type="date"
                            id="date"
                            onChange={(e) => setDate(e.target.value)}
                        />

                        </div>
                        <div className='input_div'>
                            <label htmlFor="type">Post Type:</label><br></br>
                            <select
                            id="type"
                            value={type}
                            onChange={(e) => setPostType(e.target.value)}
                            >
                            <option value="quiz">Quiz</option>
                            <option value="assignment">Assignment</option>
                            <option value="material">Material</option>
                            <option value="lecture">Lecture</option>
                            </select>
                        </div>
                        <button className='btn_submit' type="submit">Submit</button>
                    </form>
                </div>
            </Modal>

        </div>
    );
}

export default AddPostFormModal