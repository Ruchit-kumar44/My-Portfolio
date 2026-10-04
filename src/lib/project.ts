import path from "path";
import fs from 'fs'
import { ProjectCaseStudy, ProjectCaseStudyFrontmatter } from "@/types/Project";
import matter from "gray-matter";



const projectsDirectory = path.join(process.cwd(), 'src/data/projects')

//fn to get all flies from projects directory 

export function getProjectCaseStudySlugs(): string[]{
    if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(projectsDirectory)
  return files
    .filter((file)=> file.endsWith('.mdx'))
    .map((file)=> file.replace(/\.mdx$/, ''))
}

/**
 * Get project case study by slug with full content
 */
 export function getProjecBySlug(slug: string): ProjectCaseStudy | null{
    try{
        const fullPath = path.join(`${projectsDirectory}, ${slug}.mdx`)

        if (!fs.existsSync(fullPath)) {
            return null;
       }

       const fileContent = fs.readFileSync(fullPath, 'utf8')
       const {data, content} = matter(fileContent)

       //validate data as fronmatter
       const frontmatter = data as ProjectCaseStudyFrontmatter
       if(!frontmatter.title || frontmatter.description){
          throw new Error(`Invalid frontmatter in ${slug}.mdx`);
       }

       return {
        slug,
        frontmatter,
        content
       }
    } catch (error) {
       console.error(`Error reading project case study ${slug}:`, error);
       return null;
    }   
 }