import { Navlink } from "@/types/Navbar"

export const NavbarConfig = {
    NavItems: [
        {
            label: 'Home',
            href: '/'
        },
       
     {
      label: 'Projects',
      href: '/projects',
     },
     {
      label: 'Blogs',
      href: '/blogs',
     },
     {
      label: 'Resume',
      href: '/resume',
    },
    
 ] as Navlink[],
}