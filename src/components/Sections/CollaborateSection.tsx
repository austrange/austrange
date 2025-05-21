/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { motion } from "framer-motion";
import { ShimmerButton } from "../magicui/shimmer-button";
import { Building, Users, TrendingUp, School } from "lucide-react";

const partners = [
  {
    title: "NGOs in Assistive Care",
    description: "Partner with us to deploy E-SIGHT to those who need it most",
    icon: <Users className="w-5 h-5" />,
    color: "from-blue-500 to-sky-300"
  },
  {
    title: "Government Bodies",
    description: "Collaborate on accessibility initiatives and inclusive policies",
    icon: <Building className="w-5 h-5" />,
    color: "from-purple-500 to-pink-300"
  },
  {
    title: "Investors & Grant Bodies",
    description: "Support our mission to create impactful assistive technologies",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "from-emerald-500 to-green-300"
  },
  {
    title: "Academic Institutions",
    description: "Join us in research collaborations and student projects",
    icon: <School className="w-5 h-5" />,
    color: "from-orange-500 to-yellow-300"
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
        
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl relative overflow-hidden"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-70 p-0.5" 
                style={{ 
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  backgroundSize: "200% auto",
                  animation: "shimmer 2s linear infinite",
                  ["--tw-gradient-from" as any]: partner.color.split(" ")[0].replace("from-", ""),
                  ["--tw-gradient-to" as any]: partner.color.split(" ")[1].replace("to-", "")
                }}
              />
              
              <a 
                href={"#contact"}
                className="block h-full bg-white dark:bg-neutral-900 rounded-lg m-0.5 p-6 relative transition-all"
              >
                {/* Icon with gradient background */}
                <div className={`w-10 h-10 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${partner.color} text-white`}>
                  {partner.icon}
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">{partner.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4">
                  {partner.description}
                </p>
                
                <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20"></div>
          
          <div className="relative z-10 py-12 px-6 md:py-16 md:px-12 text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Make an Impact Together?</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300">
              We&apos;re looking for partners who share our vision of creating accessible 
              technology solutions that empower lives. Your collaboration can help us reach 
              more individuals in need.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <ShimmerButton className="px-8">
                <span className="text-sm font-medium dark:text-white">Contact Us for Partnerships</span>
              </ShimmerButton>
              
              <a href="#contact" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 flex items-center">
                Learn about our process
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="hidden md:block absolute top-6 left-6 w-16 h-16 rounded-full bg-purple-500/10 blur-xl"></div>
          <div className="hidden md:block absolute bottom-6 right-6 w-20 h-20 rounded-full bg-blue-500/10 blur-xl"></div>
        </motion.div>
      </div>
    </section>
  );
}
