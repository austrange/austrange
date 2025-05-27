"use client";

import { BlogPost as BlogPostType } from "@/data/blogData";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Markdown from "react-markdown";
import { TracingBeam } from "../ui/tracing-beam";
import { cn } from "@/lib/utils";

interface BlogPostProps {
  post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  // Apply syntax highlighting when content changes
  useEffect(() => {
    import('highlight.js').then((hljs) => {
      if (contentRef.current) {
        contentRef.current.querySelectorAll('pre code').forEach((block) => {
          hljs.default.highlightElement(block as HTMLElement);
        });
      }
    });
  }, [post.content]);

  return (
    <article className="relative">
      <TracingBeam className="px-4">
        {/* Back to blog link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 mb-8"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to all posts
        </Link>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            
            {/* Meta info */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{post.author.name}</div>
                  <div className="text-sm text-neutral-500">{post.author.role}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-neutral-500">
                <div className="flex items-center">
                  <CalendarDays size={16} className="mr-1" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            
            {/* Cover image */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-10">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
        
        {/* Article content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
          ref={contentRef}
        >
          <Markdown 
            components={{
              h1: ({ className, ...props }) => (
                <h1 
                  className={cn("text-3xl font-bold mt-8 mb-4", className)} 
                  {...props} 
                />
              ),
              h2: ({ className, ...props }) => (
                <h2 
                  className={cn("text-2xl font-bold mt-8 mb-4", className)} 
                  {...props} 
                />
              ),
              h3: ({ className, ...props }) => (
                <h3 
                  className={cn("text-xl font-bold mt-6 mb-3", className)} 
                  {...props} 
                />
              ),
              p: ({ className, ...props }) => (
                <p 
                  className={cn("my-4 text-neutral-700 dark:text-neutral-300", className)} 
                  {...props} 
                />
              ),
              ul: ({ className, ...props }) => (
                <ul 
                  className={cn("list-disc pl-6 my-4", className)} 
                  {...props} 
                />
              ),
              ol: ({ className, ...props }) => (
                <ol 
                  className={cn("list-decimal pl-6 my-4", className)} 
                  {...props} 
                />
              ),
              li: ({ className, ...props }) => (
                <li 
                  className={cn("mb-1", className)} 
                  {...props} 
                />
              ),
              blockquote: ({ className, ...props }) => (
                <blockquote
                  className={cn("border-l-4 border-neutral-300 dark:border-neutral-700 pl-4 italic my-6", className)}
                  {...props}
                />
              ),
              img: ({src, alt, className, ...props}) => (
                <div className="my-8 rounded-lg overflow-hidden">
                  <img
                    src={src}
                    alt={alt}
                    className={cn("w-full h-auto rounded-lg", className)}
                    {...props}
                  />
                </div>
              ),
            }}
          >
            {post.content}
          </Markdown>
        </motion.div>
      </TracingBeam>
      
      {/* Share and navigation */}
      <div className="mt-16 border-t border-neutral-200 dark:border-neutral-800 pt-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Share this article</h3>
            <div className="flex space-x-3">
              {/* Share buttons (placeholders) */}
              {['Twitter', 'Facebook', 'LinkedIn'].map(platform => (
                <button 
                  key={platform}
                  className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>
          <Link 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Read more articles
          </Link>
        </div>
      </div>
    </article>
  );
}
