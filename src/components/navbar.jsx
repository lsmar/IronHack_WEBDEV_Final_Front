import React from 'react';

// SUBSTITUIR <a> POR <Link>
// ADICIONAR IMAGENS DENTRO DOS <Link>

const navBar = ({role}) => {
  return(
    <nav>
      <ul>
        {
          role === 'COORDINATOR' ?
          <li><a href="https://google.com.br">COORDENATOR</a></li> :
          <li> <a href="https://google.com.br">PROFESSOR</a></li>
        }
        <li> <a href="https://google.com.br">1</a></li>
        <li> <a href="https://google.com.br">2</a></li>
        <li> <a href="https://google.com.br">3</a></li>
      </ul>
    </nav>
  );
}

export default navBar;