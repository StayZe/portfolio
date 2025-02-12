"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MusicBanner() {
  const [imageLines, setImageLines] = useState([[], [], []]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/music");
        const allImages = await response.json();

        const fisherYatesShuffle = (arr) => {
          const shuffled = [...arr];
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          }
          return shuffled;
        };

        const shuffledLines = [
          fisherYatesShuffle(allImages),
          fisherYatesShuffle(allImages),
          fisherYatesShuffle(allImages),
        ];

        setImageLines(shuffledLines);
      } catch (error) {
        console.error("Error loading images", error);
      }
    };

    fetchImages();
  }, []);

  const lineConfigs = isMobile
    ? [
        { speed: 8, direction: 1 },
        { speed: 12, direction: 1 },
        { speed: 16, direction: 1 },
      ]
    : [
        { speed: 4, direction: 1 },
        { speed: 8, direction: 1 },
        { speed: 12, direction: 1 },
      ];

  return (
    <div className="bg-gray-100 space-y-2 md:space-y-4 overflow-hidden">
      {imageLines.map((images, lineIndex) => {
        const { speed, direction } = lineConfigs[lineIndex];
        const imageWidth = isMobile ? 136 : 200;
        const moveAmount = imageWidth * Math.ceil(images.length / 2);

        return (
          <div
            key={lineIndex}
            className="relative w-full h-32 md:h-48 overflow-hidden"
          >
            <motion.div
              className="flex absolute"
              animate={{
                x: [0, direction * -moveAmount],
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              {/* Triple the images instead of double to ensure no gaps */}
              {[...images, ...images, ...images].map((src, index) => (
                <div
                  key={`${lineIndex}-${index}`}
                  className="relative min-w-[8rem] md:min-w-[12rem] h-32 md:h-48 mx-1 md:mx-2"
                >
                  <Image
                    src={src}
                    alt={`Line ${lineIndex} Image ${index}`}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 8rem, 12rem"
                    priority={index < 4}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
