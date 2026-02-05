import React from 'react';
import Card from '../Card/Card';

const Portfolio = () => {
  const projects = [
    {
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
    },
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
