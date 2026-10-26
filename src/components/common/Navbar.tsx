'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion, useScroll } from 'motion/react';

import { NavbarConfig } from '@/config/Nabvar';
import { cn } from '@/lib/utils';

import Container from './Container';
import ThemeSwitch from './ThemeSwitch';

export default function Navbar() {
  const pathName = usePathname();
  const { scrollYProgress } = useScroll();
  return (
    <Container className="sticky top-0 z-20 py-4 backdrop-blur-xs">
      <div className="md:text-small flex items-center justify-between text-xs font-medium">
        <div className="text-secondary flex items-center justify-between gap-5">
          {NavbarConfig.NavItems.map((item) => {
            const isActive = pathName === item.href;
            return (
              <Link
                data-sound="click"
                href={item.href}
                scroll = {false}
                key={item.label}
                className={cn(
                  'transition-all duration-300 hover:text-black dark:hover:text-white',
                  isActive && 'text-black dark:text-white',
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center">
          <ThemeSwitch></ThemeSwitch>
        </div>
      </div>
      <motion.div
        className={`absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-indigo-500 via-purple-400 to-teal-400 shadow-[0_1px_10px_rgba(99,102,241,0.2)] dark:shadow-[0_1px_10px_rgba(139,92,246,0.3)]`}
        style={{ scaleX: scrollYProgress, originX: 0 }}
      />
    </Container>
  );
}
