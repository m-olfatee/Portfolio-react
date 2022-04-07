import React from 'react';
import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (


    <main>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <a href="#nav" className="reload">Back to Top!</a>
      <Footer />
    </main>

  );
}

export default App;

