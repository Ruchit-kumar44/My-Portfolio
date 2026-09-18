import Image from "next/image";
import SkillBox from "../common/SkillBox";
import { heroConfig, skillComponent, socialLnks} from "@/config/Hero";

export default function HeroSection(){
    const {name, title, avatar, skills, buttons} = heroConfig
    return(
        <div className="mt-6">
          <div className="flex gap-5"> 
             <Image
                alt="hero"
                src={avatar} 
                width={100}
                height={100}
                className="size-24 rounded-full bg-blue-300 dark:bg-red-200"
               >
               </Image>
               <div className="flex items-center">
                 <h1 className="font-bold dark:text-white text-2xl">{name} <br /> <span className="text-secondary font-medium">{title}</span></h1>
               </div>
         </div>
         <div className="mt-4 flex flex-wrap items-center gap-x-3 leading-6 tracking-wider font-medium text-secondary text-small">
              <span>I build interactive web apps using</span>
              {skills.map((skill)=>{
                const SkillComponents = skillComponent[skill.Component as keyof typeof skillComponent]
                return(
                    <SkillBox key={skill.name} name={skill.name} href={skill.href}><SkillComponents></SkillComponents></SkillBox>
                )
              })}
             <span className="">
                With a focus on <b className="font-bold text-black dark:text-white">system design</b> and API architecture using Node.js and Express.
                Comfortable across <b className="font-bold text-black dark:text-white">SQL and NoSQL</b> databases,
                and experienced deploying with Docker and caching with <b className="font-bold text-black dark:text-white">Redis</b> for performance at scale.
             </span>
         </div> 
      </div>
    )
}