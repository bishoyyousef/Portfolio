import React from 'react';
import { useTypedSelector } from "@/Types/Hooks";
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const isDarkMode = useTypedSelector(state => state.Dark);

  return (
    <footer className={`bg-slate-200 ${isDarkMode ? 'dark:bg-slate-800' : ''} text-center py-6`}>
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <p className={`text-sm text-slate-600 ${isDarkMode ? 'dark:text-slate-400' : ''}`}>
          &copy; {new Date().getFullYear()} bishoy yousef.
        </p>
        <div className="flex gap-6">
          <Link
            href="https://www.linkedin.com/in/bishoy-yousef-aa9341277/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-slate-600 ${isDarkMode ? 'dark:text-slate-300' : ''} hover:text-blue-500 dark:hover:text-blue-400 transition-colors`}
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://github.com/bishoyyousef?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-slate-600 ${isDarkMode ? 'dark:text-slate-300' : ''} hover:text-gray-900 dark:hover:text-gray-100 transition-colors`}
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;