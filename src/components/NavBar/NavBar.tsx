"use client";
import { useState } from "react";
import { useTypedSelector, useTypedDispatch } from "@/Types/Hooks";
import { Toggle } from "@/StateStore/Reducers/DarkState";
import Link from "next/link";

export default function Navbar() {
  const dispatch = useTypedDispatch();
  const isDarkMode = useTypedSelector((state) => state.Dark);
  const handleThemeToggle = () => dispatch(Toggle());

  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((v) => !v);

  return (
    <header
      className={`sticky top-0 z-50 bg-slate-50/90 ${isDarkMode ? "dark:bg-slate-900/90" : ""} backdrop-blur-sm shadow-sm py-4 transition-colors duration-500`}
    >
      {/* center container with max width */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-12">
          {/* brand */}
          <div className="flex items-center">
            <Link
              href="#"
              className="text-xl font-bold rounded-lg transition-colors duration-300 hover:text-indigo-600"
            >
              bishoy yousef
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="transition-colors duration-300 hover:text-indigo-600">
              Home
            </Link>
            <Link href="#about" className="transition-colors duration-300 hover:text-indigo-600">
              About
            </Link>
            <Link href="#portfolio" className="transition-colors duration-300 hover:text-indigo-600">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors duration-300 hover:text-indigo-600">
              Contact
            </Link>

            <Link
              href="https://drive.google.com/file/d/1yZ7utbtv8LdrrLI3VDg6LnIGSLSLewDk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 ${
                isDarkMode ? "bg-indigo-600 text-slate-50 hover:bg-indigo-700" : "bg-indigo-500 text-white hover:bg-indigo-600"
              }`}
              aria-label="View my CV"
            >
              See My CV
            </Link>

            <button
              id="theme-toggle"
              onClick={handleThemeToggle}
              className={`p-2 cursor-pointer rounded-full hover:bg-slate-200 ${isDarkMode ? "dark:hover:bg-slate-700" : ""} transition-colors duration-300 focus:outline-none`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a5 5 0 1110 0 5 5 0 01-10 0z"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l3 3a1 1 0 010 1.414zM10 18a8 8 0 100-16 8 8 0 000 16zM10 4a6 6 0 00-6 6c0 3.314 2.686 6 6 6s6-2.686 6-6c0-3.314-2.686-6-6-6zM3.207 7.707a1 1 0 011.414-1.414l3 3a1 1 0 01-1.414 1.414l-3-3z"></path>
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={handleThemeToggle}
              className={`p-2 cursor-pointer rounded-full hover:bg-slate-200 ${isDarkMode ? "dark:hover:bg-slate-700" : ""} transition-colors duration-300 focus:outline-none`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a5 5 0 1110 0 5 5 0 01-10 0z"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l3 3a1 1 0 010 1.414zM10 18a8 8 0 100-16 8 8 0 000 16zM10 4a6 6 0 00-6 6c0 3.314 2.686 6 6 6s6-2.686 6-6c0-3.314-2.686-6-6-6zM3.207 7.707a1 1 0 011.414-1.414l3 3a1 1 0 01-1.414 1.414l-3-3z"></path>
                </svg>
              )}
            </button>

            <button
              onClick={toggleMobile}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-200 transition-colors duration-200 focus:outline-none"
            >
              {/* hamburger / close icons */}
              {mobileOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-slate-50/95 ${isDarkMode ? "dark:bg-slate-900/95" : ""} transition-max-height duration-300 overflow-hidden`}
        style={{
          // simple slide down using max-height; adjust maxHeight for number of items
          maxHeight: mobileOpen ? "320px" : "0px",
        }}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">
          <Link href="#" onClick={() => setMobileOpen(false)} className="block w-full py-2 rounded-md transition-colors duration-200 hover:bg-slate-100">
            Home
          </Link>
          <Link href="#about" onClick={() => setMobileOpen(false)} className="block w-full py-2 rounded-md transition-colors duration-200 hover:bg-slate-100">
            About
          </Link>
          <Link href="#portfolio" onClick={() => setMobileOpen(false)} className="block w-full py-2 rounded-md transition-colors duration-200 hover:bg-slate-100">
            Projects
          </Link>
          <Link href="#contact" onClick={() => setMobileOpen(false)} className="block w-full py-2 rounded-md transition-colors duration-200 hover:bg-slate-100">
            Contact
          </Link>

          <Link
            href="https://www.canva.com/design/DAGu70dkeLA/MfYq4J1R2BRU1M4XsxErcQ/edit?utm_content=DAGu70dkeLA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className={`block text-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              isDarkMode ? "bg-indigo-600 text-slate-50 hover:bg-indigo-700" : "bg-indigo-500 text-white hover:bg-indigo-600"
            }`}
          >
            See My CV
          </Link>
        </div>
      </div>
    </header>
  );
}
