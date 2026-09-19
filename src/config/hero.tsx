import LinkedIn from "@/components/svgs/linkedin"
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
      href: '/contact',
      icon: 'Chat',
    },
  ],
}

export const socialLnks = [
    {
      name: "twitter",
      href: 'https://x.com/ramxcodes',
      icon: <LinkedIn/>
    },
    {
      name: "linkedin",
      href: 'https://x.com/ramxcodes',
      icon: <LinkedIn/>
    },
    {
      name: "github",
      href: 'https://x.com/ramxcodes',
      icon: <LinkedIn/>
    },
    {
      name: "mail",
      href: 'https://x.com/ramxcodes',
      icon: <LinkedIn/>
    }
]