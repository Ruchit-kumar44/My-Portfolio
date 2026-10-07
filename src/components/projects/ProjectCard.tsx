import { Project } from "@/types/Project";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface ProjectCardProps{
    project: Project;
}

export default function ProjectCard({project}: ProjectCardProps){

    return (
        <Link className=" block pt-4 space-y-4" href={project.projectDetailsPageSlug}>
            <div>
               <h3 className="text-foreground text-[18px] font-bold">{project.title}</h3>
               <p className="text-secondary text-sm font-medium mt-1">{project.description}</p>
               <div className="flex flex-wrap gap-2 mt-2">
                   {project.technologies.map((technology) => (
                   <Tooltip key={technology.name}>
                      <TooltipTrigger asChild>
                          <div className="size-5 transition-all duration-300 hover:scale-110">
                              {technology.icon}
                          </div>
                       </TooltipTrigger>
                      <TooltipContent>{technology.name}</TooltipContent>
                   </Tooltip>
                   ))}
                </div>
            </div>
            <Separator></Separator>
        </Link>
    )
}