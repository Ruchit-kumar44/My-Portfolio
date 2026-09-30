
export interface BlogsFrontmatter{
    title: string,
    description: string,
    image: string,
    tags: string[],
    date: string,
    isPublished: boolean
}


export interface BlogPost {
    slug: string,
    frontmatter: BlogsFrontmatter,
    content: string
}

export interface BlogPostPreview {
    slug: string,
    frontmatter: BlogsFrontmatter
}