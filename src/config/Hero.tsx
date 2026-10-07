import Github from "@/components/svgs/Github"
import LinkedIn from "@/components/svgs/Linkedin"
import Mail from "@/components/svgs/Mail"
import X from "@/components/svgs/X"

export const heroConfig = {
  name: "Ruchit thakur",
  title: "A Backend-focused Full Stack Developer.",
  avatar: "/images/animeLogo.png",

 
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