import fs from "fs"
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import matter from "gray-matter"
import { notFound } from "next/navigation"
import rehypePrettyCode from "rehype-pretty-code"
import { transformerCopyButton } from '@rehype-pretty/transformers'

// Define the type for the props
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({
  params,
}: PageProps) {
  // Await the params since it's a Promise
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const filepath = `content/${slug}.md`;

  // Check if the file exists, and return a 404 page if not
  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  // Read the content of the markdown file
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  // Process the markdown content into HTML using unified and rehype
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: '👋🌍' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypePrettyCode, {
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
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
              <span className="font-semibold">Author:</span> By {data.author}
            </span>
          </div>
          <p className="border-l-4 pl-4 dark:border-gray-50 border-gray-900 text-base mb-8 italic">
            &quot;{data.description}&quot;
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
