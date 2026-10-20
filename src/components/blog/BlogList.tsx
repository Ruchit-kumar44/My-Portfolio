import { BlogPostPreview } from "@/types/Blog"
import BlogCard from "./BlogCard"
import { StaggerItem, StaggerList } from "../motion/Stagger"

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
    <StaggerList className={`flex flex-col space-y-5 lg:space-y-5  ${className}`}>
      {posts.map((post) => (
        <StaggerItem  key={post.slug}>
        <BlogCard showTags={showTags} post={post} />
        </StaggerItem>
      ))}
    </StaggerList>
  )
}