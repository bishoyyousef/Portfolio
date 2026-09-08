"use client";
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-4 transition-colors duration-300 border-t bg-slate-100 dark:bg-[#090d16] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs sm:text-sm font-medium">
          &copy; {new Date().getFullYear()} Bishoy Yousef. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;