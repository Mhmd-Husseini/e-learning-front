import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../../shared/navbar';
import StudentClasses from '../StudentClasses';
import StudentClasswork from '../StudentClasswork';
import StudentSubmission from '../StudentSubmission';
import StudentChat from '../StudentChat'

const StudentLayout = () => {
    return (
        <>
            <Navbar one={'Classwork'} two={'Enrollments'} user={'Student'} />
            <div>
                <Routes>
                    <Route index element={<StudentClasses />} />
                    <Route path="Classwork" element={<StudentClasswork />} />
                    <Route path="Submission" element={<StudentSubmission />} />
                    <Route path="Chat" element={<StudentChat />} />
                </Routes>
            </div>
        </>
    );
};

export default StudentLayout;
