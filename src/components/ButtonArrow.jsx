import React from 'react';
//* O mesmo componente deve ser usado para as setas dos dois lado. 
//* Como a seta da imagem está virada para a direita, ela nao precisa receber uma classe
//* Para ela virar para a esquerda, basta aplicar a classe 'arrow-left' que está no css

const ArrowButton = ({ method , classStyle }) => {
  return (
    <button onClick={method} className="button-vertical"><img src="/images/arrow.png" className={classStyle} /> </button>
  );
}

export default ArrowButton;