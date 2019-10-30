import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const StudentsList = props => {
  
  return (
    <ul>
      {props.students.map((elem, idx) => {
        return (
          <Link
            key={idx}
            to={`/project/${props.project}/RecordBook/${props.date}/${elem._id}`}
          >
            <li>{elem.student.name}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default StudentsList;
