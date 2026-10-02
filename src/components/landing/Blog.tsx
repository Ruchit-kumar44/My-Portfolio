import { BlogPostPreview } from "@/types/Blog";
import { BlogList } from "../blog/BlogList";
import SectionHeading from "../common/SectioHeading";
import { Button } from "../ui/button";
import Link from "next/link";

interface BlogPropsList {
    posts: BlogPostPreview[],
}

export default function BlogSection({posts}: BlogPropsList){
    return(
        <div className="py-10">
            <SectionHeading heading = "Blogs" />
            <BlogList showTags={false} posts={posts.slice(0, 3)}  />
            <div className="mt-5 flex justify-center">
            <Button variant="outline" >
                <Link href='/blogs'>Show all blogs</Link>
            </Button>
          </div>
        </div>
    )
}