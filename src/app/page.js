"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedText from "./components/text-animated";
import SkillsPage from "./components/skills";
import RotatingVinyl from "./components/vinyle";
import Music from "./components/music";

export default function Home() {
  return (
    <div>
      <div className="h-[90vh] lg:h-screen w-screen flex flex-col lg:flex-row items-center">
        <div className="h-1/2 lg:w-1/2 flex justify-center">
          <AnimatedText />
        </div>
        <div className="h-1/2 lg:w-1/2 flex justify-center items-center">
          <RotatingVinyl />
        </div>
      </div>

      <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-pink-50 to-purple-50">
        <motion.div
          whileHover={{ rotate: 5 }} // Rotation de 15° au survol
          transition={{ type: "spring", stiffness: 200, damping: 6 }} // Animation fluide
          className="cursor-pointer text-pink-600 hover:text-pink-800 transition-colors flex flex-row items-center gap-2"
        >
          <p
            className="text-8xl cursor-pointer text-pink-600 hover:text-pink-800 transition-colors"
            style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "2px" }}
          >
            VOIR MES COMPÉTENCES
          </p>
          <motion.div
            initial={{ rotate: 0 }} // Rotation initiale de 90°
            whileHover={{ rotate: 90 }} // Rotation à 15° de plus au hover (90 + 15)
            transition={{ type: "spring", stiffness: 200, damping: 10 }} // Animation fluide
            className="cursor-pointer text-pink-600 hover:text-pink-800 transition-colors"
          >
            <ArrowRight size={125} />
          </motion.div>
        </motion.div>
      </div>

      <div className="min-h-screen w-screen">
        <SkillsPage />
      </div>
      <div>
        <Music />
      </div>
    </div>
  );
}
