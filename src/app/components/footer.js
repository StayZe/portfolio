import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-screen p-4 flex flex-col justify-end items-end">
      <Link
        href="https://github.com/StayZe"
        className="hover:underline text-sm"
        target="_blank" // Ouvre le lien dans un nouvel onglet
        rel="noopener noreferrer" // Bonnes pratiques de sécurité pour les liens externes
      >
        Github
      </Link>
      <Link
        href="www.linkedin.com/in/antoine-mandra-401147240"
        className="hover:underline text-sm"
        target="_blank" // Ouvre le lien dans un nouvel onglet
        rel="noopener noreferrer" // Bonnes pratiques de sécurité pour les liens externes
      >
        Linkedin
      </Link>
      <p className="text-sm">Created by Antoine Mandra</p>
      <p className="text-sm">2025 - Tous droits réservés.</p>
    </div>
  );
}
