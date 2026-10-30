'use client';
import Link from 'next/link';

import SectionHeading from '../common/SectioHeading';
import WhileInView from '../motion/WhileInView';
import ArrowRight from '../svgs/ArrowRight';
import { Card, CardDescription, CardTitle } from '../ui/card';

interface Personal {
  name: string;
  location: string;
  description: string;
}

const Personals: Personal[] = [
  {
    name: 'Movies',
    location: '/movies',
    description: ' Books that have influenced my thinking and growth.',
  },
  {
    name: 'Books',
    location: '/movies',
    description: 'Films and show that have inspired me',
  },
];

export default function PersonalSection() {
  return (
    <div className="py-10">
      <SectionHeading heading="Personal" />
      <div className="space-y-2">
        {Personals.map((personal) => (
          <WhileInView key={personal.name}>
            <Link data-sound="click" className="block" href={personal.location}>
              <Card
                size="default"
                className="group hover:bg-muted flex flex-row items-center justify-between gap-1 px-3 py-3 transition-all"
              >
                <div>
                  <CardTitle className="leading-tight font-bold">
                    {personal.name}
                  </CardTitle>
                  <CardDescription className="md:text-small mt-1 text-xs leading-snug font-medium">
                    {personal.description}
                  </CardDescription>
                </div>
                <ArrowRight className="text-muted-foreground size-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </Card>
            </Link>
          </WhileInView>
        ))}
      </div>
    </div>
  );
}
