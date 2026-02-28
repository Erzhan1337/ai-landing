"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Twitter } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Smart Contracts", href: "#smart-contracts" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "White paper", href: "#white-paper" },
];

export const Header = () => {
  const { isMobileMenuOpen, toggleMenu, closeMenu } = useUIStore();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-360 mx-auto px-6 h-24 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg md:text-xl font-medium tracking-wide text-white"
        >
          Aura
        </Link>

        <nav className="hidden lg:flex gap-8 text-[13px] text-gray-300">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex gap-5 items-center text-gray-400">
          <Link
            href="#"
            aria-label="GitHub"
            className="hover:text-brand-purple transition-colors"
          >
            <Github size={20} />
          </Link>
          <Link
            href="#"
            aria-label="Twitter"
            className="hover:text-brand-purple transition-colors"
          >
            <Twitter size={20} />
          </Link>
        </div>

        <button
          className="lg:hidden text-white p-2 -mr-2"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
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
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-lg hover:text-white transition-colors"
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
