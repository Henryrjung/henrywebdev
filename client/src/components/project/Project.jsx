import React from 'react'
import './Project.scss'

export default function Project({ project, img }) {
  return (
    <div className='projectCard'>
      <a target="_blank" href={project.html_url}>
        <div className="cardTop">
           <img src={img} alt="" /> 
        </div>
        <div className="cardBottom">
           <h1 className='projectTitle'>{project.name}</h1>  
        </div>
      </a>
    </div>
  )
}
