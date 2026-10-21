import { Project } from '@/types/Project';

import { StaggerItem, StaggerList } from '../motion/Stagger';
import ProjectCard2 from './ProjectCard2';

interface ProjectListprops {
  projects: Project[];
  className?: string;
}

export default function ProjectList({ projects, className }: ProjectListprops) {
  if (projects.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No projects found.</p>
      </div>
    );
  }

  return (
    <StaggerList
      className={`grid grid-cols-1 justify-items-center gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-3 ${className}`}
    >
      {projects.map((project: Project) => (
        <StaggerItem key={project.title}>
          <ProjectCard2 project={project}></ProjectCard2>
        </StaggerItem>
      ))}
    </StaggerList>
  );
}
