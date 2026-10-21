import Link from 'next/link';

import { Project } from '@/types/Project';

import { Separator } from '../ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      className="block space-y-4 pt-4"
      href={project.projectDetailsPageSlug}
    >
      <div>
        <h3 className="text-foreground text-[18px] font-bold">
          {project.title}
        </h3>
        <p className="text-secondary mt-1 text-sm font-medium">
          {project.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
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
  );
}
