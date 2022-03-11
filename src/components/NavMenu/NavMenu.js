import React from 'react'
import './NavMenu.scss'


export default function NavMenu({ showNavMenu, setShowNavMenu }) {
  return (
    <div className={showNavMenu ? 'nav-menu active' : 'nav-menu'}>
        <ul onClick={() => setShowNavMenu(!showNavMenu)}>
            <li>
                <a href='#about-me'>About Me</a>
            </li>
            <li>
                <a href='#projects'>Projects</a>
            </li>
            <li>
                <a href='#contact-me'>Contact</a>
            </li>
            <li>
                <a href='#resume'>Resume</a>
            </li>
        </ul>

    </div>
  )
}
