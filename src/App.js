import './App.css';
import Landing from './components/pages/landing';
import AdminLayout from './components/pages/Admin/AdminLayout';
import Children from './components/pages/Parent/Children';
// import Son from './components/pages/Parent/Son';
import StudentClasses from './components/pages/Student/StudentClasses';
import TeacherCourses from './components/pages/Teacher/teacherCourses/index';
import TeacherCourseDetails from './components/pages/Teacher/CourseDetails/index';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        
        <Route path="/admin/*" element={<AdminLayout />} />

        <Route path="/teacher" >
          <Route index element={<TeacherCourses />} />
          <Route path="CourseDetails/:teacherId" element={<TeacherCourseDetails />} />
        </Route> 

        <Route path="/Student" >
          <Route index element={<StudentClasses />} />
        </Route> 

        <Route path="/Parent" >
          <Route index element={<Children />} />
        </Route> 

        <Route path="*" element={<Landing />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
