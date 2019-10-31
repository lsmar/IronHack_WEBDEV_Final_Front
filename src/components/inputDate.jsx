import React from "react";

//TODO: fazer os formularios para alterar a data selecionada atraves do state

const inputDate = ({ name, type, method, value}) => {

  return ( <input
        className='components-inputData'
        type='date'
        name={name}
        value= {value}
        onChange={method}
        id="calendar" 
  /> 
  );
};

export default inputDate;