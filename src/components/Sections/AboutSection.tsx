"use client";
import { BackgroundGradient } from "../ui/background-gradient";
import { TracingBeam } from "../ui/tracing-beam";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <TracingBeam>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <AnimatedGradientText className="text-4xl md:text-5xl font-bold mb-4">
              About Us
            </AnimatedGradientText>
            <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto"></div>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <BackgroundGradient className="p-6 h-full rounded-xl">
                <h3 className="text-xl font-bold mb-3">Who We Are</h3>
                <p className="text-neutral-500 dark:text-neutral-400">
                  Austrange Solutions is a tech-based private limited company focused on developing inclusive, sustainable, and life-enhancing technologies. We believe in technology as a tool for empowerment.
                </p>
              </BackgroundGradient>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <BackgroundGradient className="p-6 h-full rounded-xl">
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-neutral-500 dark:text-neutral-400">
                  To pioneer innovative, inclusive, and sustainable technology solutions that transform lives—empowering individuals, bridging social gaps, and setting new standards in assistive and human-centered technology.
                </p>
              </BackgroundGradient>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <BackgroundGradient className="p-6 h-full rounded-xl">
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-neutral-500 dark:text-neutral-400">
                  To research, develop, and deliver transformative products that address unmet needs in the healthcare, accessibility, and social innovation sectors.
                </p>
              </BackgroundGradient>
            </motion.div>
          </motion.div>
        </div>
      </TracingBeam>
    </section>
  );
}
