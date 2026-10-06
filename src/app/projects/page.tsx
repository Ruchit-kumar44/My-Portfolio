import Container from "@/components/common/Container";
import ProjectList from "@/components/projects/ProjectList";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/config/Projects";
import { generateMetadata as getMetadata } from "@/config/Meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...getMetadata('/projects'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function Projects() {
  return (
    <Container className="py-12">
      <div className="space-y-6">
        {/* header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Projects
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My projects and work across different technologies and domains.
          </p>
        </div>
        <Separator />
        
       {/* projects */}
        <div>
         <ProjectList projects={projects} />
        </div>
      </div>
    </Container>
  );
}
