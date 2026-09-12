"use client";
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-16 space-y-12 lg:space-y-0">
          {/* Profile Photo Section */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative group">
              {/* Outer glossy aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-500"></div>

              {/* Profile Image */}
              <img
                src="bishoyyousef.png"
                alt="Bishoy Yousef"
                className="relative rounded-full w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover border-4 border-indigo-500/80 shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Biography Content */}
          <div className="lg:w-3/5 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight text-slate-900 dark:text-white">
                About Me
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
            </div>

            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <p>
                Hello! I&apos;m <span className="font-semibold text-indigo-600 dark:text-indigo-400">Bishoy Yousef</span>, a Full-Stack Developer with a primary focus on <span className="font-semibold">Frontend Development</span>. I build modern, responsive, and intuitive web interfaces that deliver great performance and user experience.
              </p>

              <p>
                My frontend toolkit includes <span className="font-medium">React</span>, <span className="font-medium">Next.js</span>, <span className="font-medium">Angular</span>, <span className="font-medium">TypeScript</span>, <span className="font-medium">JavaScript</span>, <span className="font-medium">HTML5</span>, and <span className="font-medium">CSS3 / Tailwind CSS</span>. On the backend, I work with <span className="font-medium">Node.js</span>, <span className="font-medium">Express.js</span>, <span className="font-medium">MongoDB</span>, and <span className="font-medium">REST APIs</span>.
              </p>

              <p>
                I focus on writing clean, maintainable code, integrating frontend applications with backend services, and continuously honing my technical skills to deliver reliable, end-to-end digital solutions.
              </p>
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                Open to collaborations and web development opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;