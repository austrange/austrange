import { blogPosts } from "@/data/blogData";
import { BlogList } from "@/components/Blog/BlogList";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { Metadata } from "next";
// import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Austrange - Blog",
  description: "Latest articles, insights and announcements from Austrange Solutions",
};

export default function BlogPage() {
  return (
    <main className="pt-28 pb-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedGradientText className="text-4xl md:text-5xl font-bold mb-4">
            Our Blog
          </AnimatedGradientText>
          <p className="text-xl max-w-2xl mx-auto text-neutral-500 dark:text-neutral-400">
            Insights, updates, and stories about assistive technology and our journey
          </p>
        </div>
        
        <BlogList posts={blogPosts} />
      </div>
    </main>
  );
}
