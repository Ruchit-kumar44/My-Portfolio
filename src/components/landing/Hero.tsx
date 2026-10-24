
import Image from 'next/image';
import Link from 'next/link';

import { heroConfig, socialLnks } from '@/config/Hero';

import Chat from '../svgs/Chat';
import CV from '../svgs/Cv';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { StaggerItem, StaggerList } from '../motion/Stagger';
import RotatingText from '../common/RotatingText';


const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

export default function HeroSection() {
  const { name, avatar, buttons } = heroConfig;

  
  return (
    <div className="pt-6">
      <div className="flex gap-5">
        <Image
          alt="hero"
          src={avatar}
          width={100}
          height={100}
          priority={true}
          fetchPriority="high"
          className="size-24 rounded-full"
        ></Image>
        <div className="flex items-center">
          <h1 className="text-xl font-bold md:text-2xl dark:text-white">
            {name} <br />{' '}
            <span className="text-secondary overflow-hidden text-xs font-light md:text-xl">
    <RotatingText/>
  </span>
          </h1>
        </div>
      </div>
      <div className="md:text-small text-secondary mt-4 text-xs font-medium">
        Love building solid backends, breaking them, then building better ones.
      </div>

      {/* button mapping */}

      <div className="mt-5 flex gap-4">
        {buttons.map((button, index) => {
          const IconComponent =
            buttonIcons[button.icon as keyof typeof buttonIcons];

          return (
            <Button
              key={index}
              asChild
              variant={button.variant as 'outline' | 'default'}
            >
              <Link href={button.href}>
                {IconComponent && <IconComponent />}
                {button.text}
              </Link>
            </Button>
          );
        })}
      </div>

      {/* social link mapping */}
      <StaggerList>
      <div className="mt-5 flex gap-2">
        {socialLnks.map((link) => {
          return (
            <Tooltip key={link.name} delayDuration={0}>
              <TooltipTrigger asChild>
                <StaggerItem>
                <Link
                  href={link.href}
                  className="text-secondary flex items-center gap-2"
                >
                  <span className="size-5.75">{link.icon}</span>
                </Link>
                </StaggerItem>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
      </StaggerList>
    </div>
  );
}
