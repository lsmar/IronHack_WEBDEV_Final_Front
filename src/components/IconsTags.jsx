import React from 'react'

const IconsTags = ({ typeOf, tags, method }) => {
  return (
    typeOf === 'result' ?
      <div>
        {tags.map((elem, idx) => {
          return <div>
            <img src={elem.image} alt={elem.name} />
            <p>`${elem.result} %`</p>
          </div>
        })}
      </div> :
      <div>
        {tags.map((elem, idx) => {
          return <div>
            <img src={elem.image} alt={elem.name} />
            <input type="checkbox" name={elem.name} onChange={method}/>
            <label >{elem.name}</label>
          </div>
        })}
      </div>
  );
}

export default IconsTags;

