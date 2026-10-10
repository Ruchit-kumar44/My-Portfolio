import { BlogPostPreview } from "@/types/Blog"
import BlogCard from "./BlogCard"

interface BlogListProps {
  posts: BlogPostPreview[],
  showTags: boolean,
  className?: string
}
// BlogList.tsx
export function BlogList({ posts, showTags = true, className = "" }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-2xl font-semibold">No blog posts found</h2>
        <p className="text-muted-foreground">Check back later for new content!</p>
      </div>
    )
  }

  return (
    <div className={`flex flex-col space-y-5 lg:space-y-3  ${className}`}>
      {posts.map((post) => (
        <BlogCard showTags={showTags} key={post.slug} post={post} />
      ))}
    </div>
  )
}