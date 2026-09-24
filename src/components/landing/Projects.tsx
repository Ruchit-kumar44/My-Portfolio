import { projects } from "@/config/Projects";
import Container from "../common/Container";
import ProjectList from "../projects/ProjectList";
import { Button } from "../ui/button";
import Link from "next/link";
import SectionHeading from "../common/SectioHeading";

export default function ProjectsSection(){
    return(
       <div className="mt-10">
         <SectionHeading  heading = "Projects" />
         <ProjectList className="" projects={projects.slice(0, 2)} />
          <div className="mt-5 flex justify-center">
            <Button variant="outline" >
                <Link href='/projects'>Show all projects</Link>
            </Button>
          </div>
       </div>
    )
}