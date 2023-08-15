import React from 'react'
import './style.css'
import { sendRequest } from '../../../config/request';

const SubmissionContent = ({task}) => {

    async function submitAssignment(){
        try{
            const response = await sendRequest({ method: 'POST', route: `upload`, body:"", });
        }
        catch (e){
            console.log(e)
        }
    }

    return (
        <div className='submission-container'>
            <div className="submission-wrapper">
                <div className='submission-instructions'>
                    <span className='title-large'>{task.title}</span>
                    <p>
                        {task.description}
                    </p>
                </div>
                <div className='submission-upload'>
                    <span className='title-medium'>Submit Work</span>
                    <input type="file" onClick={submitAssignment}/>
                </div>
            </div>
            <div className="submission-wrapper">
                <button className='attend-btn'>Attendance</button>
            </div>
        </div>
    )
}

export default SubmissionContent