import React, { useEffect, useRef } from 'react';
import { init } from 'ityped'
import {KeyboardArrowDown} from '@material-ui/icons'
import './About.scss'

export default function About() {
  const roleRef = useRef()

  useEffect(() => {

    init(roleRef.current, 
      { 
        showCursor: false, 
        strings: ['Full Stack Developer' ] 
      })

  }, [])

  return (  
    <div className='about-me' id='about-me'>
      <div className='left-side'>
        <div className='photo-container'>
          <img src='assets/myPicture.png'></img>
        </div>
      </div>

      <div className='right-side'>
        <div className='right-side-wrapper'>
          <h2>Hi, I am</h2>
          <h1>Hekmatullah Salehi</h1>
          <h3>Aspiring <span ref={roleRef}></span></h3>
        </div>
        <a href="#projects">
          <KeyboardArrowDown className='arrow-down-icon'/>
        </a>
      </div>
    </div>
  )
}
