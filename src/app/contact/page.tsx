import { Metadata } from 'next';

import Container from '@/components/common/Container';
import ContactSection from '@/components/landing/Contact';
import { Reveal } from '@/components/motion/Reveal';
import { generateMetadata as getMetadata } from '@/config/Meta';

export const metadata: Metadata = {
  ...getMetadata('/contact'),
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

export default function Contacts() {
  return (
    <Reveal>
      <Container>
        <ContactSection />
      </Container>
    </Reveal>
  );
}
