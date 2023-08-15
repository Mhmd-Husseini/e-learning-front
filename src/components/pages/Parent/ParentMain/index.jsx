import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from '../../../shared/navbar';
import Children from '../Children';
import ChildCourses from '../ChildCourses';
import Courses from '../Courses';

const ParentMain = () => {
  return (
        <Routes>
            <Route index element={<Children />} />
            <Route path="childCourses" element={<Courses />} />
        </Routes>
    );
}

export default ParentMain