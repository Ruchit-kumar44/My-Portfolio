import Link from 'next/link';

import { projects } from '@/config/Projects';

import SectionHeading from '../common/SectioHeading';
import ProjectList from '../projects/ProjectList';
import { Button } from '../ui/button';

export default function ProjectsSection() {
  return (
    <div className="pt-10">
      <SectionHeading heading="Projects" className="mb-1" />
      <ProjectList className="" projects={projects.slice(0, 3)} />
      <div className="mt-5 flex justify-center">
        <Button variant="outline">
          <Link href="/projects">
            <span className="md:text-small text-xs">Show all projects</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
