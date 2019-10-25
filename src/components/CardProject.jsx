import React, { Fragment } from 'react';

const CardProject = (props) => {
  return (
    <Fragment>
    {props.projects.map((elem, idx) => {
        return <div> 
          <img src={elem.image} alt={elem.name}/>
          <div>
            <h5>{elem.name}</h5>
            <p>{elem.teachers.name}</p>
            <p>{elem.students.class} {elem.students.subClass}</p>
          </div>
          </div>
      })}
    </Fragment>
  )
}

export default CardProject;