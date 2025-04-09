import React from 'react';
import MainHome from '../components/MainHome.jsx'
import Footer from '../pages/Footer.jsx'
import Navbar from '../pages/Navbar.jsx'
// import Home from '../pages/Home.jsx'
// import About from '../pages/About.jsx'
// import SkillAbilities from '../pages/SkillAbilities.jsx'
// import Tools from '../pages/Tools.jsx'
// import Projects from '../pages/Projects.jsx'
// import Contact from '../pages/Contact.jsx'
import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

function App() {

  return (
    <Router>
      <Navbar className="navbar" />
      <Routes>
        <Route path='/' element={<MainHome />} />
        {/* <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skill' element={<SkillAbilities />} />
        <Route path='/tool' element={<Tools />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/contact' element={<Contact />} /> */}
      </Routes>      
      <Footer />
    </Router>
    // <div>
    //   <Navbar />
    //   <MainHome />
    //   <Footer />
    // </div>
  )
}

export default App
