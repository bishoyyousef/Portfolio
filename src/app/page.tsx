"use client";
import React from 'react';
import { useTypedSelector } from "@/Types/Hooks";
import About from '@/components/About/About';
import Portfolio from '@/components/Portfolio/Portfolio';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer';
import Home from '@/components/Home/Home';
import Navbar from '@/components/NavBar/NavBar';

const App = () => {
  const isDarkMode = useTypedSelector(state => state.Dark);

  return (
    <div className={`font-sans bg-slate-50 text-slate-800 ${isDarkMode ? 'bg-slate-900 dark:text-slate-50' : ''} transition-colors duration-500`}>
      <Navbar />
      <main className="container mx-auto">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;