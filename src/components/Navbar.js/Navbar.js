import React from 'react'
import './Navbar.scss'
import {GitHub, LinkedIn, Email} from '@material-ui/icons'

export default function Navbar({ showNavMenu, setShowNavMenu }) {
  return (
    <div className={showNavMenu ? 'nav-bar active' : 'nav-bar'}>
        <div className='nav-container'>
            <div className='nav-left'>
                <a href="#about-me" className='my-name'>Hekmatullah Salehi</a>
                <div className='nav-icon-container'>
                  <GitHub className='nav-icon'/>
                </div>
                <div className='nav-icon-container'>
                  <LinkedIn className='nav-icon' id='linkedin-icon'/>
                </div>
                <div className='nav-icon-container'>
                  <Email className='nav-icon' id='email-icon'/>
                  <span>hekmatullahsalehi@gmail.com</span>
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
