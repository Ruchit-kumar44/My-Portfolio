import Container from "@/components/common/Container";
import AboutSection from "@/components/landing/About";
import Blog from "@/components/landing/Blog";
import ContactSection from "@/components/landing/Contact";
import Hero from "@/components/landing/Hero";
import Projects from "@/components/landing/Projects";
import { getPublishedBlogPosts } from "@/lib/blog";


export default function Home() {
  const posts = getPublishedBlogPosts();
  return (
      <Container>
        <Hero></Hero>
        <Projects></Projects>
        <Blog posts={posts}></Blog>
        <ContactSection></ContactSection>
      </Container>
  )
}
