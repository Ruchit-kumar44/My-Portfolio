import Link from 'next/link';

import { BlogPostPreview } from '@/types/Blog';

import { BlogList } from '../blog/BlogList';
import SectionHeading from '../common/SectioHeading';
import { Reveal } from '../motion/Reveal';
import { Button } from '../ui/button';

interface BlogPropsList {
  posts: BlogPostPreview[];
}

export default function BlogSection({ posts }: BlogPropsList) {
  return (
    <div className="pt-10">
      <SectionHeading heading="Blogs" />
      <BlogList showTags={false} posts={posts.slice(0, 3)} />
      <div className="mt-5 flex justify-center">
        <Button variant="outline">
          <Link href="/blogs">
            <span className="md:text-small text-xs">Show all blogs</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
