"use client"

import { NavbarConfig } from "@/config/Nabvar"
import Link from "next/link"
import Container from "./Container"
import ThemeSwitch from "./ThemeSwitch"

export default function Navbar(){
    return(
    
      <Container className="sticky top-0 z-20  py-4 backdrop-blur-sm">
         <div className="flex justify-between items-center text-small font-bold">
            <div className="text-secondary flex items-center justify-between gap-5">
               {NavbarConfig.NavItems.map((item)=>(
                   <Link className="transition-all duration-300 hover:text-black dark:hover:text-white" href={item.href} key={item.label}>{item.label}</Link>
              ))}
           </div>
           <div className="flex items-center">
              <ThemeSwitch></ThemeSwitch>
            </div>
         </div>
      </Container>
  
    )
}