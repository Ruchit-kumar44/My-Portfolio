import Image from "next/image";
import Container from "../common/Container";
import SkillBox from "../common/SkillBox";
import { heroConfig, skillComponent, socialLnks} from "@/config/Hero";

export default function HeroSection(){
    const {name, title, avatar, skills, buttons} = heroConfig
    return(
        <Container className="bg-yellow-300 mt-6">
          <Image
          alt="hero"
          src={avatar} 
          width={100}
          height={100}
          className="size-24 rounded-full bg-blue-300 dark:bg-red-200">

          </Image>
        </Container>
    )
}