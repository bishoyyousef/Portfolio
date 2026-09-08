"use client";
import { useState } from "react";
import { useTypedSelector, useTypedDispatch } from "@/Types/Hooks";
import { Toggle } from "@/StateStore/Reducers/DarkState";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const dispatch = useTypedDispatch();
  const isDarkMode = useTypedSelector((state) => state.Dark);
  const handleThemeToggle = () => dispatch(Toggle());

  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((v) => !v);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isDarkMode
          ? "bg-[#090d16]/90 text-slate-100 border-b border-slate-800/80"
          : "bg-white/90 text-slate-800 border-b border-slate-200/80"
      } backdrop-blur-md shadow-sm`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-xl font-bold tracking-tight transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Bishoy Yousef
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a
              href="#"
              className="transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Home
            </a>
            <a
              href="#about"
              className="transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              About
            </a>
            <a
              href="#skills"
              className="transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className="transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Contact
            </a>

            <div className="h-4 w-px bg-slate-300 dark:bg-slate-700 mx-1"></div>

            {/* See My CV Button */}
            <a
              href="https://drive.google.com/file/d/1yZ7utbtv8LdrrLI3VDg6LnIGSLSLewDk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-indigo-500/25 active:scale-95"
              aria-label="View my CV"
            >
              See My CV
            </a>

            {/* Theme Toggle Button (Sun / Moon) */}
            <button
              id="theme-toggle"
              onClick={handleThemeToggle}
              className={`p-2.5 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none ${
                isDarkMode
                  ? "bg-slate-800 text-amber-400 hover:bg-slate-700 hover:text-amber-300 shadow-md"
                  : "bg-indigo-50 text-amber-500 hover:bg-indigo-100 hover:text-amber-600 shadow-sm"
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <FaMoon className="w-5 h-5 transition-transform duration-300 transform -rotate-12 hover:rotate-0" />
              ) : (
                <FaSun className="w-5 h-5 transition-transform duration-300 transform rotate-0 hover:rotate-45" />
              )}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={handleThemeToggle}
              className={`p-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                isDarkMode
                  ? "bg-slate-800 text-amber-400"
                  : "bg-indigo-50 text-amber-500"
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <FaMoon className="w-5 h-5" />
              ) : (
                <FaSun className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={toggleMobile}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-200 focus:outline-none"
            >
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

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isDarkMode ? "bg-[#090d16] border-b border-slate-800" : "bg-white border-b border-slate-200"
        }`}
        style={{
          maxHeight: mobileOpen ? "320px" : "0px",
        }}
      >
        <div className="px-4 pt-3 pb-5 space-y-3 font-medium text-sm">
          <a
            href="#"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2 rounded-md transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2 rounded-md transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2 rounded-md transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Skills
          </a>
          <a
            href="#portfolio"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2 rounded-md transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block px-3 py-2 rounded-md transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Contact
          </a>

          <div className="pt-2 px-3">
            <a
              href="https://drive.google.com/file/d/1yZ7utbtv8LdrrLI3VDg6LnIGSLSLewDk/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-2 rounded-lg font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"
            >
              See My CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
