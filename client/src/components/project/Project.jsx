import React from 'react'
import './Project.scss'

export default function Project({project}) {
  return (
    <div className='projectCard'>
        <div className="cardTop">
           <img  alt="" /> 
        </div>
        <div className="cardBottom">
           <h1 className='projectTitle'>title</h1>  
        </div>
    </div>
  )
}
