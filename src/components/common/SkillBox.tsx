import React from 'react';

interface skillProps {
  name: string;
  href?: string;
  children: React.ReactNode;
}
export default function SkillBox({ name, children }: skillProps) {
  return (
    <div className="skill-inner-shadow text-small inline-flex items-center self-end rounded-md border border-black/20 bg-black/5 px-1 text-black dark:border-white/30 dark:bg-white/15 dark:text-white">
      <div className="size-3 shrink-0">{children}</div>
      <p className="ml-1.5 text-[12px] font-bold">{name}</p>
    </div>
  );
}
