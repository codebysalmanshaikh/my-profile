import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Education from './component/Education'
import Extracurriculars from './component/Extracurriculars'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Education/>
    <Extracurriculars/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App
