import React from 'react'
import Experience from './fields/Experience'
import About from './fields/About'
import Projects from './fields/Projects'
import Contact from './fields/Contact'
import Education from './fields/Education'
import LinkToResume from './fields/LinkToResume'


const RightConstant = () => {
  return (
    <div>
        <About/>
        <Education/>
        <Experience/>
        <Projects/>
        <LinkToResume/>
        <Contact/>
    </div>
  )
}

export default RightConstant