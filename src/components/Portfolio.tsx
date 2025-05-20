import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "A real-time analytics platform leveraging machine learning to deliver actionable business insights.",
    image: "/icon.png",
    link: "#",
  },
  {
    title: "E-Commerce Automation Suite",
    description: "Automated workflows and smart recommendations for modern online stores.",
    image: "/icon.png",
    link: "#",
  },
  {
    title: "Cloud Data Integrator",
    description: "Seamlessly connect, transform, and visualize data from multiple cloud sources.",
    image: "/icon.png",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center">Portfolio</h2>
        <p className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto">
          A selection of our recent work, blending advanced technology and creative design to deliver real results.
        </p>
        <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 p-7 flex flex-col items-center text-center hover:-translate-y-1 hover:bg-blue-50/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project.image} alt={project.title} className="h-16 w-16 mb-5 rounded-xl shadow-md bg-white" />
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <span className="inline-flex items-center gap-1 text-blue-600 font-semibold group-hover:underline">
                View Project <HiOutlineExternalLink className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 