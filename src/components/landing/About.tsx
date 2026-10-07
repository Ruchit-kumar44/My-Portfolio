import Image from "next/image";
import SectionHeading from "../common/SectioHeading";
import { About, MySkill } from "@/config/About";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import { Separator } from "../ui/separator";



export default function AboutSection(){
    
    return(
        <div className="pb-10">
            <SectionHeading heading="This is me" className="mb-2" />
            {/* <h4 className="text-secondary text-small">this is me</h4> */}
            <Separator />
            <div className="mt-4 flex flex-col gap-4 md:flex-row">
                <h1 className="text-4xl font-light w-200">Hi, I'm Rachit</h1>
              <div>
                <p className="text-secondary  font-medium">I'm a frontend web developer  to turning ideas into creative. I specialize in creating seamless and intuitive user experiences.</p>
                <p className="text-secondary  font-medium mt-5">I'm a frontend web developer  to turning ideas into creative. I specialize in creating seamless and intuitive user experiences.</p>
              </div>
            </div>
        </div>
    )
}