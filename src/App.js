import React from 'react';
import './style.css';

import { Particles } from '@blackbox-vision/react-particles';
// import { ChakraProvider } from '@chakra-ui/react'
import Header from './Header.js';
import Main from './Main.js';
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Particles from './Particles.js';
export default function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <Particles/> */}
    </>
  );
}
