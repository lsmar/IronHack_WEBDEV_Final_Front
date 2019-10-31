import React from 'react'

const IconsTags = (props) => {
    const { active, method, tag, image_src, text } = props

    return (
      <button onClick={(e)=>method(e,tag)} className="component-iconTag">
          <img src={image_src} className={active} alt={text}/>
          <p className='component-iconTag-text'>{text}</p>
      </button>
    )
}

export default IconsTags