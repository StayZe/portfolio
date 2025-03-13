"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../fonts.css"; // Import fonts from your CSS or via next/font

const fonts = [
  "'Montserrat', sans-serif",
  "'Noto Sans JP', sans-serif",
  "'Noto Serif Hentaigana', serif",
  "'Open Sans', sans-serif",
  "'Oswald', sans-serif",
  "'Playfair Display', serif",
  "'Poppins', sans-serif",
  "'Roboto', sans-serif",
  "'Rubik', sans-serif",
];

const AnimatedText = () => {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 150); // Change font every 150ms

    return () => clearInterval(interval); // Clean up interval
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full overflow-visible">
        <motion.h1
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20,
            duration: 1.2,
          }}
          style={{
            fontFamily: fonts[currentFontIndex],
            transition: "font-family 0.3s ease-in-out",
          }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-600 text-center"
        >
          Antoine Mandra
        </motion.h1>
      </div>
    </div>
  );
};

export default AnimatedText;
