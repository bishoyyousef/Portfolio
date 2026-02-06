import React from 'react'
import { useTypedSelector } from "@/Types/Hooks";
import Link from 'next/link';

function Home() {
    const isDarkMode = useTypedSelector(state => state.Dark);
    
    const skills = [
        "Next.js",
        "React",
        "Flutter", 
        "Python",
        "AI/ML",
        "Network fundamentals",
    ];

    return (
        <section
            id="hero"
            className={`min-h-screen flex flex-col justify-center items-center text-center ${isDarkMode ? 'text-slate-900' : 'dark:text-slate-100'}  `}
        >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white" style={{ 
                background: 'linear-gradient(to right, #6d28d9, #9333ea, #c084fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }}>
                bishoy yousef
            </h1>

            <div className="flex items-center space-x-4 mb-8">
                <hr className="w-12 border-t-2 border-indigo-400 dark:border-indigo-600" />
                <p className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400">
                    Software engineer 
                </p>
                <hr className="w-12 border-t-2 border-indigo-400 dark:border-indigo-600" />
            </div>

            <p className={`text-lg md:text-xl max-w-2xl mb-8 ${isDarkMode ? 'text-slate-50':'text-slate-900'}`}>
                software developer specializing in frontend and mobile development, AI integration, and IT systems.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="text-sm md:text-base px-4 py-2 rounded-full border border-slate-400 dark:border-slate-600 text-slate-600 dark:text-slate-400 transition-colors duration-300 hover:border-indigo-500 hover:text-indigo-500"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <Link
                    href="#portfolio"
                    className="bg-indigo-600 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                    style={{
                        background: 'linear-gradient(to right, #6d28d9, #9333ea)'
                    }}
                >
                    View My Work →
                </Link>
                <Link
                    href="#contact"
                    className="border border-indigo-600 text-indigo-600 dark:text-indigo-400 font-medium py-3 px-8 rounded-full transition-colors duration-300 hover:bg-indigo-600 hover:text-white dark:hover:text-white"
                >
                    Get in Touch
                </Link>
            </div>
        </section>
    )
}

export default Home