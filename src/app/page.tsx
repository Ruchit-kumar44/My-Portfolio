import Container from "@/components/common/Container";
import Blog from "@/components/landing/Blog";
import GithubSection from "@/components/landing/Github";
import Hero from "@/components/landing/Hero";
import ProjectsSection from "@/components/landing/Projects";


export default function Home() {
  return (
    <div>
      <Container>
        <Hero></Hero>
        <ProjectsSection></ProjectsSection>
        <Blog></Blog>
        <GithubSection></GithubSection>
      </Container>
    </div>
  )
}
