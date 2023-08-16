import './App.css';
import Landing from './components/pages/landing';
import AdminLayout from './components/pages/Admin/AdminLayout';
import TeacherClasses from './components/pages/Teacher/TeacherClasses';
import StudentLayout from './components/pages/Student/StudentLayout';
import ParentMain from './components/pages/Parent/ParentMain';
import './App.css' 

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />

        <Route path="/admin/*" element={<AdminLayout />} />

        <Route path="/teacher" >
          <Route index element={<TeacherClasses />} />
        </Route>

        <Route path="/Student/*" element={<StudentLayout />} />

        <Route path="/Parent/*" >
          <Route index element={<ParentMain />} />
        </Route>

        <Route path="*" element={<Landing />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
