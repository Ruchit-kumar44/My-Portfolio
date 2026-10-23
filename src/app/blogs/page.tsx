import { Metadata } from 'next';

import { BlogList } from '@/components/blog/BlogList';
import Container from '@/components/common/Container';
import { Reveal } from '@/components/motion/Reveal';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { getPublishedBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  ...getMetadata('/blogs'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function BlogPage() {
  const posts = getPublishedBlogPosts();
  return (
    <Reveal>
      <Container className="py-12">
        <div className="space-y-8">
          <div className="">
            <h1 className="text-2xl font-bold tracking-tight">Blogs</h1>
            <p className="text-secondary text-[16px]">
              Thoughts, tutorials, and insights on engineering and programming.
            </p>
          </div>
          <Separator />
          <BlogList className='blog-list' showTags={true} posts={posts} />
        </div>
      </Container>
    </Reveal>
  );
}
