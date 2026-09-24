import Container from "@/components/common/Container";
import Blog from "@/components/landing/Blog";
import GithubSection from "@/components/landing/Github";
import Hero from "@/components/landing/Hero";
import Projects from "@/components/landing/Projects";


export default function Home() {
  return (
    <div>
      <Container>
        <Hero></Hero>
        <Projects></Projects>
        <Blog></Blog>
        <GithubSection></GithubSection>
      </Container>
    </div>
  )
}
