import { BlogList } from "@/components/blog/BlogList";
import Container from "@/components/common/Container";
import { Separator } from "@/components/ui/separator";
import { generateMetadata as getMetadata } from "@/config/Meta";
import { getPublishedBlogPosts } from "@/lib/blog";
import { Metadata } from "next";


export const metadata: Metadata = {
  ...getMetadata("/blogs"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function BlogPage() {
  const posts = getPublishedBlogPosts()
  return (
    <Container className="py-12">
      <div className="space-y-8">
       <div className="">
         <h1 className="font-bold tracking-tight text-2xl">
            Blogs
          </h1>
          <p className="text-secondary text-[16px]">
           Thoughts, tutorials, and insights on engineering and programming.
          </p>
       </div>
       <Separator/>
       <BlogList showTags={true} posts={posts} />
      </div>
    </Container>
  );
}
