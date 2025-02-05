"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const linkHoverVariants = {
    initial: {
      scale: 1,
      background: "linear-gradient(to right, transparent, transparent)",
    },
    hover: {
      scale: 1.05,
      background:
        "linear-gradient(to right, rgba(255,105,180,0.2), rgba(147,112,219,0.2))",
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.3, type: "tween", ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.header
      className="fixed w-full top-0 z-50 bg-gradient-to-r from-pink-50 to-purple-50 shadow-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto px-4 py-4 flex justify-between items-center z-50">
        {/* Logo with Hover Animation */}
        <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent hover:from-pink-700 hover:to-purple-700 transition-all"
          >
            Antoine Mandra
          </Link>
        </motion.div>

        {/* Desktop Navigation - Right Aligned */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <motion.div
              key={item.href}
              variants={linkHoverVariants}
              initial="initial"
              whileHover={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className="text-gray-700 px-3 py-2 rounded-lg transition-all hover:bg-pink-100/50 hover:text-pink-700"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-pink-600 hover:text-pink-700 transition-colors"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu with Animated Entrance */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute z-10 left-0 w-full bg-gradient-to-r from-pink-50 to-purple-50 shadow-lg"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <nav className="flex flex-col p-4 space-y-4">
              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className="block text-gray-800 hover:text-pink-600 transition-colors py-2 px-4 rounded-lg hover:bg-pink-100/50"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
