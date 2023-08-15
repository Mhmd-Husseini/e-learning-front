import '../ViewSolution/style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewSolutions = () => {

    const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    // Fetch solutions from the database
    const fetchSolutions = async () => {
      try {
        const response = await axios.get('API_ENDPOINT_HERE');
        setSolutions(response.data);
      } catch (error) {
        console.error('Error fetching solutions:', error);
      }
    };

    fetchSolutions();
  }, []);

  const handleGradeChange = (solutionId, newGrade) => {
    // Update the grade in the local state
    const updatedSolutions = solutions.map(solution =>
      solution.id === solutionId ? { ...solution, grade: newGrade } : solution
    );
    setSolutions(updatedSolutions);

    // Update the grade in the database
    axios.put(`API_ENDPOINT_HERE/${solutionId}`, { grade: newGrade })
      .catch(error => {
        console.error('Error updating grade:', error);
      });
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
                    </tr>
            </thead>
            <tbody>
            {/* {solutions.map(solution => (
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
                </tr>
            ))} */}
                <tr>
                    <td>omar</td>
                    {/* <td><a href={solution.solutionFileUrl} target="_blank" rel="noopener noreferrer">View Solution</a></td> */}
                    <td></td>
                    <td>
                        <input
                        type="number"
                        value="100"
                        />
                    </td>
                </tr>
                <tr>
                    <td>omar</td>
                    {/* <td><a href={solution.solutionFileUrl} target="_blank" rel="noopener noreferrer">View Solution</a></td> */}
                    <td></td>
                    <td>
                        <input
                        type="number"
                        value="100"
                        />
                    </td>
                </tr>
                <tr>
                    <td>omar</td>
                    {/* <td><a href={solution.solutionFileUrl} target="_blank" rel="noopener noreferrer">View Solution</a></td> */}
                    <td></td>
                    <td>
                        <input
                        type="number"
                        value="100"
                        />
                    </td>
                </tr>
            </tbody>
        </table>

        </div>
    </div>
  );
}

export default ViewSolutions