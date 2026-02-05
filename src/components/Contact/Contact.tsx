import React from 'react';
import { useTypedSelector } from "@/Types/Hooks";
import Link from 'next/link';

const Contact = () => {
  const isDarkMode = useTypedSelector(state => state.Dark);

  return (
    <section id="contact" className={`py-24 px-6 lg:px-8 relative overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-indigo-100/30 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-green-100/30 dark:bg-green-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <div className="flex justify-center space-x-2 mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-green-500 rounded-full"></div>
              <div className="w-4 h-1 bg-indigo-600 rounded-full animate-pulse"></div>
              <div className="w-2 h-1 bg-green-500 rounded-full animate-pulse delay-75"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Content Card */}
        <div className="relative">
          {/* Card background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-sm rounded-3xl shadow-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-green-500/5 rounded-3xl"></div>
          
          <div className="relative p-8 md:p-12 text-center">
            {/* description */}
            <div className="mb-12">
              <p className={`text-xl md:text-2xl text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl mx-auto`}>
                Interested in collaborating or just want to say hi? 
                <br />
                <span className="font-semibold text-slate-700 dark:text-slate-200">Feel free to reach out.</span>
              </p>
              
              {/* Decorative elements */}
              <div className="flex justify-center items-center space-x-4 mt-8">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-8 mb-12">
              <Link
                href="https://www.linkedin.com/in/bishoy-yousef-aa9341277/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${isDarkMode ? 'text-slate-300 hover:text-blue-400 bg-slate-700/50 hover:bg-blue-500/20' : 'text-slate-600 hover:text-blue-500 bg-white/80 hover:bg-blue-50'} shadow-lg hover:shadow-xl`}
                aria-label="LinkedIn Profile"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>

              <Link
                href="https://github.com/bishoyyousef?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${isDarkMode ? 'text-slate-300 hover:text-gray-100 bg-slate-700/50 hover:bg-gray-500/20' : 'text-slate-600 hover:text-gray-900 bg-white/80 hover:bg-gray-50'} shadow-lg hover:shadow-xl`}
                aria-label="GitHub Profile"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
              {/* Email Button */}
              <div className="group relative">
                {/* Button glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <Link
                  href="mailto:bishoyyousef1@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-3 min-w-[200px] justify-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>Send Me an Email</span>
                </Link>
              </div>

              {/* WhatsApp Button */}
              <div className="group relative">
                {/* Button glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <Link
                  href="https://wa.me/+201272855820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center space-x-3 min-w-[200px] justify-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>Message on WhatsApp</span>
                </Link>
              </div>
            </div>

            {/* Additional contact info */}
            <div className={`mt-12 pt-8 ${isDarkMode ? 'border-t border-slate-700' : 'border-t border-slate-200'}`}>
              <p className={`text-sm text-slate-700 dark:text-slate-200`}>
                Available for freelance projects and full-time opportunities
              </p>
              <div className="flex justify-center items-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className={`text-xs font-medium text-slate-700 dark:text-slate-200`}>
                  Usually responds within 24 hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;