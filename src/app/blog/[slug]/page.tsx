import { BlogPost } from "@/components/Blog/BlogPost";
import { blogPosts } from "@/data/blogData";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Params = Promise<{ slug: string }>;
// Generate metadata for each blog post - use direct type annotation without interface

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;
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

// Use direct type annotation without interface for page component
export default async function BlogPostPage(props: { params: Params }) {
  const params = await props.params;
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
