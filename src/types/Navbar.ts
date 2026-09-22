export type Navlink= {
    label: string
    href: string
}

export type SocialLink = {
  label: string
  url: string
  icon?: string
}

export type HeroConfig = {
  name: string
  role: string
  bio: string
  socials: SocialLink[]
}