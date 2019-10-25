import React from 'react';


const CardProject = (props) => {
  return (
    <div className='components-cardproject-container'>
    {props.projects.map((elem, idx) => {
        return <div className='components-cardProject-card'> 
          <a><img className='components-cardProject-img' src={elem.image} alt={elem.name}/></a>
          <div>
            <h5 className='components-cardProject-title'>{elem.name}</h5>
            <p>teacher name</p>
            <p>turma e classe</p>
            {/* <p>{elem.teachers.name}</p>
            <p>{elem.students.class} {elem.students.subClass}</p> */}
          </div>
          </div>
      })}
    </div>
  )
}

export default CardProject;