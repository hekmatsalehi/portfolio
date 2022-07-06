import React from 'react'
import './Navbar.scss'
import { GitHub } from '@material-ui/icons'
import { SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';


export default function Navbar({ showNavMenu, setShowNavMenu }) {
  return (
    <div className={showNavMenu ? 'nav-bar active' : 'nav-bar'}>
        <div className='nav-container'>
            <div className='nav-left'>
                <a href="#about-me" className='my-name'>Hekmatullah Salehi</a>
            </div>
            <div className='nav-center'>
            <div className='nav-icon-container'>
                  <a href='https://github.com/hekmatsalehi' target="_blank"><GitHub className='nav-icon'/></a>
                </div>
                <div className='nav-icon-container'>
                  <a href='https://www.linkedin.com/in/hekmatullah-salehi' target="_blank"><FaLinkedin className='nav-icon' id='linkedin-icon'/></a>
                </div>
                <div className='nav-icon-container'>
                  <a href="mailto:hekmatullahsalehi01@gmail.com"><SiGmail className='nav-icon' id='email-icon'/></a>
                </div>

            </div>
            <div className='nav-right'>
              <div className='nav-hamburger' onClick={() => setShowNavMenu(!showNavMenu)}>
                <span className='ham-line1'></span>
                <span className='ham-line2'></span>
                <span className='ham-line3'></span>
              </div> 

            </div>

        </div>
    
    </div>
  )
}
