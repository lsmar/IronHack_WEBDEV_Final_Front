import React from "react";

//TODO: fazer os formularios para alterar a data selecionada atraves do state

const inputDate = ({ name, type, method }) => {

  return ( <input
        type='date'
        name={name}
        value= {new Date()}
        onChange={method}
        id="calendar" 
  /> 
  );
};

export default inputDate;