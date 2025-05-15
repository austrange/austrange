"use client";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { motion } from "framer-motion";
import { ShimmerButton } from "../magicui/shimmer-button";
import { BackgroundGradient } from "../ui/background-gradient";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedGradientText className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </AnimatedGradientText>
          <p className="text-xl max-w-3xl mx-auto text-neutral-500 dark:text-neutral-400">
            Have questions or want to collaborate? Reach out to us
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Email</h4>
                <p className="text-neutral-500 dark:text-neutral-400">
                  contact@austrangesolutions.com
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Phone</h4>
                <p className="text-neutral-500 dark:text-neutral-400">
                  +91-9322871984 | +91-9930420669
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Office Address</h4>
                <p className="text-neutral-500 dark:text-neutral-400">
                  [Add Registered Office Address]
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {["Facebook", "Instagram", "LinkedIn"].map((platform, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="text-neutral-600 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <BackgroundGradient className="p-px rounded-xl">
              <div className="bg-white dark:bg-neutral-900 p-8 rounded-[calc(0.75rem-1px)]">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" type="text" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" rows={4} className="mt-1" />
                  </div>
                  <ShimmerButton className="w-full">
                    <span>Send Message</span>
                  </ShimmerButton>
                </form>
              </div>
            </BackgroundGradient>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
