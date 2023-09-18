import './App.css';
import './App phone.css';
import React from 'react';
import SideNav from './Navigation/navigation';
import HomePage from './Navigation/Home';
import About from './Navigation/About';
import Experience from './Navigation/Experience';
import Education from './Navigation/Education';
import Projects from './Navigation/Projects';
import Skills from './Navigation/Skills';
import Contact from './Navigation/Contact';

function App() {
  return (
    <div>
      <SideNav/>
      <section id="Home"><HomePage/></section>

      <section id="About"><About/></section>

      <section id="Experience"><Experience/></section>

      <section id="Education"><Education/></section>


      <section id="Projects"><Projects/></section>
      <br></br><br></br>
      <section id="Skills">
        <Skills/>
      </section>

      <section id="Contact">
        <Contact/>
      </section>

      


    </div>
  );
}
// https://relatablecode.com/how-to-make-a-navbar-with-react-scroll for tmr
export default App;
