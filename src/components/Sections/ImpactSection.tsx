"use client";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { motion } from "framer-motion";
import { Users, Building, LineChart, Quote } from "lucide-react";

export function ImpactSection() {
  return (
    <section id="impact" className="bg-neutral-50/50 dark:bg-neutral-900/50 py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedGradientText className="text-4xl md:text-5xl font-bold mb-4">
            Our Impact
          </AnimatedGradientText>
          <p className="text-xl max-w-3xl mx-auto text-neutral-500 dark:text-neutral-400">
            Creating meaningful change through innovation and accessibility
          </p>
        </motion.div>
        
        {/* Impact Metrics - Redesigned with icons and better layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden"
          >
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2" />
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Lives Impacted</h3>
                <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">
                  <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-purple-600 dark:text-purple-400">100+</span>
                <span className="ml-2 text-neutral-500 dark:text-neutral-400">individuals</span>
              </div>
              <p className="mt-4 text-neutral-500 dark:text-neutral-400">
                Supporting over 100 disabled individuals during early trials
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-2" />
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">NGO Partnerships</h3>
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                  <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">3</span>
                <span className="ml-2 text-neutral-500 dark:text-neutral-400">organizations</span>
              </div>
              <p className="mt-4 text-neutral-500 dark:text-neutral-400">
                Collaborating with 3 NGOs working in the accessibility sector
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden"
          >
            <div className="bg-gradient-to-r from-teal-500 to-green-500 h-2" />
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">User Satisfaction</h3>
                <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full">
                  <LineChart className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
              </div>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-teal-600 dark:text-teal-400">100%</span>
                <span className="ml-2 text-neutral-500 dark:text-neutral-400">positive feedback</span>
              </div>
              <p className="mt-4 text-neutral-500 dark:text-neutral-400">
                Positive feedback from all early adopters of E-SIGHT
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* SDG Goals - Improved design */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 md:p-12 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-center">Sustainable Development Goals</h3>
            <p className="text-center max-w-3xl mx-auto mb-12 text-neutral-600 dark:text-neutral-300">
              Our innovation aligns with key UN Sustainable Development Goals, focusing on creating positive impact
            </p>
            
            <div className="grid md:grid-cols-3 gap-10 mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-start"
              >
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-red-100 h-16 w-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">SDG 3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">Good Health and Well-being</h4>
                  </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Enhancing quality of life for disabled individuals
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-start"
              >
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-orange-100 h-16 w-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold">SDG 9</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">Industry, Innovation, and Infrastructure</h4>
                  </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Creating accessible technology infrastructure
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-start"
              >
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-blue-100 h-16 w-16 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">SDG 10</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">Reduced Inequalities</h4>
                  </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Making technology accessible to all demographics
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Testimonials - New proper design */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-10 text-center">What People Say</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "E-SIGHT has transformed my daily life, giving me confidence to navigate independently.",
                author: "Rahul M.",
                role: "Early User",
                image: "/assets/images/testimonial1.jpg" // Replace with actual image path
              },
              {
                quote: "The technology is remarkable and has helped many of our organization's beneficiaries.",
                author: "Dr. Preeti Singh",
                role: "Vision Care NGO Director",
                image: "/assets/images/testimonial2.jpg" // Replace with actual image path
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md relative"
              >
                <div className="absolute top-6 left-6">
                  <Quote className="text-neutral-300 dark:text-neutral-700 w-10 h-10" />
                </div>
                <div className="pt-8 pl-6">
                  <p className="text-neutral-600 dark:text-neutral-300 italic mb-6">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden mr-4">
                      {/* <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" /> */}
                      <div className="w-full h-full flex items-center justify-center text-neutral-500">
                        {testimonial.author[0]}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
