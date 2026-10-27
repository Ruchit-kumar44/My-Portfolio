import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@/types/Project';

import TechBadge from '../common/TechBadge';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard2({ project }: ProjectCardProps) {
  const { image, title, projectDetailsPageSlug, technologies } = project;

  return (
    <Link
      data-sound="click"
      href={projectDetailsPageSlug}
      className="duration-0.8 relative block h-50 w-79 overflow-hidden rounded-lg transition-transform ease-out hover:scale-101"
    >
      <Image
        src={image || '/project/notesbuddy.png'}
        alt={title}
        fill
        preload={true}
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />

      <div className="absolute inset-x-0 bottom-0 space-y-1 bg-linear-to-t from-black/70 to-transparent p-2">
        <h3 className="text-[17px] font-black text-white">{title}</h3>
        <div className="items center flex shrink-0 -space-x-3">
          {technologies.map((technology) => (
            <TechBadge
              key={technology.name}
              name={technology.name}>{technology.icon}</TechBadge>
          ))}
        </div>
      </div>
    </Link>
  );
}
