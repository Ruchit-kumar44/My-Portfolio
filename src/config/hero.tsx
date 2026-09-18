import LinkedIn from "@/components/svgs/linkedin"
import ExpressJs from "@/components/technologies/ExpressJs"
import NextJs from "@/components/technologies/NextJs"
import ReactIcon from "@/components/technologies/ReactIcon"
import TypeScript from "@/components/technologies/TypeScript"




export const skillComponent = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs:    NextJs,
  ExpressJs: ExpressJs
}

export const heroConfig = {
  name: "Ruchit thakur",
  title: "A Backend-focused Full Stack Developer.",
  avatar: "/images/logo.jpg",

  // skills configration
  skills: [
    {
      name: 'TypeScript',
      href: "https://typescript.dev/",
      Component: 'TypeScript'
    },
    {
     name: 'React',
     href: "https://react.dev/",
     Component: 'ReactIcon'
    },
    {
     name: 'NextJs',
     href: "https://react.dev/",
     Component: 'NextJs'
    },
    {
     name: 'ExpressJs',
     href: "https://react.dev/",
     Component: 'ExpressJs'
    }
  ],

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