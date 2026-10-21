import Image from 'next/image';

import { heroConfig } from '@/config/Hero';

export default function HeroPage2() {
  const { name, avatar, } = heroConfig;

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
        <h1 className="flex flex-col items-center text-2xl font-black dark:text-white">
          Hi I&apos;m {name}
        </h1>
      </div>
    </div>
  );
}
