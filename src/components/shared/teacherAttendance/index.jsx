import "./style.css"

const StudentAttendance = ({info}) => {
    return (
        <label className="student-attendance" htmlFor="student1">
            <div className="name">{info.name}</div>
            <input type="checkbox" id="{info.id}"/>
        </label>
    );
}

export default StudentAttendance