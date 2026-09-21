import Github from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/Linkedin";
import Mail from "@/components/svgs/Mail";
import X from "@/components/svgs/X";

export const FooterConfig = {
  name: "Ruchit thakur.",
  copyright: "All rights reserved.",
};

export const PageLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Resume",
    href: "/resume",
  },

  {
    label: "Projects",
    href: "/projects",
  },

  {
    label: "Blogs",
    href: "/blogs",
  },

  {
    label: "Contact",
    href: "/contact",
  },

  {
    label: "Movies",
    href: "/movies",
  },
];

export const footerSocialLinks = [
    {
        name: "Twitter",
        href: 'https://x.com/ramxcodes',
        icon: <X className="size-5"/>
    },

    {
        name: "Linkedin",
        href: 'https://x.com/ramxcodes',
        icon: <LinkedIn className="size-5"/>
    },

    {
        name: "Github",
        href: 'https://x.com/ramxcodes',
        icon: <Github className="size-5"/>
    },

    {
        name: "Mail",
        href: 'https://x.com/ramxcodes',
        icon: <Mail className="size-5"/>
    }
]