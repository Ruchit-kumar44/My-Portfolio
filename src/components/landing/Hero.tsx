import Image from "next/image";
import { heroConfig, socialLnks} from "@/config/Hero";
import { Button } from "../ui/button";

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
              <h1 className="font-bold dark:text-white text-2xl">{name} <br /> <span className="text-secondary text-xl font-light">{title}</span></h1>
            </div>
        </div>
       <div className="mt-4 text-small font-medium text-secondary">Love building solid backends, breaking them, then building better ones.</div>

       <div></div>
      </div>
      
    )
}