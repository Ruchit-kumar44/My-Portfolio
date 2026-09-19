import Github from "@/components/svgs/Github"
import LinkedIn from "@/components/svgs/Linkedin"
import Mail from "@/components/svgs/Mail"
import X from "@/components/svgs/X"
import Bun from "@/components/technologies/Bun"
import ExpressJs from "@/components/technologies/ExpressJs"
import NextJs from "@/components/technologies/NextJs"
import PostgreSQL from "@/components/technologies/PostgreSQL"
import ReactIcon from "@/components/technologies/ReactIcon"
import TypeScript from "@/components/technologies/TypeScript"




export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs:    NextJs,
  ExpressJs: ExpressJs,
  PostgreSQL: PostgreSQL,
  Bun:        Bun

}

export const heroConfig = {
  name: "Ruchit thakur",
  title: "A Backend-focused Full Stack Developer.",
  avatar: "/images/logo.jpg",

 
  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contacts',
      icon: 'Chat',
    },
  ],
}

export const socialLnks = [
    {
      name: "Linkedin",
      href: 'https://x.com/ramxcodes',
      icon: <LinkedIn className="text-secondary hover:text-[#0A66C2] transition-colors" />
    },
    {
      name: "X",
      href: 'https://x.com/ramxcodes',
      icon: <X/>
    },
    {
      name: "Github",
      href: 'https://x.com/ramxcodes',
      icon: <Github/>
    },
    {
      name: "Mail",
      href: 'https://x.com/ramxcodes',
      icon: <Mail/>
    }
]