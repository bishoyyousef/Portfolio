import React from 'react';
import Card from '../Card/Card';

const Portfolio = () => {
  const projects = [
    {
      imageSrc: "Projects/movies-website.png",
      imageAlt: "movies-website",
      title: "movies-website",
      description: "A movies website web application built with Next.js and TMDB API, featuring a responsive design, dynamic movie listings, detailed movie pages, and a user-friendly interface for seamless browsing and discovery of movies.", 
      link: "https://movies-website-oj1a.vercel.app/", 
    },
    {
      imageSrc: "Projects/kanban.png",
      imageAlt: "Kanban Task Management App",
      title: "Kanban Task Management App",
      description: "A high-fidelity task management board built to streamline team workflows. Features board creation, drag-and-drop task reordering, column customizability, interactive subtask tracking, and local state persistence.",
      link: "https://kanban-mu-liard.vercel.app/",
    },
    {
      imageSrc: "Projects/link-vault.png",
      imageAlt: "LinkVault Dashboard",
      title: "LinkVault Dashboard",
      description: "A glassmorphism-inspired personal bookmark manager and note-taking dashboard. Built with pure Vanilla JS and HTML5/CSS3, featuring JWT auth, client-side searching and filtering, categories, nested notes, and JSON export backups.",
      link: "https://link-vault-slqe.vercel.app/login.html",
    },
    {
      imageSrc: "Projects/clinic.png",
      imageAlt: "Clinic Management Dashboard",
      title: "Clinic Management Dashboard",
      description: "A production-style Angular 19 administrative clinic dashboard. Features JWT role-based access control, appointment calendar scheduler, receptionist wizards, patient/staff directory management, and reactive UI driven by Angular Signals.",
      link: "https://clinic-omega-five.vercel.app/calendar",
    },
    /*{
      imageSrc: "Projects/PatientManagementSystem.png",
      imageAlt: "Intradialytic",
      title: "Intradialytic",
      description: "A hospital management web application built with Next.js and Flask AI integration, featuring nurse login/signup, patient management, dialysis session tracking, and AI-driven predictive analytics for low blood pressure risks during dialysis, enhancing patient safety and usability with search functionality.",
      link: "https://gp-front-end-nine.vercel.app/", 
    },
    {
      imageSrc: "Projects/SpainResidency.png",
      imageAlt: "Spain Residency Landing Page",
      title: "Spain Residency Landing Page",
      description: "A responsive Next.js landing page for Ziada Company, optimized for all devices, showcasing Spain residency benefits, available packages, and prominent contact information with a strong call-to-action to drive user engagement and conversions.",
      link: "https://spain-residency-landing-page.vercel.app/",
    },*/
    {
      imageSrc: "Projects/ECommerce.png",
      imageAlt: "E-Commerce App",
      title: "E-Commerce App",
      description: "A modern e-commerce platform built with Next.js, featuring a user-friendly homepage displaying all products, favorites and cart sections for users, a checkout system, and an admin-exclusive product addition feature, with login/signup for both regular users and admins.",
      link: "https://e-commerce-app-six-lake.vercel.app/",
    },
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
