import React from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='nav'>
        <div className="title">
            <Link className='name' to='/'>Henry Jung</Link>
        </div>
        <ul className='links'>
            <Link className='link' to='/portfolio'>Portfolio</Link>
            <Link className='link' to='/contact'>Contact</Link>
        </ul>
    </div>
  )
}
