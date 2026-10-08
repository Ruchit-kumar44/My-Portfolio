import { Project } from "@/types/Project"
import Image from "next/image";
import Link from "next/link";
import Github from "../svgs/Github";
import Website from "../svgs/Website";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface ProjectCardProps {
    project: Project;

}
export default function ProjectCard2({project}: ProjectCardProps){
    const {image} = project
    return(
        <Link href={project.projectDetailsPageSlug} className="relative object-center w-79 h-50 border rounded-lg overflow-hidden">
         <Image
         src={project.image || "/project/notesbuddy.png"}
         alt="project image"
         height={50}
         width={100}
         className="w-full h-full absolute z-10"
         />
        <div className="absolute bottom-0 left-0 w-full z-20 px-2 pb-2  flex justify-between items-end">
            <div className="">
                <h4 className="text-foreground font-black text-small">{project.title}</h4>
               <span className=" px-2 py-0.5 text-[13px] rounded-lg bg-black dark:bg-white text-white dark:text-black">e-commerce-platform</span>
           </div>
       </div>
        </Link>
    )
}
