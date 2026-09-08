"use client";
import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      name: "Email",
      href: "mailto:bishoyyousef1@gmail.com",
      icon: <FaEnvelope className="w-6 h-6 sm:w-7 sm:h-7" />,
      colorClass: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/25",
      aria: "Send an Email"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/+201272855820",
      icon: <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />,
      colorClass: "bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-emerald-500/25",
      aria: "Message on WhatsApp"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/bishoy-yousef-aa9341277/",
      icon: <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />,
      colorClass: "bg-[#0A66C2] hover:bg-[#0855a0] text-white shadow-blue-500/25",
      aria: "LinkedIn Profile"
    },
    {
      name: "GitHub",
      href: "https://github.com/bishoyyousef?tab=repositories",
      icon: <FaGithub className="w-6 h-6 sm:w-7 sm:h-7" />,
      colorClass: "bg-slate-800 hover:bg-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-100 shadow-slate-500/25",
      aria: "GitHub Repositories"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg max-w-xl mx-auto text-slate-600 dark:text-slate-300">
            Interested in collaborating or discussing web development opportunities? Reach out directly through any of the methods below.
          </p>
        </div>

        {/* Glossy Container Card */}
        <div className="rounded-3xl p-8 sm:p-12 text-center transition-all duration-300 bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/80 shadow-xl backdrop-blur-xl">
          {/* Circled Icon Buttons Row */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={method.aria}
                  className="flex flex-col items-center group"
                >
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 shadow-lg ${method.colorClass}`}
                  >
                    {method.icon}
                  </div>
                  <span className="text-xs font-semibold mt-2.5 text-slate-700 dark:text-slate-300 transition-colors duration-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    {method.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;