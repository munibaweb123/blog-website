import fs from "fs/promises";
import path from "path";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";

// Define the type for the props
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Blog post page
export default async function Page({ params }: PageProps) {
  // Await the params as it is a Promise
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Construct the filepath for the markdown file
  const filepath = path.join(process.cwd(), "content", `${slug}.md`);

  try {
    // Check if the file exists
    await fs.access(filepath);
  } catch {
    // If the file doesn't exist, return a 404 page
    notFound();
    return null; // Return null since we have already sent a 404 response
  }

  // Read the content of the markdown file
  const fileContent = await fs.readFile(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  // Process the markdown content into HTML using unified and rehype
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: data.title || "Blog Post" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypePrettyCode, {
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3000, // 3 seconds
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  // Return the JSX for the blog post page
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-lg shadow-lg overflow-hidden dark:bg-gray-900">
        <div className="px-6 py-8">
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <div className="flex items-center text-sm mb-6">
            <span className="mr-4 italic">
              <span className="font-semibold">Author:</span> {data.author || "Unknown"}
            </span>
          </div>
          <p className="border-l-4 pl-4 dark:border-gray-50 border-gray-900 text-base mb-8 italic">
            &quot;{data.description || "No description provided."}&quot;
          </p>
          <div
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          ></div>
        </div>
      </div>
    </div>
  );
}
