import {
  Atom,
  Rocket,
  Palette,
  Zap,
  Wind,
  Figma,
  Server,
  Code,
  Music,
  CloudLightning,
  Database,
  Mail,
  Terminal,
} from "lucide-react";

export const skillSections = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: <Atom color="#61DAFB" />,
        description: "Modern JavaScript library for building user interfaces",
      },
      {
        name: "NextJS",
        icon: <Rocket color="#000" />,
        description: "React framework for production-grade applications",
      },
      {
        name: "HTML / CSS",
        icon: <Palette color="#E44D26" />,
        description: "Core web technologies for structure and styling",
      },
      {
        name: "JavaScript",
        icon: <Zap color="#F7DF1E" />,
        description: "Dynamic programming language for web interactivity",
      },
      {
        name: "Tailwind CSS",
        icon: <Wind color="#38B2AC" />,
        description: "Utility-first CSS framework",
      },
      {
        name: "Figma",
        icon: <Figma color="#F24E1E" />,
        description: "Design and prototyping tool",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Django",
        icon: <Code color="#44B78B" />,
        description: "Python web framework",
      },
      {
        name: "Symfony",
        icon: <Music color="#000" />,
        description: "PHP web application framework",
      },
      {
        name: "Strapi",
        icon: <CloudLightning color="#4945FF" />,
        description: "Headless CMS",
      },
    ],
  },
  {
    title: "Bases de données",
    skills: [
      {
        name: "MySQL",
        icon: <Server color="#00758F" />,
        description: "Relational database management system",
      },
      {
        name: "PostgreSQL",
        icon: <Database color="#336791" />,
        description: "Advanced open-source database",
      },
    ],
  },
  {
    title: "Autres outils",
    skills: [
      {
        name: "Postman",
        icon: <Mail color="#FF6C37" />,
        description: "API development and testing tool",
      },
      {
        name: "Serveurs Linux",
        icon: <Terminal color="#FCC624" />,
        description: "Ubuntu/Debian server management",
      },
    ],
  },
];
