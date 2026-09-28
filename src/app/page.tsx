import Container from "@/components/common/Container";
import AboutSection from "@/components/landing/About";
import Blog from "@/components/landing/Blog";
import ContactSection from "@/components/landing/Contact";
import GithubSection from "@/components/landing/Github";
import Hero from "@/components/landing/Hero";
import Projects from "@/components/landing/Projects";


export default function Home() {
  return (
    <div>
      <Container>
        <Hero></Hero>
        <Projects></Projects>
        <AboutSection ></AboutSection>
        <Blog></Blog>
        <ContactSection></ContactSection>
      </Container>
    </div>
  )
}
