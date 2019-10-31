import React from "react";
import { Link } from "react-router-dom";

const StudentsList = props => {
  
  return (
    <ul>
      {props.students.map((elem, idx) => {
        return (
          <Link
          className='components-studentsList'
            key={idx}
            to={`/project/${props.project}/RecordBook/${props.date}/${elem._id}`}
          >
            <span>
            <li className='components-studentsList-students'>{elem.student.name}{elem.tags.length === 0 ? null : ' ✔️'}</li>
            </span>
          </Link>
        );
      })}
    </ul>
  );
};

export default StudentsList;
