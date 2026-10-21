import { Metadata } from 'next';

import Container from '@/components/common/Container';
import { Reveal } from '@/components/motion/Reveal';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';

export const metadata: Metadata = {
  ...getMetadata('/resume'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ResumePage() {
  return (
    <Reveal>
      <Container className="py-12">
        <div className="space-y-10">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Resume</h1>
            <p className="text-secondary font text-[16px]">
              View and download my professional Resume
            </p>
          </div>
          <Separator />
          <div className="max-full border-#909092 overflow-hidden rounded-[8px] border py-0">
            <iframe
              src="https://drive.google.com/file/d/1ormIiMVpWGAMOZ3FZVj_XrKPkEmPlPQj/preview"
              className="min-h-screen w-full"
            ></iframe>
          </div>
        </div>
      </Container>
    </Reveal>
  );
}
