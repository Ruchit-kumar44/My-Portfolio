import { projects } from "@/config/Projects";
import Container from "../common/Container";
import ProjectList from "../projects/ProjectList";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ProjectsSection(){
    return(
       <Container className="mt-20">
         <h1>Projects</h1>
         <ProjectList className="" projects={projects.slice(0, 2)} />
          <div className="mt-5 flex justify-center">
            <Button variant="outline" >
                <Link href='/projects'>Show all projects</Link>
            </Button>
          </div>
       </Container>
    )
}