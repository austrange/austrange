"use client";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { motion } from "framer-motion";
import { BackgroundGradient } from "../ui/background-gradient";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { LineShadowText } from "../magicui/line-shadow-text";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const teamMembers = [
  {
    name: "Abdus Samad Qureshi",
    role: "Co-Founder, Visionary Engineer, Project Lead",
    image: "/placeholder-person.jpg", // Replace with actual image
    linkedin: "#",
  },
  {
    name: "Vishnuraj Vishwakarma",
    role: "Co-Founder, Research & Outreach Head",
    image: "/placeholder-person.jpg", // Replace with actual image
    linkedin: "#",
  },
  {
    name: "Sahil Mane",
    role: "Co-Founder, Technical Officer, Embedded Systems Lead",
    image: "/placeholder-person.jpg", // Replace with actual image
    linkedin: "#",
  },
  {
    name: "Harsh Gupta",
    role: "Co-Founder, Chief Information Officer",
    image: "/placeholder-person.jpg", // Replace with actual image
    linkedin: "#",
  }
];

export function TeamSection() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  
  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <section id="team" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedGradientText className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our Team
          </AnimatedGradientText>
          <p className="text-xl max-w-3xl mx-auto text-neutral-500 dark:text-neutral-400">
            The innovators behind Austrange Solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <HoverBorderGradient
                containerClassName="h-full"
                className="p-1 rounded-2xl"
                as="div"
              >
                <BackgroundGradient className="h-full p-6 rounded-xl flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    <LineShadowText shadowColor={color}>
                      {member.name}
                    </LineShadowText>
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                    {member.role}
                  </p>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                </BackgroundGradient>
              </HoverBorderGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
