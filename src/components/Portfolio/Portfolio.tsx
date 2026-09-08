"use client";
import React from 'react';
import Card, { CardProps } from '../Card/Card';

const Portfolio: React.FC = () => {
  const projects: CardProps[] = [
    {
      imageSrc: "Projects/clinic.png",
      imageAlt: "Clinic Management Dashboard",
      title: "Clinic Management Dashboard",
      description: "An administrative clinic management application built with Angular 19, featuring appointment scheduling, patient/staff directories, and reactive state management.",
      techStack: ["Angular 19", "TypeScript", "Angular Signals", "RxJS", "REST API"],
      highlights: [
        "Role-Based Access Control",
        "Appointment Calendar Scheduler",
        "Reactive UI with Angular Signals",
        "Patient & Staff Directory Management"
      ],
      link: "https://clinic-omega-five.vercel.app/calendar",
      github: "https://github.com/bishoyyousef?tab=repositories"
    },
    {
      imageSrc: "Projects/kanban.png",
      imageAlt: "Kanban Task Management App",
      title: "Kanban Task Management App",
      description: "An interactive task management board designed for workflow organization, subtask tracking, column customization, and drag-and-drop task reordering.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      highlights: [
        "Drag-and-Drop Task Reordering",
        "Custom Board & Column Management",
        "Interactive Subtask Tracking",
        "Local State Persistence"
      ],
      link: "https://kanban-mu-liard.vercel.app/",
      github: "https://github.com/bishoyyousef?tab=repositories"
    },
    {
      imageSrc: "Projects/link-vault.png",
      imageAlt: "LinkVault Dashboard",
      title: "LinkVault Dashboard",
      description: "A personal bookmark manager and note-taking dashboard featuring client-side searching, nested note organization, category management, and JWT authentication.",
      techStack: ["JavaScript", "HTML5", "CSS3", "REST API"],
      highlights: [
        "JWT Authentication",
        "Client-Side Search & Filtering",
        "Nested Notes & Categories",
        "JSON Export Backups"
      ],
      link: "https://link-vault-slqe.vercel.app/login.html",
      github: "https://github.com/bishoyyousef?tab=repositories"
    },
    {
      imageSrc: "Projects/movies-website.png",
      imageAlt: "Movies Discovery App",
      title: "Movies Discovery App",
      description: "A movies discovery web application built with Next.js and TMDB API integration, featuring dynamic movie listings, search filtering, and detailed media pages.",
      techStack: ["Next.js", "React", "TMDB API", "Tailwind CSS"],
      highlights: [
        "TMDB REST API Integration",
        "Dynamic Movie Listings & Search",
        "Detailed Media Overview Pages",
        "Responsive User Interface"
      ],
      link: "https://movies-website-oj1a.vercel.app/",
      github: "https://github.com/bishoyyousef?tab=repositories"
    },
    {
      imageSrc: "Projects/ECommerce.png",
      imageAlt: "E-Commerce App",
      title: "E-Commerce App",
      description: "A modern e-commerce web platform featuring product listings, search, shopping cart and wishlist management, checkout flow, and admin product controls.",
      techStack: ["Next.js", "React", "Tailwind CSS"],
      highlights: [
        "Product Catalog & Searching",
        "Cart & Wishlist Management",
        "User Checkout Flow",
        "Admin Product Management"
      ],
      link: "https://e-commerce-app-six-lake.vercel.app/",
      github: "https://github.com/bishoyyousef?tab=repositories"
    },
    {
      imageSrc: "Projects/PatientManagementSystem.png",
      imageAlt: "Intradialytic Patient Management",
      title: "Intradialytic Patient Management",
      description: "A hospital management application built with Next.js, featuring nurse authentication, patient record management, and dialysis session tracking.",
      techStack: ["Next.js", "React", "REST API", "Tailwind CSS"],
      highlights: [
        "Nurse Authentication Portal",
        "Patient Directory Management",
        "Dialysis Session Tracking",
        "Responsive Dashboard UI"
      ],
      link: "https://gp-front-end-nine.vercel.app/",
      github: "https://github.com/bishoyyousef?tab=repositories"
    },
    {
      imageSrc: "Projects/SpainResidency.png",
      imageAlt: "Spain Residency Landing Page",
      title: "Spain Residency Landing Page",
      description: "A responsive landing page built with Next.js for Ziada Company, optimized across all devices to showcase Spain residency packages and contact calls to action.",
      techStack: ["Next.js", "React", "Tailwind CSS"],
      highlights: [
        "Responsive Device Optimization",
        "Package Showcase Section",
        "Call-to-Action Integration",
        "Clean Modern Design"
      ],
      link: "https://spain-residency-landing-page.vercel.app/",
      github: "https://github.com/bishoyyousef?tab=repositories"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight text-slate-900 dark:text-white">
            Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            A selection of web applications and projects built with modern frontend tools and web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              highlights={project.highlights}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
