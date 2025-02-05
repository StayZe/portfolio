"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Music() {
  const [images, setImages] = useState([]);
  const bannerRef = useRef(null);

  useEffect(() => {
    // Fetch des images depuis l'API Route
    fetch("/api/music")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const banner = bannerRef.current;
      const imgElements = banner.querySelectorAll("img");

      // Clonage des images pour l'effet infini
      imgElements.forEach((img) => {
        const clone = img.cloneNode(true);
        banner.appendChild(clone);
      });

      // Animation GSAP pour défilement infini
      gsap.to(banner, {
        x: "-50%",
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    }
  }, [images]);

  return (
    <div className="overflow-hidden w-full bg-gray-100">
      <div ref={bannerRef} className="flex whitespace-nowrap">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Image ${index}`}
            width={800}
            height={800}
            className="w-48 h-48 object-cover mx-2"
          />
        ))}
      </div>
    </div>
  );
}
