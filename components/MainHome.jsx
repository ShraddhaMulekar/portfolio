// import React from 'react'
// // import Home from '../pages/Home.jsx'
// // import About from '../pages/About.jsx'
// // import SkillAbilities from '../pages/SkillAbilities.jsx'
// // import Tools from '../pages/Tools.jsx'
// // import Projects from '../pages/Projects.jsx'
// // import Contact from '../pages/Contact.jsx'
// import { Route, Router, Routes } from 'react-router-dom'

// const MainHome = () => {
//   return (
//     // <div>
//     //   <Routes>
//     //     <Route path='/home' element={<Home />} />
//     //     <Route path='/about' element={<About />} />
//     //     <Route path='/skill' element={<SkillAbilities />} />
//     //     <Route path='/tool' element={<Tools />} />
//     //     <Route path='/project' element={<Projects />} />
//     //     <Route path='/contact' element={<Contact />} />
//     //   </Routes>
//     // </div>
//   )
// }

// export default MainHome

import React from "react";
import About from "../pages/About.jsx";
import SkillAbilities from "../pages/SkillAbilities.jsx";
import Tools from "../pages/Tools.jsx";
import Projects from "../pages/Projects.jsx";
import Contact from "../pages/Contact.jsx";
// import './Home.css'
import Home from "../pages/Home.jsx";

const MainHome = () => {
  return (
    <div className="home-container" style={{marginTop:"120px"}}>
      <section id="home">
        <Home style={{paddingtop: "200px"}} />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skill">
        <SkillAbilities />
      </section>
      <section id="tool">
        <Tools />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default MainHome;
