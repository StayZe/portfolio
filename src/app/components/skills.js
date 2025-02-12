"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Atom,
  Rocket,
  Palette,
  Zap,
  Wind,
  Figma,
  Server,
  Code,
  Music,
  CloudLightning,
  Database,
  Mail,
  Terminal,
} from "lucide-react";

const SkillsPage = () => {
  const skillSections = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          icon: <Atom color="#61DAFB" />,
          description: "Modern JavaScript library for building user interfaces",
        },
        {
          name: "NextJS",
          icon: <Rocket color="#000" />,
          description: "React framework for production-grade applications",
        },
        {
          name: "HTML / CSS",
          icon: <Palette color="#E44D26" />,
          description: "Core web technologies for structure and styling",
        },
        {
          name: "JavaScript",
          icon: <Zap color="#F7DF1E" />,
          description: "Dynamic programming language for web interactivity",
        },
        {
          name: "Tailwind CSS",
          icon: <Wind color="#38B2AC" />,
          description: "Utility-first CSS framework",
        },
        {
          name: "Figma",
          icon: <Figma color="#F24E1E" />,
          description: "Design and prototyping tool",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Django",
          icon: <Code color="#44B78B" />,
          description: "Python web framework",
        },
        {
          name: "Symfony",
          icon: <Music color="#000" />,
          description: "PHP web application framework",
        },
        {
          name: "Strapi",
          icon: <CloudLightning color="#4945FF" />,
          description: "Headless CMS",
        },
      ],
    },
    {
      title: "Bases de données",
      skills: [
        {
          name: "MySQL",
          icon: <Server color="#00758F" />,
          description: "Relational database management system",
        },
        {
          name: "PostgreSQL",
          icon: <Database color="#336791" />,
          description: "Advanced open-source database",
        },
      ],
    },
    {
      title: "Autres outils",
      skills: [
        {
          name: "Postman",
          icon: <Mail color="#FF6C37" />,
          description: "API development and testing tool",
        },
        {
          name: "Serveurs Linux",
          icon: <Terminal color="#FCC624" />,
          description: "Ubuntu/Debian server management",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(147, 112, 219, 0.2)",
      background:
        "linear-gradient(135deg, rgba(255,105,180,0.1), rgba(147,112,219,0.1))",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <div className="w-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 p-4 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl w-full"
      >
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Mes Compétences
        </h2>

        <div className="space-y-6">
          {skillSections.map((section) => (
            <motion.div
              key={section.title}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <h3 className="text-gray-500 text-2xl font-bold mb-4 border-b pb-2 border-pink-200">
                {section.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {section.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover="hover"
                    className="bg-white/70 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center shadow-md transition-all duration-300 ease-in-out"
                  >
                    <motion.div
                      className="mb-2"
                      initial={{ rotate: 0 }}
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        transition: {
                          duration: 0.4,
                          repeat: 1,
                          repeatType: "reverse",
                        },
                      }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h4 className="font-medium text-gray-800">{skill.name}</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
