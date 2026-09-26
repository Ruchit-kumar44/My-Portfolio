import Image from "next/image";
import SectionHeading from "../common/SectioHeading";
import { About, MySkill } from "@/config/About";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";



export default function AboutSection(){
    
    return(
        <div className="py-10">
            <SectionHeading heading="About" />
            {/* About me */}
            <div className="mt-4 flex flex-col gap-4 md:flex-row">
              <Image
                src='/images/logo.jpg'
                width={100}
                height={100}
                alt="About"
                className="border-secondary size-55  rounded-md border-2 bg-blue-300 dark:bg-yellow-300"
              />
              <div>
                <h3 className="text-2xl font-bold">{About.name}</h3>
                <p className="text-secondary mt-2">{About.about}</p>
                <p className="text-secondary mt-8 font-bold">Skills</p>
                <div className="flex mt-3  flex-wrap gap-2">
                    {MySkill.map((skill)=>(
                        <Tooltip key={skill.key} delayDuration={0}>
                            <TooltipTrigger asChild>
                               <div className="mt-5 transition-all duration-300 hover:scale-110 size-6 hover:cursor-pointer">
                                   {skill}
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>{skill.key}</TooltipContent>
                        </Tooltip>
                    ))}
                </div>
              </div>
            </div>
        </div>
    )
}