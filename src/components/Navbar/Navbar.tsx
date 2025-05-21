"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../ui/mode-toggle";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "E-SIGHT", href: "#product" },
  { name: "Impact", href: "#impact" },
  { name: "Team", href: "#team" },
  { name: "R&D", href: "#rnd" },
  { name: "Collaborate", href: "#collaborate" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to apply glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Handle smooth scrolling
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update URL without page reload
      window.history.pushState({}, "", href);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/70 dark:bg-neutral-900/80 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <Image
            src="/Austrange Logo.png"
            className="dark:invert w-8 h-8 md:w-10 md:h-10"
            alt="Austrange Logo"
            width={40}
            height={40}
          />
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500"
          >
            Austrange
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-purple-600 dark:text-neutral-200 dark:hover:text-purple-400 rounded-full transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="border-l border-neutral-200 dark:border-neutral-700 pl-4">
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden gap-2">
          <ModeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu - Fixed */}
      <div
        className={cn(
          "md:hidden bg-white/90 dark:bg-neutral-900/95 backdrop-blur-md border-t dark:border-neutral-800 transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block py-3 text-neutral-700 hover:text-purple-600 dark:text-neutral-200 dark:hover:text-purple-400 border-b border-neutral-100 dark:border-neutral-800"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
