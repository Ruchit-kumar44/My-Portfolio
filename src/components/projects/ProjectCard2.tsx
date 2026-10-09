import Image from "next/image"
import Link from "next/link"
import { Project } from "@/types/Project"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard2({ project }: ProjectCardProps) {
  const { image, title, projectDetailsPageSlug } = project

  return (
    <Link
      href={projectDetailsPageSlug}
      className="relative block w-79 h-50  overflow-hidden rounded-lg border"
    >
      <Image
        src={image || "/project/notesbuddy.png"}
        alt={title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-3">
        <h4 className="text-sm font-black text-white">{title}</h4>
        <span className="mt-1 inline-block rounded-lg bg-black px-2 py-0.5 text-[13px] text-white dark:bg-white dark:text-black">
          e-commerce-platform
        </span>
      </div>
    </Link>
  )
}