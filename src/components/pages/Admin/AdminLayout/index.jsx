import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminSidebar from '../../../../components/Admin/AdminSidebar';
import AdminHome from '../AdminHome';
import AdminAdmin from '../AdminAdmin';
import AdminStudent from '../AdminStudent';
import AdminTeacher from '../AdminTeacher';
import AdminParent from '../AdminParent';

import "./style.css";

const AdminLayout = () => {
  return (
    <>
    <div className="admin-layout">
      <AdminSidebar/>
      <div className="content">
        <Routes>
          <Route index element={<AdminHome />} />
          <Route path="admin" element={<AdminAdmin />} />
          <Route path="teacher" element={<AdminTeacher />} />
          <Route path="student" element={<AdminStudent />} />
          <Route path="parent" element={<AdminParent />} />
        </Routes>
      </div>
    </div>
    </>
  );
};

export default AdminLayout;
