"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Twitter } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";

const NAV_LINKS = [
  "Smart Contracts",
  "Services",
  "Solutions",
  "Roadmap",
  "White paper",
];

export const Header = () => {
  const { isMobileMenuOpen, toggleMenu, closeMenu } = useUIStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-360 mx-auto px-6 h-24 flex items-center justify-between">
        <div className="text-lg md:text-xl font-medium tracking-wide text-white">
          SITE NAME
        </div>

        <nav className="hidden lg:flex gap-8 text-[13px] text-gray-300">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex gap-5 items-center text-gray-400">
          <a href="#" className="hover:text-brand-purple transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="hover:text-brand-purple transition-colors">
            <Twitter size={20} />
          </a>
        </div>
        <button
          className="lg:hidden text-white p-2 -mr-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col items-center py-8 gap-6 text-gray-300">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="text-lg hover:text-white transition-colors"
                  onClick={closeMenu}
                >
                  {link}
                </a>
              ))}
              <div className="flex gap-6 mt-4 text-gray-400">
                <a href="#" className="hover:text-brand-purple">
                  <Github size={24} />
                </a>
                <a href="#" className="hover:text-brand-purple">
                  <Twitter size={24} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
