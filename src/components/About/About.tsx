import React from 'react';
import { useTypedSelector } from "@/Types/Hooks";
import Link from 'next/link';

const About = () => {
  const isDarkMode = useTypedSelector(state => state.Dark);

  return (
    <section id="about" className={`py-24 px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16 space-y-12 lg:space-y-0">
          {/* Image Section */}
          <div className="lg:w-2/5 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
              
              <img
                src="bishoyyousef2.png"
                alt="bishoy yousef"
                className="relative rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover border-4 border-indigo-600 shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-2 hover:border-indigo-500"
              />
              
              <div className="absolute inset-0 rounded-full border-2 border-indigo-400/30 scale-110 animate-pulse"></div>
            </div>
          </div>

          {/* Content Section with Enhanced Typography */}
          <div className="lg:w-3/5 space-y-6">
            <div className="relative">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent ${isDarkMode? 'text-white':''}`}>
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
            </div>

            {/* paragraphs */}
            <div className="space-y-6 text-lg leading-relaxed">
              <p className={`text-slate-700 ${isDarkMode ? 'dark:text-slate-300' : ''} relative pl-6 border-l-2 border-indigo-200 hover:border-indigo-400 transition-colors duration-300`}>
                <span className="absolute -left-2 top-2 w-3 h-3 bg-indigo-600 rounded-full"></span>
               Hello! I&apos;m <span className="font-semibold text-indigo-700 dark:text-indigo-400">Bishoy Yousef</span>, a mobile and frontend developer focused on building high-quality, scalable user interfaces and cross-platform applications. I specialize in developing modern mobile apps using{' '}
                <span className={`font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm ${isDarkMode? '':'text-white'}`}>Flutter</span>, as well as responsive web applications using{' '}
                <span className={`font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm ${isDarkMode? '':'text-white'}`}>React</span>,{' '}
                <span className={`font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm ${isDarkMode? '':'text-white'}`}>Next.js</span>,{' '}
                <span className={`font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm ${isDarkMode? '':'text-white'}`}>HTML</span>, and{' '}
                <span className={`font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm ${isDarkMode? '':'text-white'}`}>CSS</span>. I focus on building clean, maintainable UIs with strong attention to performance and user experience.

              </p>

              <p className={`text-slate-700 ${isDarkMode ? 'dark:text-slate-300' : ''} relative pl-6 border-l-2 border-purple-200 hover:border-purple-400 transition-colors duration-300`}>
                <span className="absolute -left-2 top-2 w-3 h-3 bg-purple-600 rounded-full"></span>
                My experience also includes integrating{' '}
                <span className="font-semibold text-purple-700 dark:text-purple-400">AI-driven features</span> into applications and working with backend and data services using{' '}
                <span className={`font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm ${isDarkMode? '':'text-white'}`}>Python</span>,{' '}
                <span className={`font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm ${isDarkMode? '':'text-white'}`}>Flask</span>, and machine learning frameworks such as{' '}
                <span className={`font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm ${isDarkMode? '':'text-white'}`}>TensorFlow</span> and{' '}
                <span className={`font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm ${isDarkMode? '':'text-white'}`}>PyTorch</span>. In addition, I have a solid foundation in{' '}
                <span className="font-semibold text-purple-700 dark:text-purple-400">networking fundamentals</span> and IT systems, which helps me build applications with better reliability, connectivity awareness, and real-world operational understanding.
              </p>
              <p className={`text-slate-700 ${isDarkMode ? 'dark:text-slate-300' : ''} relative pl-6 border-l-2 border-indigo-200 hover:border-indigo-400 transition-colors duration-300`}>
                <span className="absolute -left-2 top-2 w-3 h-3 bg-indigo-600 rounded-full"></span>
                As a <span className={`font-semibold text-purple-700 dark:text-purple-400`}>detail-oriented</span> and{' '}
                <span className={`font-semibold text-purple-700 dark:text-purple-400`}>collaborative developer</span>, I focus on delivering reliable, production-ready solutions. I enjoy working in agile environments, solving real-world problems, and continuously improving both my technical and architectural skills to deliver impactful mobile and web applications.
              </p>
            </div>

            <div className="pt-4">
              <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
                <p className="text-sm font-medium">Ready to collaborate on your next project?</p>
                <Link href="#contact" className="underline text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 ml-1">
                  Contact with me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;