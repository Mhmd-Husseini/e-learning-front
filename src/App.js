import './App.css';
import Landing from './components/pages/landing';
import AdminLayout from './components/pages/Admin/AdminLayout';
import Children from './components/pages/Parent/Children';
import StudentClasses from './components/pages/Student/StudentClasses';
import TeacherClasses from './components/pages/Teacher/TeacherClasses';
import StudentLayout from './components/pages/Student/StudentLayout';
import Courses from './components/pages/Parent/Courses';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ParentMain from './components/pages/Parent/ParentMain';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />

        <Route path="/admin/*" element={<AdminLayout />} />

        <Route path="/teacher" >
          <Route index element/>
        </Route>

        <Route path="/Student/*" element={<StudentLayout />} />

        
        
        <Route path='/parent/*' element={<ParentMain />} />
        
        <Route path="*" element={<Landing />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
