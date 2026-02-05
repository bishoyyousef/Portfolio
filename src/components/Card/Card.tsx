import React from 'react';
import { useTypedSelector } from "@/Types/Hooks";
import Link from 'next/link';

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, imageAlt, title, description, link }) => {
  const isDarkMode = useTypedSelector(state => state.Dark);

  return (
    <div className={`bg-white ${isDarkMode ? 'dark:bg-slate-800' : ''} rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-102 hover:shadow-lg ${isDarkMode ? 'dark:hover:shadow-white/20' : ''}`}>
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className={`text-sm text-slate-600 ${isDarkMode ? 'dark:text-slate-400' : ''} mb-4`}>
          {description}
        </p>
        <Link
          href={link}
          className={`text-indigo-600 hover:text-indigo-800 ${isDarkMode ? 'dark:text-indigo-400 dark:hover:text-indigo-500' : ''} font-medium transition-colors duration-300`}
        >
          View Project &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Card;