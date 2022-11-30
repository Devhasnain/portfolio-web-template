import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from "./components/About";
import Services from './components/Services';
import Projects from './components/Projects';
import Pricings from './components/Pricings';
import HireMe from './Parts/HireMe';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Projects/>
    <Pricings/>
    <HireMe/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
