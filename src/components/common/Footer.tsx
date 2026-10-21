import Link from 'next/link';

import { FooterConfig, PageLinks, footerSocialLinks } from '@/config/Footer';

import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import Container from './Container';

export default function Footer() {
  return (
    <div className="border-#909092 min-h-70 w-full border-t bg-[#F7F7F7] dark:bg-[#161515]">
      <Container className="text-secondary md:text-small text-xs">
        <div className="flex w-full flex-col gap-y-10 py-10 lg:flex-row lg:justify-between">
          <div className="w-full lg:max-w-55">
            <p className="pb-3 font-medium">NAVIGATE</p>
            <div className="flex w-full flex-wrap items-center gap-x-4 gap-y-1 font-[#4D4C4D] font-medium">
              {PageLinks.map((page) => (
                <Link
                  className="transition-colors duration-300 hover:text-black dark:hover:text-white"
                  key={page.label}
                  href={page.href}
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full md:max-w-40">
            <p className="pb-3 font-medium">CONNECT</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {footerSocialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant={'outline'}
                  asChild
                  className="bg-background h-10 w-10"
                >
                  <Link href={link.href}>
                    <span className="flex items-center">{link.icon}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex items-center pt-8 pb-12">
          &copy; {new Date().getFullYear()} {FooterConfig.name}{' '}
          {FooterConfig.copyright}
        </div>
      </Container>
    </div>
  );
}
