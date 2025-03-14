import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🌟 METADATA OPTIMISÉE POUR LE SEO
export const metadata = {
  title: "Antoine Mandra - Développeur Web",
  description:
    "Développeur web spécialisé en Next.js et React. Étudiant à l'ESGI et en alternance chez Comsea. Découvrez mes projets et mon parcours.",
  metadataBase: new URL("https://stayze.fr"), // 🔥 Ton domaine à remplacer

  openGraph: {
    title: "Antoine Mandra - Développeur Web",
    description:
      "Développeur web Next.js & React. Étudiant à l'ESGI et alternant chez Comsea. Découvrez mon portfolio et mes réalisations.",
    url: "https://stayze.fr", // 🔥 Remplace par ton site
    siteName: "Antoine Mandra",
    images: [
      {
        url: "https://stayze.fr/images/og-image.jpg", // 🔥 Remplace par une image de toi ou ton logo
        width: 1200,
        height: 630,
        alt: "Antoine Mandra - Développeur Web",
      },
    ],
    locale: "fr_FR",
    type: "profile",
    profile: {
      firstName: "Antoine",
      lastName: "Mandra",
      username: "AntoineMandra",
      gender: "male",
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "Antoine Mandra - Développeur Web",
    description:
      "Développeur web Next.js & React. Étudiant à l'ESGI et alternant chez Comsea. Découvrez mon portfolio et mes réalisations.",
    site: "@tonTwitter", // 🔥 Remplace par ton compte Twitter
    creator: "@tonTwitter",
    images: ["https://stayze.fr/images/og-image.jpg"], // 🔥 Image adaptée pour Twitter
  },

  robots: "index, follow", // ✅ Demande à Google d'indexer ton site

  alternates: {
    canonical: "https://stayze.fr", // ✅ URL principale pour éviter le duplicate content
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-pink-50 to-purple-50`}
      >
        <Header />
        {children}
        {/* <Footer /> */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
