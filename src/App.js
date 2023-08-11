import './App.css';
import Landing from './components/pages/landing';
import Admin from './components/pages/Admin';
import Children from './components/pages/Parent/Children';
import Son from './components/pages/Parent/Son';
import StudentClasses from './components/pages/Student/StudentClasses';
import TeacherClasses from './components/pages/Teacher/TeacherClasses';



import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/teacher" >
          <Route index element={<TeacherClasses />} />
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
