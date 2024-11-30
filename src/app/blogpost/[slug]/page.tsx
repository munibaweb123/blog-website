import fs from "fs"
import matter from "gray-matter"
import { notFound } from "next/navigation"
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
//   const slug = (await params).slug
 const filepath = `content/${(await params).slug}.md`
 if(!fs.existsSync(filepath)){
 notFound();
 return

 }
 const fileContent = fs.readFileSync(filepath,"utf-8")
 const {content,data} = matter(fileContent)
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h1>
          <div className="flex items-center text-gray-600 text-sm mb-6">
            <span className="mr-4 italic">
              <span className="font-semibold text-gray-900">Author:</span> By {data.author}
            </span>
          </div>
          <p className="text-gray-700 border-l-4 pl-4 border-gray-800 text-base mb-8 italic"> 
  &quot;{data.description}&quot;
</p>
          <div className="prose prose-lg max-w-none text-gray-700" 
               dangerouslySetInnerHTML={{ __html: content }}>
          </div>
        </div>
      </div>
    </div>
  )
}