import { heroConfig } from "@/config/Hero";
import Image from "next/image";

export default function HeroPage2() {
  const { name, title, avatar, buttons } = heroConfig;

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <Image
        src={avatar}
        alt="hero"
        width={100}
        height={100}
        className="size-20 rounded-full"
      />
      <h1 className="flex flex-col items-center font-black dark:text-white text-2xl">
          Hi I'm {name}
          </h1>
      </div>
    </div>
  );
}
