"use client";
import React, { useEffect } from 'react';
import { useTypedSelector } from "@/Types/Hooks";
import Navbar from '@/components/NavBar/NavBar';
import Home from '@/components/Home/Home';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Portfolio from '@/components/Portfolio/Portfolio';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer';

const App: React.FC = () => {
  const isDarkMode = useTypedSelector((state) => state.Dark);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${
        isDarkMode ? 'bg-portfolio-dark' : 'bg-portfolio-light'
      }`}
    >
      <Navbar />
      <main className="w-full">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;