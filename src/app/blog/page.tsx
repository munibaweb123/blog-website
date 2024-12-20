import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

// BlogPost interface
interface BlogPost {
  title: string;
  description: string;
  author: string;
  image: string;
  slug: string;
}

// Fetch blog posts
async function getBlogPosts(): Promise<BlogPost[]> {
  const contentDir = path.join(process.cwd(), "content");
  const files = await fs.readdir(contentDir);

  const posts = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(contentDir, file);
      const fileContent = await fs.readFile(filePath, "utf-8");
      const { data } = matter(fileContent);

      const slug = file.replace(/\.md$/, ""); // Ensure slug is derived

      return {
        title: data.title,
        description: data.description,
        author: data.author,
        image: data.image,
        slug,
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
          <div
            key={post.slug}
            className="rounded-lg shadow-lg overflow-hidden dark:border-2 dark:bg-gray-900"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <div className="flex justify-between text-sm mb-4">
                <span>{post.author}</span>
              </div>
              <p className="mb-4">{post.description}</p>
              <Link
                href={`/blogpost/${post.slug}`}
                className={buttonVariants({ variant: "outline" })}
              >
                Click here
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
