import React, { useState, useEffect } from 'react';
import "./style.css";
import { sendRequest } from '../../../../config/request';
import InfoRectangle from '../../../Admin/InfoRectangle';
import { PieChart, Pie, Tooltip } from 'recharts';

const AdminLayout = () => {
  const [data, setData] = useState([]);
  const [subdata, setSubdata] = useState([]); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await sendRequest({ method: 'GET', route: "/admin/dashboard/analytics", body: "" });
      setData(response.data);
      console.log(response);
      
      const Subdata = [
        { name: "Math", value: response.data.mathCourses },
        { name: "Science", value: response.data.scienceCourses },
        { name: "Chemistry", value: response.data.chemistryCourses },
        { name: "English", value: response.data.englishCourses }
      ];
      setSubdata(Subdata);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    {/* <table className="Table">
    <thead>
      <tr>
        <th className="TableHeader">ID</th>
        <th className="TableHeader">Name</th>
        <th className="TableHeader">Email</th>
        <th className="TableHeader">Parent</th>
        <th className="TableHeader">Created At</th>
        <th className="TableHeader">Actions</th>
      </tr>
    </thead>
    <tr  className="TableRow">
        <td className="TableCell"></td>
        <td className="TableCell"></td>
        <td className="TableCell"></td>
        <td className="TableCell"></td>
        <td className="TableCell"></td>              
        <td className="ActionsCell">
         <button onClick={() => handleOpenModal(user)}>Update</button>
         <button onClick={() => onDelete(user.id)}>Delete</button>
        </td>
        </tr>
      </table> */}
    <div className="admin-page">

      <InfoRectangle label="Teachers" info={data.teachersNum} />
      <InfoRectangle label="Students" info={data.studentsNum} />
      <InfoRectangle label="Courses" info={data.courseCount} />
      <div className='pie'> 
        <h2>Course Categories:</h2>
        <div>
          <PieChart width={500} height={500}>
            <Pie dataKey="value" isAnimationActive={false} data={subdata} cx="50%" cy="50%" outerRadius={80} fill="#007bff" label />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminLayout;
