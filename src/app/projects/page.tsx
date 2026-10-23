import { Metadata } from 'next';

import Container from '@/components/common/Container';
import { Reveal } from '@/components/motion/Reveal';
import ProjectList from '@/components/projects/ProjectList';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { projects } from '@/config/Projects';

export const metadata: Metadata = {
  ...getMetadata('/projects'),
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

export default function Projects() {
  return (
    <Reveal>
      <Container className="py-12">
        <div className="space-y-8">
          <div className="">
            <h1 className="text-2xl font-bold tracking-tight">
              Projects
            </h1>
            <p className="text-secondary text-[16px]">
              My projects and work across different technologies and domains.
            </p>
          </div>
          <Separator />

          {/* projects */}
          <div>
            <ProjectList projects={projects} />
          </div>
        </div>
      </Container>
    </Reveal>
  );
}
