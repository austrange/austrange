"use client";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { motion } from "framer-motion";
import { Users, Telescope, Lightbulb } from "lucide-react";
import { MagicCard } from "../magicui/magic-card";
import { useTheme } from "next-themes";
export function AboutSection() {
  const { theme } = useTheme();
  return (
    <section id="about" className="relative py-20 px-4 md:px-8 lg:px-16">
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

        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-neutral-700 dark:text-neutral-300">
            Austrange Solutions is a tech innovation company with a mission to
            create accessible, inclusive technologies that solve real-world
            problems and improve quality of life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <MagicCard
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="p-6 h-56  rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700"
            >
              {" "}
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3">
                  <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">Who We Are</h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                Austrange Solutions is a tech-based private limited company
                focused on developing inclusive, sustainable, and life-enhancing
                technologies. We believe in technology as a tool for
                empowerment.
              </p>
            </MagicCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <MagicCard
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="p-6 h-56  rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                  <Telescope className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Our Vision</h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                To pioneer innovative, inclusive, and sustainable technology
                solutions that transform lives—empowering individuals, bridging
                social gaps, and setting new standards in assistive and
                human-centered technology.
              </p>
            </MagicCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MagicCard
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="p-6 h-56 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg mr-3">
                  <Lightbulb className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold">Our Mission</h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400">
                To research, develop, and deliver transformative products that
                address unmet needs in the healthcare, accessibility, and social
                innovation sectors.
              </p>
            </MagicCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
