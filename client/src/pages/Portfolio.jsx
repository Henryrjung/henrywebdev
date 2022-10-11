import React, { useState, useEffect } from 'react'
import './Portfolio.scss'
import Project from '../components/project/Project'


export default function Portfolio() {
  // const [user, setUser] = useState({});
  const [projects, setProjects] = useState({});
  const [isLoaded, setIsLoaded] = useState(false)

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
      setIsLoaded(true)
    }))
    .catch((error) => {
      console.log(error)
      setIsLoaded(false)
    })
  }
  if(isLoaded) {
   return (
    <div className='portfolio'>
      <div className="projects">
      <Project project={projects[17]} img="assets/ffcollect.png"/>
      <Project project={projects[17]} img="assets/stonkerlogin.png"/>
      <Project project={projects[28]} img="assets/Search_Screen.png"/>
      <Project project={projects[2]} img="assets/passwordgenerator.png"/>
      </div>
      {/* ffcollect */}
     
    </div>
  ) 
  }
  return(
    <h1>not loaded</h1>
  )
  
}
