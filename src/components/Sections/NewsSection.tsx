"use client";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  icon?: ReactNode;
  isActive?: boolean;
  link?: string;
}

function TimelineItem({ date, title, description, isActive = false, link }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative pl-8 sm:pl-12 py-6"
    >
      <div className="flex flex-col sm:flex-row items-start mb-1 group">
        <div className="absolute left-0 sm:left-0 flex items-center justify-center mt-1">
          <div className={cn(
            "w-4 h-4 rounded-full border-2 border-neutral-400 z-10",
            isActive ? "bg-blue-600 border-blue-600" : "bg-white dark:bg-neutral-900"
          )}></div>
          <div className="absolute h-full w-0.5 bg-neutral-300 dark:bg-neutral-700 left-2 -bottom-6 z-0"></div>
        </div>
        
        <div className="text-neutral-500 dark:text-neutral-400 text-sm font-medium mb-1 sm:mb-0 sm:mr-8 sm:w-24">
          {date}
        </div>
        <div>
          <h3 className={cn(
            "text-lg font-semibold",
            isActive ? "text-blue-600 dark:text-blue-400" : ""
          )}>
            {link ? (
              <Link href={link} className="hover:underline">
                {title}
              </Link>
            ) : title}
          </h3>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function NewsSection() {
  return (
    <section id="news" className="bg-neutral-50/50 dark:bg-neutral-900/50 py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedGradientText className="text-4xl md:text-5xl font-bold mb-4">
            News & Events
          </AnimatedGradientText>
          <p className="text-xl max-w-3xl mx-auto text-neutral-500 dark:text-neutral-400">
            Stay updated with our latest activities and achievements
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <TimelineItem
            date="March 2025"
            title="Startup Mahakumbh 2025"
            description="Selected to showcase E-SIGHT at India's largest startup event in New Delhi."
            isActive={true}
            link="#"
          />
          <TimelineItem
            date="February 2025"
            title="NETRUTVA 2025"
            description="Pitching our innovation at the NETRUTVA innovation showcase."
            link="#"
          />
          <TimelineItem
            date="January 2025"
            title="MSSU i-Spark Foundation"
            description="Selected for incubation program focused on social impact startups."
            link="#"
          />
          <TimelineItem
            date="December 2024"
            title="E-SIGHT Beta Launch"
            description="Successfully launched the beta version of our product with 50 early testers."
          />
          <TimelineItem
            date="October 2024"
            title="NGO Partnership Announcement"
            description="Formed strategic partnerships with three leading NGOs in the accessibility sector."
          />
        </div>
      </div>
    </section>
  );
}
