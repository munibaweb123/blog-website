// api/getPost/page.tsx
import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface FrontMatter {
  title?: string;
  date?: string;
  description?: string;
  // Add other expected frontmatter fields here
}

interface PostData {
  content: string;
  data: FrontMatter;
}

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<PostData | {message: string}>
) {
  const { slug } = req.query
  const filepath = path.join(process.cwd(), 'content', `${slug as string}.md`)

  if (!fs.existsSync(filepath)) {
    return res.status(404).json({ message: 'Not Found' })
  }

  const fileContent = fs.readFileSync(filepath, 'utf-8')
  const { content, data } = matter(fileContent)
  return res.status(200).json({ content, data })
}
