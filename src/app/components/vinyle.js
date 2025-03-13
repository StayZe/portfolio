import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function RotatingVinyl() {
  const controls = useAnimation();
  const [rotationSpeed, setRotationSpeed] = useState(5); // Durée initiale de rotation (plus petit = plus rapide)

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: rotationSpeed,
      },
    });
  }, [rotationSpeed, controls]);

  return (
    <motion.div
      animate={controls}
      style={{ display: "inline-block" }}
    >
      <Image src="/img/vinyle.webp" alt="vinyle" width={400} height={400} className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]" />
    </motion.div>
  );
}
