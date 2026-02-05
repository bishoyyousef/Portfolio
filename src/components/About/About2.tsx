import React from 'react';
import { useTypedSelector } from "@/Types/Hooks";

const About = () => {
  const isDarkMode = useTypedSelector(state => state.Dark);

  return (
    <section id="about" className={`py-24`}>
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src="MinaMagedHQ.png"
            alt="bishoy yousef"
            className="rounded-full w-48 h-48 md:w-full md:h-auto object-cover border-4 border-indigo-600 transition-all duration-300 transform hover:rotate-3"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className={`mb-4 text-slate-700 ${isDarkMode ? 'dark:text-slate-300' : ''}`}>
            Hello! I&apos;m bishoy yousef, a full-stack developer with a passion for building robust and scalable web applications. I specialize in creating responsive front-end interfaces with **Next.js**, **HTML**, **CSS**, and **Redux**, and I have a strong foundation in backend development using **Node.js** and **Django**.
          </p>
          <p className={`mb-4 text-slate-700 ${isDarkMode ? 'dark:text-slate-300' : ''}`}>
            My expertise extends to integrating AI into web applications using frameworks like **Flask**, **TensorFlow**, and **PyTorch** to enhance functionality. I have applied these skills to projects like Intradialytic, where I implemented AI-driven predictive analytics to forecast health risks for patients during dialysis sessions.
          </p>
          <p className={`text-slate-700 ${isDarkMode ? 'dark:text-slate-300' : ''}`}>
            As a problem-solving-focused and collaborative developer, I am committed to delivering high-quality, end-to-end solutions that meet client needs and provide exceptional user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;