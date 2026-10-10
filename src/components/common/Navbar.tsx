"use client"

import { NavbarConfig } from "@/config/Nabvar"
import Link from "next/link"
import Container from "./Container"
import ThemeSwitch from "./ThemeSwitch"
import { usePathname } from "next/navigation"
import {cn} from '@/lib/utils'
import { motion, useScroll } from "motion/react"

export default function Navbar(){
   const pathName = usePathname()
   const {scrollYProgress} = useScroll()
    return(
    
      <Container className="sticky top-0 z-20  py-4 backdrop-blur-sm">
         <div className="flex justify-between items-center text-xs md:text-small font-medium">
            <div className="text-secondary flex items-center justify-between gap-5">
               {NavbarConfig.NavItems.map((item)=>{
                  const isActive = pathName === item.href;
                  return(
                   <Link href={item.href} key={item.label} className={cn("transition-all duration-300 hover:text-black dark:hover:text-white", isActive && "text-black dark:text-white")}>{item.label}</Link>
                  )
              })}
           </div>
           <div className="flex items-center">
              <ThemeSwitch></ThemeSwitch>
            </div>
         </div>
         <motion.div 
         className="absolute bottom-0 left-0 w-full h-px
         bg-linear-to-r from-indigo-500 via-purple-400 to-teal-400
         shadow-[0_1px_10px_rgba(99,102,241,0.2)]
         dark:shadow-[0_1px_10px_rgba(139,92,246,0.3)]"
         style={{scaleX: scrollYProgress, originX: 0}} />
      </Container>
  
    )
}