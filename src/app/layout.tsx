import { Geist } from 'next/font/google';

import ReactLenis from 'lenis/react';

import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import RevealDiv from '@/components/common/RevealDiv';
import ThemeProvider from '@/components/common/ThemeProvider';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { cn } from '@/lib/utils';

import { TooltipProvider } from '../components/ui/tooltip';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = getMetadata('/');

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('font-sans', geist.variable)}
    >
      <body className={`font-hanken-grotesk antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactLenis root>
            <Navbar />
            <TooltipProvider>{children}</TooltipProvider>
            <Footer />
            <RevealDiv></RevealDiv>
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
