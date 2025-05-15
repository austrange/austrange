"use client";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { motion } from "framer-motion";
import { HoverEffect } from "../ui/card-hover-effect";
import { ShimmerButton } from "../magicui/shimmer-button";

const partners = [
  {
    title: "NGOs in Assistive Care",
    description: "Partner with us to deploy E-SIGHT to those who need it most",
    link: "https://www.example.com/ngo-partners",
  },
  {
    title: "Government Bodies",
    description: "Collaborate on accessibility initiatives and inclusive policies",
    link: "https://www.example.com/government-partners",
  },
  {
    title: "Investors & Grant Bodies",
    description: "Support our mission to create impactful assistive technologies",
    link: "https://www.example.com/investor-partners",
  },
  {
    title: "Academic Institutions",
    description: "Join us in research collaborations and student projects",
    link: "https://www.example.com/academic-partners",
  },
];

export function CollaborateSection() {
  return (
    <section id="collaborate" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedGradientText className="text-4xl md:text-5xl font-bold mb-4">
            Collaborate With Us
          </AnimatedGradientText>
          <p className="text-xl max-w-3xl mx-auto text-neutral-500 dark:text-neutral-400">
            Join us in our mission to create transformative assistive technologies
          </p>
        </motion.div>
        
        <div className="mb-16">
          <HoverEffect items={partners.map(partner => ({
            title: partner.title,
            description: partner.description,
            link: partner.link,
          }))} />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Ready to Make an Impact Together?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-neutral-500 dark:text-neutral-400">
            We&apos;re looking for partners who share our vision of creating accessible 
            technology solutions that empower lives.
          </p>
          <ShimmerButton>
            <span className="text-sm font-medium">Contact Us for Partnerships</span>
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  );
}
