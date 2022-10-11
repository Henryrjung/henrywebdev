import React, { useState, useEffect } from 'react'
import './Portfolio.scss'
import Project from '../components/project/Project'


export default function Portfolio() {
  // const [user, setUser] = useState({});
  const [projects, setProjects] = useState({});

  useEffect(() => {
    getProjects();
  }, [])

  const getProjects = async () => {
    const allProjects = await fetch("http://localhost:5000/testUser", {
      method: "GET"
    })
    .then((res) => res.json())
    .then((async (res) => {
      const testData = await res
      console.log(testData)
      setProjects(testData)
    }))
  }
  return (
    <div className='portfolio'>
      <Project project={projects}/>
    </div>
  )
}
