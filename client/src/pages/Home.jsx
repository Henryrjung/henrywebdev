import React from 'react'
import './Home.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Home() {
  return (
    <div className='home'>
        <div className="top">
            <div className="left">
                <div className="phone">
                    <div className="screen">
                        <div className="notch"></div>
                        <div className="profilePic">
                          <img src='assets/profilepic.png' alt='profile'></img>  
                        </div>
                        <div className="box">
                         <a href="https://github.com/Henryrjung"><GitHubIcon className='icon' /></a>
                         <a href="https://github.com/Henryrjung"><TwitterIcon className='icon' /></a>
                         <a href="https://github.com/Henryrjung"><LinkedInIcon className='icon' /></a>
                        </div>
                      
                    </div>
                </div>  
            </div>
            <div className="right">
               <div className="about">
                    <h1>Hi, I'm Henry...</h1>
                    <h2>Front End Web Developer</h2>
                    <h3>Experienced in building web applications with JavaScript, React, Node.js, and CSS. </h3>
                </div> 
            </div>
        </div>
        {/* <div className="divider">

        </div> */}
        <div className="bottom">
          <div className="bottomContainer">
            <div className="actionDots">
              <div className='dotClose'></div> 
              <div className='dotMin'></div>
              <div className='dotExp'></div>
              <div className="searchBox">
                <h3>https://henrywebdev.com/about</h3>
              </div>
            </div>
            <div className="textSection">
              <h1>About Me</h1>
              <h2>I'm a front end web developer certified by KU University, with 2+ years of experience. I build clean and responsive web applications.</h2>
              <h2>Please reach out to me using my contact form. I'm available weekdays from 9-5pm. You can also send me a DM on my twitter, and LinkedIn and I will respond as soon as I can.</h2>
            </div>
            
          </div>
        </div>
    </div>
  )
}
