import React from 'react';
import AOS from 'aos';
import {Link} from 'react-router-dom'
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({offset:80});

const CardProject = (props) => {
  return (
    <div className='components-cardproject-container'>
    {props.projects.map((elem, idx) => {
        return  <div key={idx} data-aos='fade-right' className='components-cardProject-card'> 
          <Link  to={`/project/${elem._id}`}>
          <img className='components-cardProject-img' src={elem.image} alt={elem.name}/>
          </Link>
          <div className='components-cardProject-text'>
            <div className="components-cardProject-title-edit-delete">
            <h5 className='components-cardProject-title'>{elem.name}</h5>
              <Link to={`/project/edit/${elem._id}`}><img className='components-cardProject-icon'src="/images/Icons/edit-icon.png" alt="edit"/></Link>
              {props.role === 'COORDINATOR' ? <Link to={`/project/delete/${elem._id}`}><img className='components-cardProject-icon'src="/images/Icons/delete-icon.png" alt="delete"/></Link> : null} 
            </div>
            <Link to={`/project/${elem._id}`}>
            <p className='components-cardProject-p'>Professores: {elem.teachers.map((e,idx) =><span className='page-projectDetail-text-value-class-card' key={idx} > {e.name} </span>)}</p>
            </Link>
            <Link  to={`/project/${elem._id}`}>
            <p className='components-cardProject-p'>Turma: {elem.students[0].grade} {elem.students[0].classRoom}</p>
            </Link>
          </div>
          </div>
        
      })}
    </div>
  )
}

export default CardProject;