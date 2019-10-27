import React from "react";
 
 
 const Select = ({ name, options, handleChange }) => {
   return (
      <div>
        <select  className='components-input' 
          name={name} 
          value={name}
          onChange={e => handleChange(e)}
        >
          <option key={name} value={name}>{name}</option>
          {options.map((option, idx)=> <option key={idx} value={option}>{option}</option>)}
          </select>
          </div>
  )
 }

export default Select;