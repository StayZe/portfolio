import Image from "next/image";
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function Pdf() {
  const tiltRef = useRef(null);

  useEffect(() => {
    const tiltNode = tiltRef.current;

    VanillaTilt.init(tiltNode, {
      max: 10,
      perspective: 1000,
      scale: 1.05,
      speed: 1000,
      glare: true,
      "max-glare": 0.3,
      gyroscope: true,
    });

    return () => tiltNode.vanillaTilt.destroy();
  }, []);

  return (
    <div className="relative h-screen snap-center lg:p-32 flex justify-center items-center">
      <div
        ref={tiltRef}
        className="rounded-lg shadow-2xl transition-transform"
        style={{
          transformStyle: "preserve-3d",
          transform: "perspective(1000px)",
        }}
      >
        <Image
          src="/img/cv.webp"
          width={720}
          height={1280}
          alt="cv"
          className="max-h-[75vh] w-auto max-w-7xl rounded-lg mx-auto"
          priority
        />
      </div>
      <div className="absolute bottom-10 flex flex-row gap-1.5">
        <a
          className="hover:underline"
          href="/pdf/cv.pdf"
          download={"CV-Antoine-Mandra"}
        >
          Télécharger
        </a>
        <span>-</span>
        <a className="hover:underline" href="/pdf/cv.pdf">
          Imprimer
        </a>
      </div>
    </div>
  );
}
