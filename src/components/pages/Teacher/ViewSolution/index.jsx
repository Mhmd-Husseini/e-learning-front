import '../ViewSolution/style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewSolutions = () => {
  const [solutions, setSolutions] = useState([]);

  const token = localStorage.getItem("token")

  useEffect(() => {
    fetchSolutions();
  }, []);

  const fetchSolutions = async () => {
    try {
      const response = await axios.get('API_ENDPOINT_HERE');
      setSolutions(response.data);
    } catch (error) {
      console.error('Error fetching solutions:', error);
    }
  };

  const handleGradeChange = (submissionId, grade) => {
    // Update the solutions array with the new grade
    const updatedSolutions = solutions.map(solution => {
      if (solution.id === submissionId) {
        return { ...solution, grade: parseInt(grade) };
      }
      return solution;
    });

    setSolutions(updatedSolutions);
  };

  const AddGrade = async (submissionId, grade) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/submissions/update`,
        { submissionId, grade },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      console.log(response.data);
      // Update the solutions array with the new grade
      const updatedSolutions = solutions.map(solution => {
        if (solution.id === submissionId) {
          return { ...solution, grade: parseInt(grade) };
        }
        return solution;
      });
      setSolutions(updatedSolutions);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='solution_head'>
        <h1>View Solutions</h1>
        <Link to={'/teacher/PostDetails'}><button>Back</button></Link>
      </div>
      <div className='solution_body'>
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Solution</th>
              <th>Grade</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {solutions.map(solution => (
              <tr key={solution.id}>
                <td>{solution.studentName}</td>
                <td><a href={solution.solutionFileUrl} target="_blank" rel="noopener noreferrer">View Solution</a></td>
                <td>
                  <input
                    type="number"
                    value={solution.grade}
                    onChange={e => handleGradeChange(solution.id, e.target.value)}
                  />
                </td>
                <td><button onClick={() => AddGrade(solution.id, solution.grade)}>Add Grade</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewSolutions;
