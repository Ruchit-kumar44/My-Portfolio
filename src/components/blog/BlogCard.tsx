import Link from 'next/link';

import { BlogPostPreview } from '@/types/Blog';

import ArrowRight from '../svgs/ArrowRight';
import Calender from '../svgs/Calender';
import { Badge } from '../ui/badge';

interface BlogCardProps {
  post: BlogPostPreview;
  showTags: boolean;
}

export default function BlogCard2({ post, showTags = true }: BlogCardProps) {
  const { slug, frontmatter } = post;
  const { title, description, tags, date } = frontmatter;

  const formattedDate = new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link className="group w-full pb-4" href={`/blogs/${slug}`}>
      <h3 className="text-foreground text-[16px] font-bold md:text-[18px]">
        {title}
      </h3>
      <p className="text-secondary md:text-small mt-1 text-xs font-medium">
        {description}
      </p>

      <div className="flex items-end justify-between lg:items-center">
        <div>
          <div className="text-secondary flex w-full flex-wrap items-center justify-between gap-2 py-1">
            {showTags && (
              <div className="flex flex-wrap gap-2">
                {tags.slice(0, 2).map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-secondary rounded-sm text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
                {tags.length > 3 && (
                  <Badge variant="outline" className="rounded-sm text-xs">
                    +{tags.length - 3} more
                  </Badge>
                )}
              </div>
            )}
          </div>
          <time
            className="text-secondary flex items-center gap-2 text-xs"
            dateTime={date}
          >
            <Calender className="size-4" /> {formattedDate}
          </time>
        </div>
        <p className="text-secondary md:text-small flex items-center gap-1 text-xs font-medium">
          read more <ArrowRight className="size-4" />
        </p>
      </div>
    </Link>
  );
}
