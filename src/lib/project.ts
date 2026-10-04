import path from "path";
import fs from 'fs'
import { ProjectCaseStudy, ProjectCaseStudyFrontmatter, ProjectCaseStudyPreview } from "@/types/Project";
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
 export function getProjectBySlug(slug: string): ProjectCaseStudy | null{
   try{
      const fullPath = path.join(projectsDirectory, `${slug}.mdx`)

      if (!fs.existsSync(fullPath)) {
         return null;
      }

      const fileContent = fs.readFileSync(fullPath, 'utf8')
      const {data, content} = matter(fileContent)

      //validate data as fronmatter
      const frontmatter = data as ProjectCaseStudyFrontmatter
      if(!frontmatter.title || !frontmatter.description){
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

/**
 * Get all project case studies with frontmatter only (for listing)
 */
export function getAllProjectCaseStudies(): ProjectCaseStudyPreview[]{
   const slugs = getProjectCaseStudySlugs();

   const caseStudies = slugs
     .map((slug) => {
        const caseStudy = getProjectBySlug(slug); 
        if (!caseStudy) return null;

        return {
           slug: caseStudy.slug,
           frontmatter: caseStudy.frontmatter,
        };
     })
     .filter(
      (caseStudy): caseStudy is ProjectCaseStudyPreview => caseStudy !== null,
    )
    .sort((a, b) => {
      // Sort by featured first, then by title
      if (a.frontmatter.featured && !b.frontmatter.featured) return -1;
      if (!a.frontmatter.featured && b.frontmatter.featured) return 1;
      return a.frontmatter.title.localeCompare(b.frontmatter.title);
    });

   return caseStudies;
}