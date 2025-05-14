import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/AboutUs/About'
import Services from './components/Services/Services'
import Blogs from './components/Blog/Blogs'
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Blogs/>
    </>
  )
}

export default App