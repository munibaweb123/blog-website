import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link';
import React from 'react';
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter"

// Define interface for blog post structure
interface BlogPost {
  title: string;
  description: string;
  author: string;
  image: string;
  slug: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  const contentDir = path.join(process.cwd(), 'content');
  const files = await fs.readdir(contentDir);
  
  const posts = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(contentDir, file);
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const { data } = matter(fileContent);
      
      // Ensure the data matches the BlogPost interface
      return {
        title: data.title,
        description: data.description,
        author: data.author,
        image: data.image,
        slug: data.slug
      } as BlogPost;
    })
  );
  
  return posts;
}

const Blog = async () => {
  const blogPosts = await getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.slug} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <div className="flex justify-between text-gray-600 text-sm mb-4">
                <span>{post.author}</span>
              </div>
              <p className="text-gray-700 mb-4">{post.description}</p>
              
              <Link href={`/blogpost/${post.slug}`} className={buttonVariants({ variant: "outline" })}>
                Click here
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog