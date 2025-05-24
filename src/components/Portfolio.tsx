import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion } from 'framer-motion';

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Portfolio
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 mb-16 text-center max-w-2xl mx-auto"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          A selection of our recent work, blending advanced technology and creative design to deliver real results.
        </motion.p>
        <motion.div 
          className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
            >
              <div className="w-full aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-5 text-sm flex-grow">{project.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-blue-600 font-semibold group-hover:underline">
                  View Project <HiOutlineExternalLink className="w-4 h-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 