import React from 'react'
import "./style.css"

const StudentClasses = () => {
  return (
    <div>
      <div className="nav">
        <div className="upper-nav">
          <div className="nav-left">logo</div>
          <div className="nav-middle"></div>
          <div className="nav-right">
            <div className="nav-links">Extra</div>
            <div className="nav-links">Enrollments</div>
            <div className="nav-links">Logout</div>
          </div>
        </div>
        <div className='heroo'>Welcome Student</div>
      </div>
    </div>
  )
}

export default StudentClasses