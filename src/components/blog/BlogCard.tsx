import { BlogPostPreview } from "@/types/Blog"
import Link from "next/link"
import ArrowRight from "../svgs/ArrowRight"
import { Badge } from "../ui/badge"
import Calender from "../svgs/Calender"

interface BlogCardProps {
  post: BlogPostPreview
  showTags: boolean
}

export default function BlogCard2({ post, showTags = true }: BlogCardProps) {
  const { slug, frontmatter } = post
  const { title, description, tags, date } = frontmatter

  const formattedDate = new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link className="group w-full pb-4" href={`/blogs/${slug}`}>
          <h3 className="text-foreground text-[18px] font-bold">
        {title}
      </h3>
      <p className="text-secondary text-sm font-medium mt-1">{description}</p>
      
      <div className="flex justify-between items-end lg:items-center">
      <div>
      <div className="py-1 text-secondary w-full flex flex-wrap justify-between items-center gap-2">
        {showTags &&
          <div className="flex flex-wrap gap-2">
          {tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs text-secondary rounded-sm">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs rounded-sm">
              +{tags.length - 3} more
            </Badge>
          )}
        </div>
        }
      </div>
      <time className="text-secondary flex items-center gap-2 text-xs" dateTime={date}>
        <Calender className="size-4" /> {formattedDate}
      </time>
      </div>
       <p className="flex text-secondary items-center gap-1 text-sm font-medium">
          read more <ArrowRight className="size-4" />
        </p>
       </div>
    </Link>
  )
}