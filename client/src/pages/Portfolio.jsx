import React, { useState, useEffect } from 'react'
import './Portfolio.scss'
import Project from '../components/project/Project'
import Spinner from '../components/spinner/Spinner'


export default function Portfolio() {
  const [projects, setProjects] = useState({});
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getProjects();
  }, [])

  const getProjects = async () => {
    const allProjects = await fetch("https://henrywebdevapp.herokuapp.com/testUser", {
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
      <div className="portfolioTitle">
        <h1>Projects</h1>
      </div>
      <div className="projects">
        {/* ffcollect */}
      <Project project={projects[17]} img="assets/ffcollect.png"/>
      {/* stonker */}
      <Project project={projects[17]} img="assets/stonkerlogin.png"/>
      {/* serialsearch */}
      <Project project={projects[28]} img="assets/Search_Screen.png"/>
      {/* password generator */}
      <Project project={projects[2]} img="assets/passwordgenerator.png"/>
      </div>
    </div>
  ) 
  }
  return(
    <div className='notLoadedDiv'>
      {/* <Spinner /> */}
    </div>
  )
  
}
