import React from 'react';
import BackgroundGrid from './components/BackgroundGrid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Education from './components/Education';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#070709] text-[#F5F5F5] selection:bg-blue-600/30 selection:text-blue-200 overflow-x-hidden font-sans">
      {/* Dynamic Background Grid & Ambient Lighting */}
      <BackgroundGrid />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Education />
        <CompetitiveProgramming />
        <Contact />
      </main>

      {/* Finishing Footer */}
      <Footer />
    </div>
  );
}
