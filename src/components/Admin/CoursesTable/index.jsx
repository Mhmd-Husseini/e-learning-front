import React, { useState } from "react";
import "./style.css";
import ModalForm from "../ModalForm";
import { sendRequest } from '../../../config/request';

const CoursesTable = ({ courses, onDelete }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
  };

  const handleUpdateCourse = async (updatedData) => {
    try {
      const response = await sendRequest({
        method: 'POST',
        route: "/admin/courses/updateCourse",
        body: updatedData,
      });
      console.log("Updated course:", response);
      handleCloseModal();
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <div className="TableContainer">
      <table className="Table">
        <thead>
          <tr>
            <th className="TableHeader">ID</th>
            <th className="TableHeader">Title</th>
            <th className="TableHeader">Description</th>
            <th className="TableHeader">Teacher ID</th>
            <th className="TableHeader"> Category</th>
            <th className="TableHeader">Created At</th>
            <th className="TableHeader">Enrollments</th>
            <th className="TableHeader">Actions</th>
          </tr>
        </thead>
        <tbody>       
          {courses.map((course) => (
            <tr key={course.id} className="TableRow">
              <td className="TableCell">{course.id}</td>
              <td className="TableCell">{course.name}</td>
              <td className="TableCell">{course.description}</td>
              <td className="TableCell">{course.teacher_id}</td>
              <td className="TableCell">{course.category.category}</td>
              <td className="TableCell">{course.created_at}</td>
              <td className="TableCell">{course.enrolled_students_count}</td>              
              <td className="ActionsCell">
                <button onClick={() => handleOpenModal(course)}>Update</button>
                <button onClick={() => onDelete(course.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (<ModalForm user={selectedCourse} handleCloseModal={handleCloseModal} OpenModal={isModalOpen} onUpdate={handleUpdateCourse}/>
      )}
    </div>
  );
};

export default CoursesTable;
