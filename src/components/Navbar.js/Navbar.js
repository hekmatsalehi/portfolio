import React from 'react'
import './Navbar.scss'

export default function Navbar() {
  return (
    <div className='nav-bar'>
        <div className='nav-container'>
            <div className='nav-left'>
                <a href="#about-me">About Me</a>
                Left Side
            </div>
            <div className='nav-right'>
                Right Side
            </div>

        </div>
    
    </div>
  )
}
