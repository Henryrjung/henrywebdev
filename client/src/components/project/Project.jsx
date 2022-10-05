import React from 'react'
import './Project.scss'

export default function Project({project}) {
  return (
    <div className='projectCard'>
        <div className="cardTop">
           <img src={project.Img} alt="" /> 
        </div>
        <div className="cardBottom">
           <h1 className='projectTitle'>{project.Name}</h1>  
        </div>
       
    </div>
  )
}
