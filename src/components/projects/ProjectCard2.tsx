import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/Project";
import TechBadge from "../common/TechBadge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard2({ project }: ProjectCardProps) {
  const { image, title, projectDetailsPageSlug, technologies } = project;

  return (
    <Link
      href={projectDetailsPageSlug}
      className="relative block w-79 h-50 overflow-hidden rounded-lg border"
    >
      <Image
        src={image || "/project/notesbuddy.png"}
        alt={title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />

      <div className="absolute  inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent space-y-1 p-2">
          <h3 className="text-[17px] font-black text-white">{title}</h3>
          <div className="flex shrink-0 items center -space-x-3">
            {technologies.map((technology) => (
              <TechBadge
                key={technology.name}
                name={technology.name}
                children={technology.icon}
              />
            ))}
          </div>
        </div>
    </Link>
  );
}
