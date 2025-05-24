"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Check if we're past the hero section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Get height of hero section (approximate)
      const heroHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Show button when scrolled past hero
      setIsVisible(scrollY > heroHeight);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-8 right-8 z-50 rounded-full",
            "bg-black dark:bg-neutral-800 size-12",
            "shadow-lg shadow-purple-500/20 dark:shadow-purple-900/20",
            "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900",
            "flex items-center justify-center group overflow-hidden"
          )}
          aria-label="Scroll to top"
        >
          {/* Inner circle glow effect */}
          <div className="absolute inset-1 rounded-full bg-black dark:bg-neutral-700 z-0 group-hover:bg-neutral-800 transition-colors duration-300" />
          
          {/* Animating gradient background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-blue-500 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-0 bg-[length:400%_400%] animate-subtle-gradient" />
          
          {/* Arrow icon with subtle float animation */}
          <motion.div 
            className="relative z-10 text-white"
            animate={{ y: [0, -2, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut" 
            }}
          >
            <ArrowUp size={20} strokeWidth={2.5} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
