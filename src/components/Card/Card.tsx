"use client";
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  techStack?: string[];
  highlights?: string[];
  link?: string;
  github?: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  techStack = [],
  highlights = [],
  link,
  github,
}) => {
  return (
    <div
      className="group rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/80 shadow-md dark:shadow-xl hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-indigo-500/10"
    >
      <div>
        {/* Project Thumbnail */}
        <div className="relative overflow-hidden h-48 sm:h-52">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
            {title}
          </h3>

          <p className="text-sm mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            {description}
          </p>

          {/* Tech Stack Pills */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-md font-medium bg-indigo-50 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Technical Highlights */}
          {highlights.length > 0 && (
            <div className="mb-4 pt-3 border-t border-slate-200/50 dark:border-slate-800/50">
              <p className="text-xs font-semibold uppercase tracking-wider mb-2 text-slate-500 dark:text-slate-400">
                Highlights
              </p>
              <ul className="space-y-1">
                {highlights.map((item, idx) => (
                  <li key={idx} className="text-xs flex items-center text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-6 pt-0 flex items-center gap-3">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-semibold px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200 shadow-sm"
          >
            Live Demo <FaExternalLinkAlt className="ml-1.5 w-3 h-3" />
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs font-semibold px-4 py-2 rounded-lg transition-colors duration-200 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            GitHub <FaGithub className="ml-1.5 w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;