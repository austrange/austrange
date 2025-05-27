import { BlogPost } from "@/components/Blog/BlogPost";
import { blogPosts } from "@/data/blogData";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

// Generate metadata for each blog post
export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((post) => post.id === params.slug);
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }
  
  return {
    title: `${post.title} | Austrange Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.id === params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <main className="pt-28 pb-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <BlogPost post={post} />
      </div>
    </main>
  );
}
