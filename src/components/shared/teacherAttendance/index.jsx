import "./style.css"

const StudentAttendance = ({info, updateAttendance}) => {
    return (
        <label className="student-attendance" htmlFor="student1">
            <div className="name">{info.name}</div>
            <input type="checkbox"  id="{info.id}" onClick={(e)=>updateAttendance(info.id , e.target.checked)}/>
        </label>
    );
}

export default StudentAttendance