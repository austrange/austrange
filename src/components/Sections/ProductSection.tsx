"use client";
import { SparklesCore } from "../ui/sparkles";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { motion } from "framer-motion";
import { ShimmerButton } from "../magicui/shimmer-button";
import { HeroVideoDialogComponent } from "../Hero/HeroVideoDialog";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Obstacle Detection",
    description:
      "Advanced ultrasonic sensor technology to detect obstacles in the user's path with precision.",
    icon: "🔍",
  },
  {
    title: "Real-time GPS Tracking",
    description:
      "Integrated GPS for location tracking, providing peace of mind to family members.",
    icon: "🌍",
  },
  {
    title: "Emergency Alerts",
    description:
      "SOS button for instant emergency alerts sent through the companion mobile app.",
    icon: "🚨",
  },
  {
    title: "Audio Feedback",
    description:
      "Clear audio cues and alerts to provide important information to the user.",
    icon: "🔊",
  },
  {
    title: "Long Battery Life",
    description:
      "Rechargeable battery designed for extended use without frequent charging.",
    icon: "🔋",
  },
  {
    title: "Durable Design",
    description:
      "Lightweight yet durable construction for everyday use in various environments.",
    icon: "⚙️",
  },
];

const userBenefits = [
  {
    title: "Greater mobility",
    description:
      "E-SIGHT provides visually impaired individuals with enhanced navigation capabilities, helping them move confidently through various environments.",
    imgSrc: "/assets/images/mobility.jpg",
    imgAlt: "Greater mobility",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/assets/images/mobility.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Greater mobility"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    title: "Increased safety",
    description:
      "With advanced obstacle detection and warning systems, users can avoid potential hazards and navigate safely.",
    imgSrc: "/assets/images/safety.jpg",
    imgAlt: "Increased safety",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/assets/images/safety.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Increased safety"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    title: "Peace of mind for families",
    description:
      "Real-time GPS tracking and emergency alerts give family members reassurance about their loved one's safety and whereabouts.",
    imgSrc: "/assets/images/family.jpg",
    imgAlt: "Peace of mind for families",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/assets/images/family.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Peace of mind for families"
          loading="lazy"
        />
      </div>
    ),
  },
  {
    title: "Independence and dignity",
    description:
      "E-SIGHT empowers visually impaired individuals to navigate their surroundings with confidence and ease, promoting independence and dignity.",
    imgSrc: "/assets/images/dignity.jpg",
    imgAlt: "Independence and dignity",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/assets/images/dignity.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Independence and dignity"
          loading="lazy"
        />
      </div>
    ),
  },
];

export function ProductSection() {
  return (
    <section id="product" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={15}
          className="w-full h-full"
          particleColor="#8C7CF0"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedGradientText className="text-4xl md:text-5xl font-bold mb-4">
            E-SIGHT: Smart Blind Stick
          </AnimatedGradientText>
          <p className="text-xl max-w-3xl mx-auto text-neutral-500 dark:text-neutral-400">
            An advanced smart blind stick developed with cutting-edge technology
            to assist visually impaired individuals.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              {/* Replace with actual product image */}
              <div className="absolute inset-0  flex items-center justify-center">
                <Image
                  src="/assets/images/product.png"
                  alt="E-SIGHT"
                  width={500}
                  height={500}
                  className="h-full w-fit object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-3xl mb-3 block">{feature.icon}</span>
                  <h4 className="font-medium mb-2">{feature.title}</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="https://www.e-sight.tech" target="_blank">
                <ShimmerButton className="w-full md:w-auto">
                  <span className="text-sm font-medium dark:text-white">
                    Learn More About E-SIGHT
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-12 text-center">
            User Benefits
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {userBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={benefit.imgSrc}
                    alt={benefit.imgAlt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 flex items-center">
                    {index === 0 && <span className="mr-2">🚶‍♂️</span>}
                    {index === 1 && <span className="mr-2">🛡️</span>}
                    {index === 2 && <span className="mr-2">💙</span>}
                    {index === 3 && <span className="mr-2">✨</span>}
                    {benefit.title}
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href="https://www.e-sight.tech" target="_blank">
              <ShimmerButton>
                <span className="text-sm font-medium dark:text-white">
                  See More Benefits
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </motion.div>
        <div className="mt-20  mx-auto">
          <HeroVideoDialogComponent />
        </div>
      </div>
    </section>
  );
}
