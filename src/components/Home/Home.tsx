"use client";
import React from 'react';

const Home: React.FC = () => {
  const keySkills = [
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML5 / CSS3",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  return (
    <section
      id="hero"
      className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 py-16 relative"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Name Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 dark:from-indigo-400 dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent">
          Bishoy yousef
        </h1>

        {/* Subtitle Positioning */}
        <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-6">
          <hr className="w-8 sm:w-12 border-t-2 border-indigo-500/50 dark:border-indigo-400/50" />
          <p className="text-lg sm:text-2xl font-semibold tracking-wide text-slate-800 dark:text-slate-100">
            Full-Stack Developer — <span className="text-indigo-600 dark:text-indigo-400">Frontend Focused</span>
          </p>
          <hr className="w-8 sm:w-12 border-t-2 border-indigo-500/50 dark:border-indigo-400/50" />
        </div>

        {/* Concise Verified Summary */}
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-8 leading-relaxed text-slate-600 dark:text-slate-300">
          Passionate web developer specializing in building modern, responsive, and user-centric frontend applications with strong JavaScript frameworks and server-side APIs.
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10 max-w-3xl">
          {keySkills.map((skill, index) => (
            <span
              key={index}
              className="text-xs sm:text-sm px-3.5 py-1.5 rounded-full font-medium transition-colors duration-200 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a
            href="#portfolio"
            className="px-8 py-3.5 rounded-full font-semibold text-white shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-indigo-500/30 text-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
          >
            View My Work &rarr;
          </a>

          <a
            href="https://drive.google.com/file/d/1yZ7utbtv8LdrrLI3VDg6LnIGSLSLewDk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 text-center bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 shadow-sm"
          >
            See My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;