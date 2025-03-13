"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectPage({ params }) {
  const router = useRouter();
  const { section } = params; // Récupération de la section dynamique

  useEffect(() => {
    if (section) {
      window.location.href = `https://stayze.fr/#${section}`;
    }
  }, [section]);

  return (
    <div>
      <h1>Redirection...</h1>
    </div>
  );
}
