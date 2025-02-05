"use client";

import React, { useEffect, useState } from "react";
import "../fonts.css"; // Assure-toi d'importer les polices dans ton CSS ou via next/font

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
    }, 150); // Change la police toutes les 0.4 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle à la fin
  }, []);

  return (
    <div className="flex justify-center items-center">
      <h1
        style={{
          fontFamily: fonts[currentFontIndex],
          transition: "font-family 0.3s ease-in-out", // Transition fluide
        }}
        className="text-5xl font-bold text-pink-600"
      >
        Antoine Mandra
      </h1>
    </div>
  );
};

export default AnimatedText;
