import React from 'react';
import {Link} from 'react-router-dom';

// APAGAR <a> E DESCOMENTAR <Link>

const IconEdit = ({url}) => {
  return(
    // <Link to={url}><img src="/test.png" alt="test"/></Link>
   <a href={url}><img src="/test.png" alt="test"/></a>
  );
}

export default IconEdit;