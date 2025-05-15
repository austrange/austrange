"use client";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GlowingStarsBackgroundCard } from "../ui/glowing-stars";

const innovations = [
  {
    title: "Smart Mobility Solutions",
    description: "Next-generation mobility aids for differently-abled individuals using AI and IoT technologies.",
    icon: "🦿",
    gradient: "from-blue-600 to-cyan-400"
  },
  {
    title: "AI-powered Health Diagnostics",
    description: "Affordable diagnostic tools utilizing artificial intelligence for early disease detection.",
    icon: "🩺",
    gradient: "from-purple-600 to-pink-400"
  },
  {
    title: "Rural IoT Solutions",
    description: "Low-cost, high-impact IoT devices designed specifically for rural communities and their unique needs.",
    icon: "🌾",
    gradient: "from-amber-600 to-yellow-400"
  }
];

export function RnDSection() {
  return (
    <section id="rnd" className="bg-neutral-50/50 dark:bg-neutral-900/50 py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedGradientText className="text-4xl md:text-5xl font-bold mb-4">
            R&D and Innovation
          </AnimatedGradientText>
          <p className="text-xl max-w-3xl mx-auto text-neutral-500 dark:text-neutral-400">
            We&apos;re building future-ready products that address critical social needs
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {innovations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlowingStarsBackgroundCard>
                <div className="p-6">
                  <div className="mb-4 text-4xl">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-neutral-500 dark:text-neutral-400">
                    {item.description}
                  </p>
                  
                  <div className="mt-6">
                    <div className={cn(
                      "h-1.5 w-full rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-700",
                    )}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "70%" }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className={cn(
                          "h-full rounded-full bg-gradient-to-r",
                          item.gradient
                        )}
                      />
                    </div>
                    <p className="text-xs mt-2 text-neutral-500 dark:text-neutral-400">
                      Research progress: 70%
                    </p>
                  </div>
                </div>
              </GlowingStarsBackgroundCard>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-neutral-800 rounded-xl p-8 md:p-12 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Innovation Approach</h3>
              <p className="text-neutral-500 dark:text-neutral-400 mb-6">
                At Austrange Solutions, we follow a human-centered design approach that puts users at the heart of our innovation process.
              </p>
              <ul className="space-y-3">
                {[
                  "Identify real-world problems through field research",
                  "Co-create solutions with end-users",
                  "Develop sustainable and affordable technology",
                  "Iterate based on continuous feedback",
                  "Scale solutions with strategic partnerships"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-teal-500/30 rounded-xl flex items-center justify-center">
                {/* Placeholder for innovation process image or diagram */}
                <span className="text-2xl">Innovation Process</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
