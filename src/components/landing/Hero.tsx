import Image from "next/image";
import { heroConfig, skillComponents, socialLnks} from "@/config/Hero";

export default function HeroSection(){
    const {name, title, avatar, buttons} = heroConfig
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
      </div>
    )
}