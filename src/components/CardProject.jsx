import React from 'react';



const CardProject = (props) => {
  return (
    <div className='components-cardproject-container'>
    {props.projects.map((elem, idx) => {
        return <a key={idx}  href="https://google.com">
          <div className='components-cardProject-card'> 
          <img className='components-cardProject-img' src={elem.image} alt={elem.name}/>
          <div className='components-cardProject-text'>
            <h5 className='components-cardProject-title'>{elem.name}</h5>
            <p className='components-cardProject-p'>Professores: Jorel e Ana Catarina</p>
            <p className='components-cardProject-p'>Turma: 3a°</p>
            {/* <p>{elem.teachers.name}</p>
            <p>{elem.students.class} {elem.students.subClass}</p> */}
          </div>
          </div>
          </a>
      })}
    </div>
  )
}

export default CardProject;