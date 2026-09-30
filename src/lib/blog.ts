import path from "path";
import fs from 'fs'
import { BlogPost, BlogsFrontmatter } from "@/types/Blog";
import matter from "gray-matter";




const blogDirectory = path.join(process.cwd(), 'src/data/blog');

export function getBlogPostsSlug(): string[]{
   if(!fs.existsSync(blogDirectory)){
    return []
   }

   const files = fs.readdirSync(blogDirectory)
   return files
   .filter((file)=> file.endsWith('.mdx'))
   .map((file)=> file.replace(/\.mdx$/, ''));
}

/**
 * Get blog post by slug with full content
 */

export function getBlogPostBySlug(slug: string): BlogPost | null{
    try {
       const fullPath = path.join(blogDirectory, `${slug}.mdx`);

       if(!fs.existsSync(fullPath)){
        return null
       }

       const fileContents = fs.readFileSync(fullPath, 'utf8')
       const {data, content} = matter(fileContents);

       const frontmatter = data as BlogsFrontmatter
       if(!frontmatter.title || !frontmatter.description){
        throw new Error(`Invalid frontmatter in ${slug}.mdx`);
       }
       return {
        content, slug, frontmatter
       };
    } catch(error){
        console.error(`Error reading blog post ${slug}:`, error);
        return null;
    }
}