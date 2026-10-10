import { Project } from "@/types/Project";
import ProjectCard2 from "./ProjectCard2";


interface ProjectListprops {
    projects: Project[],
    className? : string
}

export default function ProjectList({projects, className}: ProjectListprops){
   if(projects.length===0){
    return(
        <div className="py-8 text-center">
        <p className="text-muted-foreground">No projects found.</p>
      </div>
    );
   }

   return(
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-3  ${className}`}>
       {
        projects.map((project: Project)=>(
            <ProjectCard2 key={project.title} project={project}></ProjectCard2>
        ))
       }
    </div>
   )
    
}