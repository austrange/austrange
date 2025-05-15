"use client";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { motion } from "framer-motion";
import { MacbookScroll } from "../ui/macbook-scroll";
// import { CountingNumbers } from "../ui/counting-numbers";

const sdgGoals = [
  { 
    number: 3, 
    title: "Good Health and Well-being",
    description: "Enhancing quality of life for visually impaired individuals"
  },
  { 
    number: 9, 
    title: "Industry, Innovation, and Infrastructure",
    description: "Creating accessible technology infrastructure"
  },
  { 
    number: 10, 
    title: "Reduced Inequalities",
    description: "Making technology accessible to all demographics"
  }
];

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
        
        <div className="flex flex-wrap -mx-4 mb-20">
          <div className="px-4 w-full md:w-1/3 mb-8 md:mb-0">
            <motion.div 
              className="h-64 flex flex-col items-center justify-center rounded-xl bg-white dark:bg-neutral-800 shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* <span className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                <CountingNumbers value={100} duration={2} />+
              </span> */}
              <h3 className="text-lg font-medium mb-2">Impacted Lives</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Supporting over 100 visually impaired individuals in early trials
              </p>
            </motion.div>
          </div>
          <div className="px-4 w-full md:w-1/3 mb-8 md:mb-0">
            <motion.div 
              className="h-64 flex flex-col items-center justify-center rounded-xl bg-white dark:bg-neutral-800 shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {/* <span className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                <CountingNumbers value={3} duration={1} />
              </span> */}
              <h3 className="text-lg font-medium mb-2">NGO Partnerships</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Collaborating with 3 NGOs working in the accessibility sector
              </p>
            </motion.div>
          </div>
          <div className="px-4 w-full md:w-1/3">
            <motion.div 
              className="h-64 flex flex-col items-center justify-center rounded-xl bg-white dark:bg-neutral-800 shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">100%</span>
              <h3 className="text-lg font-medium mb-2">User Satisfaction</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                Positive feedback from all early adopters of E-SIGHT
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-10 text-center">Sustainable Development Goals</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {sdgGoals.map((goal, index) => (
              <motion.div 
                key={index}
                className="relative overflow-hidden rounded-xl p-6 border border-neutral-200 dark:border-neutral-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-teal-500/20 blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-bold mr-4">
                      {goal.number}
                    </div>
                    <h4 className="text-lg font-medium">{goal.title}</h4>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400">{goal.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-10 text-center">Testimonials</h3>
          <div className="h-[40rem] w-full">
            <MacbookScroll 
              title="Hear from our users"
              src="https://via.placeholder.com/1920x1080.png?text=E-SIGHT+Testimonial+Video"
              showGradient
            />
          </div>
        </div>
      </div>
    </section>
  );
}
