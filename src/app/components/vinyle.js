import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function RotatingVinyl() {
  const rotationControls = useAnimation();
  const entryControls = useAnimation();
  const [rotationSpeed, setRotationSpeed] = useState(5); // Initial rotation duration (smaller = faster)

  useEffect(() => {
    // Start the rotation animation
    rotationControls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: rotationSpeed,
      },
    });

    // Start the entry animation after a delay
    entryControls.start({
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: 0.5, // 0.3 second delay before starting
        duration: 1.2,
      },
    });
  }, [rotationSpeed, rotationControls, entryControls]);

  return (
    <motion.div
      initial={{ x: "150%" }} // Start from right (outside the viewport)
      animate={entryControls} // Apply the entry animation
      style={{ display: "inline-block" }}
    >
      <motion.div animate={rotationControls}>
        <Image
          src="/img/vinyle.webp"
          alt="vinyle"
          width={400}
          height={400}
          className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
        />
      </motion.div>
    </motion.div>
  );
}
