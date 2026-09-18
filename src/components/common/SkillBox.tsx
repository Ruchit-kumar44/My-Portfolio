import React from "react";
import Link from "next/link"

interface skillProps{
    name: string;
    href: string;
    children: React.ReactNode;
}
export default function SkillBox({name, href, children}:skillProps){

    return(
       <Link href={href} 
       target="blank"
       className="skill-inner-shadow inline-flex items-center self-end rounded-md border  border-black/20 bg-black/5 px-1  text-small text-black dark:border-white/30 dark:bg-white/15 dark:text-white"
       >
        <div className="size-3 shrink-0">
           {children}
        </div>
        <p className="ml-1.5 text-[12px] font-bold">{name}</p>
       </Link>
    )
}