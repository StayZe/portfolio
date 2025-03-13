"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillSections } from "./skillsdata";

const SkillsPage = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 p-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }} // ⏳ Small delay for entry
        className="max-w-5xl w-full"
      >
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Mes Compétences
        </h2>

        <div className="space-y-8">
          {skillSections.map((section, index) => (
            <ScrollSection
              key={section.title}
              section={section}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// ✨ **Each section slides in smoothly with delay**
const ScrollSection = ({ section, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15, // ⏳ Each section appears with extra delay
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        delay: 0.1, // ⏳ Small delay per card
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
      transition: { duration: 0.3, type: "spring", stiffness: 250 },
    },
  };

  return (
    <div ref={ref} className="py-4">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.3,
          }}
          className="text-gray-600 text-2xl font-bold mb-8 border-b pb-2 border-pink-200"
        >
          {section.title}
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {section.skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover="hover"
              className="bg-white rounded-lg p-4 flex flex-col items-center text-center shadow-md border border-gray-100 transition-all duration-300"
            >
              <motion.div
                className="mb-2"
                initial={{ rotate: 0 }}
                whileHover={{
                  rotate: [0, -8, 8, 0],
                  transition: {
                    duration: 0.2,
                    repeat: 1,
                    repeatType: "reverse",
                  },
                }}
              >
                {skill.icon}
              </motion.div>
              <h4 className="font-semibold text-gray-900">{skill.name}</h4>
              <p className="text-sm text-gray-500 mt-1">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
