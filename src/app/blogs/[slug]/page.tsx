import { BlogContent } from "@/components/blog/BlogContent"
import Container from "@/components/common/Container"
import ArrowLeft from "@/components/svgs/ArrowLeft"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { siteConfig } from "@/config/Meta"
import { getBlogPostBySlug, getBlogPostsSlugs } from "@/lib/blog"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

// export async function generateStaticParams() {
//   const slugs = getBlogPostsSlugs()
//   return slugs.map((slug) => ({ slug }))
// }

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post || !post.frontmatter.isPublished) {
    return { title: "Post Not Found" }
  }

  const { title, description, image } = post.frontmatter

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}


export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post || !post.frontmatter.isPublished) {
    notFound()
  }

  return (
    <Container className="py-16">
      <div className="space-y-12">
        <div>
          <Button variant="ghost" asChild className="group">
            <Link href="/blogs" className="flex items-center space-x-2">
              <ArrowLeft className="size-4" />
              <span>Back to Blog</span>
            </Link>
          </Button>
        </div>

        <BlogContent frontmatter={post.frontmatter} content={post.content} />

        <div className="text-center">
          <Separator className="mb-8" />
          <Button asChild size="lg">
            <Link href="/blogs">View All Blogs</Link>
          </Button>
        </div>
      </div>
    </Container>
  )
}