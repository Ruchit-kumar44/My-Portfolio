import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import Image from "next/image"
import { getBlogPostBySlug, getBlogPostsSlugs } from "@/lib/blog"

export async function generateStaticParams() {
  return getBlogPostsSlugs().map((slug) => ({ slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post || !post.frontmatter.isPublished) {
    notFound()
  }

  const { title, description, image, date, tags } = post.frontmatter

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-secondary mb-2">{description}</p>
      <p className="text-secondary text-sm mb-8">
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        {" · "}
        {tags.join(", ")}
      </p>

      <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </div>
  )
}