import React, { useState, useEffect } from 'react';
import "./style.css";
import { sendRequest } from '../../../../config/request';
import InfoRectangle from '../../../Admin/InfoRectangle';
import { PieChart, Pie, Tooltip } from 'recharts';
import LinesChart from '../../../Admin/LinesChart';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLegend } from 'victory';

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

  const calculateCumulativeSum = (data) => {
    let cumulativeSum = 0;
    return data.map(item => {
      cumulativeSum += item.count;
      return { date: item.date, count: cumulativeSum };
    });
  };

  const generateCombinedData = () => {
    const teachersCumulative = calculateCumulativeSum(data.teachersByDate);
    const studentsCumulative = calculateCumulativeSum(data.studentsByDate);
    const parentsCumulative = calculateCumulativeSum(data.parentsByDate);

    return teachersCumulative.map((item, index) => ({
      date: item.date,
      teachers: item.count,
      students: studentsCumulative[index]?.count || 0,
      parents: parentsCumulative[index]?.count || 0,
    }));
  };

  return (
    <>
      <div className="admin-page">
        <InfoRectangle label="Teachers" info={data.teachersNum} />
        <InfoRectangle label="Students" info={data.studentsNum} />
        <InfoRectangle label="Courses" info={data.courseCount} />
        <div className='pie'> 
          <h2>Course Categories:</h2>
          <div>
            <PieChart width={500} height={400}>
              <Pie dataKey="value" isAnimationActive={false} data={subdata} cx="50%" cy="50%" outerRadius={80} fill="#007bff" label />
              <Tooltip />
            </PieChart>
          </div>
        </div>
        <div className="chart-container">
          {data.teachersByDate && data.studentsByDate && data.parentsByDate && (
            <LinesChart 
              data={generateCombinedData()}
              dataKeys={['teachers', 'students', 'parents']}
              colors={['blue', 'red', 'orange']}
              strokeWidth={40}
              axisColor="#333" 
              labelColor="#555" 
            />
          )}
        </div>   
      </div>
    </>
  );
};

export default AdminLayout;
