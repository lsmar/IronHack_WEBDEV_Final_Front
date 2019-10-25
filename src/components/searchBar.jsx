  
import React from 'react';

const SearchBar = ({ name, value, method, placeholder}) =>{
    return (
        <input className='components-searchBar' type="text" name={name} placeholder={placeholder} value={value} onChange={method}/>
    );
  }
export default SearchBar;