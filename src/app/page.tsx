import Container from "@/components/common/Container";
import AboutSection from "@/components/landing/About";
import Blog from "@/components/landing/Blog";
import ContactSection from "@/components/landing/Contact";
import GithubSection from "@/components/landing/Github";
import Hero from "@/components/landing/Hero";
import Projects from "@/components/landing/Projects";
import { getPublishedBlogPosts } from "@/lib/blog";


export default function Home() {
  const posts = getPublishedBlogPosts();
  return (
    <div>
      <Container>
        <Hero></Hero>
        <Projects></Projects>
        <AboutSection ></AboutSection>
        <Blog posts={posts}></Blog>
        <ContactSection></ContactSection>
      </Container>
    </div>
  )
}
