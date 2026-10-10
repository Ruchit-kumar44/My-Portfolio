import React from "react"

interface TechBadgeProps {
  name: string
  children: React.ReactNode
}

export default function TechBadge({ name, children }: TechBadgeProps) {
  return (
    <div className="group/skill relative inline-flex items-center rounded-full border border-white/30 bg-black/50 p-1.5 text-white backdrop-blur-sm transition-colors hover:z-10 hover:bg-black/80">
      <div className="size-4 shrink-0">{children}</div>
      <p className="max-w-0 overflow-hidden text-xs font-bold whitespace-nowrap opacity-0 transition-all duration-400 group-hover/skill:ml-1.5 group-hover/skill:max-w-32 group-hover/skill:opacity-100">
        {name}
      </p>
    </div>
  )
}