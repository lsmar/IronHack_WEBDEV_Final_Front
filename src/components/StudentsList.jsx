import React from 'react';
// import { NavLink } from 'react-router-dom';

const StudentsList = (props) => {
  return (
    <ul>
      {props.students.map((elem, idx) => {
         return <li key={idx}>{elem.name}</li>
        // return <li><NavLink key={idx} to={`/${elem.id}`}> {elem.name}</NavLink></li>
      })}
    </ul>
  )
}

export default StudentsList;