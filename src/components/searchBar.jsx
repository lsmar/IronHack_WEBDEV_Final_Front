  
import React from 'react';

const SearchBar = ({ name, value, method, placeholder}) =>{
    return (
        <div className='components-searchBar-DF'>
          <input className='components-searchBar' type="text" name={name} placeholder={placeholder} value={value} onChange={method}/>
        </div>
    );
  }
export default SearchBar;