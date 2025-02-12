"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedText from "./components/text-animated";
import SkillsPage from "./components/skills";
import RotatingVinyl from "./components/vinyle";
import Music from "./components/music";
import Game from "./components/games";
import Social from "./components/social";
import Pdf from "./components/cv";
import Film from "./components/film";

export default function Home() {
  return (
    <div
      className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll scroll-smooth"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <div className="snap-center h-screen w-screen flex flex-col lg:flex-row items-center">
        <div className="h-1/2 lg:w-1/2 flex justify-center">
          <AnimatedText />
        </div>
        <div className="h-1/2 lg:w-1/2 flex justify-center items-center">
          <RotatingVinyl />
        </div>
      </div>

      <div className="snap-center h-screen w-screen flex justify-center items-center bg-gradient-to-r from-pink-50 to-purple-50">
        <motion.div
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 200, damping: 6 }}
          className="cursor-pointer text-pink-600 hover:text-pink-800 transition-colors flex flex-row items-center gap-2 p-4"
        >
          <p
            className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl cursor-pointer text-pink-600 hover:text-pink-800 transition-colors"
            style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "2px" }}
          >
            VOIR MES COMPÉTENCES
          </p>
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 90 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="cursor-pointer text-pink-600 hover:text-pink-800 transition-colors"
          >
            <ArrowRight className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-32 lg:h-32" />
          </motion.div>
        </motion.div>
      </div>

      <div
        id="skills"
        className="min-h-screen w-screen snap-start scroll-mt-20"
      >
        <SkillsPage />
      </div>

      <div className="snap-center h-screen w-screen flex justify-center items-center bg-gradient-to-r from-pink-50 to-purple-50">
        <motion.div
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 200, damping: 6 }}
          className="cursor-pointer text-pink-600 hover:text-pink-800 transition-colors flex flex-row items-center gap-2"
        >
          <p
            className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl cursor-pointer text-pink-600 hover:text-pink-800 transition-colors"
            style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "2px" }}
          >
            VOIR MES LOISIRS
          </p>
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 90 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="cursor-pointer text-pink-600 hover:text-pink-800 transition-colors"
          >
            <ArrowRight className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-32 lg:h-32" />
          </motion.div>
        </motion.div>
      </div>

      <div
        id="loisirs"
        className="snap-start scroll-mt-20 min-h-screen w-screen bg-gradient-to-r from-pink-50 to-purple-50"
      >
        <div>
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Mes loisirs
          </h2>
        </div>

        <div className="snap-start scroll-mt-20">
          <div className="ml-4 mb-4">
            <p
              className="text-gray-500 text-2xl font-bold"
              style={{ letterSpacing: "2px" }}
            >
              Musique
            </p>
          </div>
          <div className="mb-8">
            <Music />
          </div>
        </div>

        <div className="snap-start scroll-mt-20">
          <div className="ml-4 mb-4">
            <p
              className="text-gray-500 text-2xl font-bold"
              style={{ letterSpacing: "2px" }}
            >
              Jeux vidéos
            </p>
          </div>
          <div className="mb-8">
            <Game />
          </div>
        </div>

        <div className="snap-start scroll-mt-20">
          <div className="ml-4 mb-4">
            <p
              className="text-gray-500 text-2xl font-bold"
              style={{ letterSpacing: "2px" }}
            >
              Films / Séries
            </p>
          </div>
          <div className="mb-8">
            <Film />
          </div>
        </div>
      </div>

      <div className="snap-center h-screen w-screen flex justify-center items-center bg-gradient-to-r from-pink-50 to-purple-50">
        <motion.div
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 200, damping: 6 }}
          className="cursor-pointer text-pink-600 hover:text-pink-800 transition-colors flex flex-row items-center gap-2"
        >
          <p
            className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl cursor-pointer text-pink-600 hover:text-pink-800 transition-colors"
            style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "2px" }}
          >
            ME CONTACTER
          </p>
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 90 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="cursor-pointer text-pink-600 hover:text-pink-800 transition-colors"
          >
            <ArrowRight className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-32 lg:h-32" />
          </motion.div>
        </motion.div>
      </div>

      <div className="snap-center w-screen h-screen">
        <Social />
      </div>

      <div className="snap-center h-screen w-screen flex justify-center items-center bg-gradient-to-r from-pink-50 to-purple-50">
        <motion.div
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 200, damping: 6 }}
          className="cursor-pointer text-pink-600 hover:text-pink-800 transition-colors flex flex-row items-center gap-2"
        >
          <p
            className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl cursor-pointer text-pink-600 hover:text-pink-800 transition-colors"
            style={{ fontFamily: "'Anton', sans-serif", letterSpacing: "2px" }}
          >
            MON CV
          </p>
          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 90 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="cursor-pointer text-pink-600 hover:text-pink-800 transition-colors"
          >
            <ArrowRight className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-32 lg:h-32" />
          </motion.div>
        </motion.div>
      </div>
      <Pdf />
    </div>
  );
}
