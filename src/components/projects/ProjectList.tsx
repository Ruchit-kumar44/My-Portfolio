import { Project } from "@/types/Project";
import ProjectCard from "./ProjectCard";


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
    <div className={`${className}`}>
       {
        projects.map((project: Project)=>(
            <ProjectCard key={project.title} project={project}></ProjectCard>
        ))
       }
    </div>
   )
    
}