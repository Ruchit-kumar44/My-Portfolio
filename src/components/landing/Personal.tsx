import Link from 'next/link';

import SectionHeading from '../common/SectioHeading';
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
    <div className="pt-10">
      <SectionHeading heading="Personal" />
      <div className="space-y-2">
        {Personals.map((personal) => (
          <Link className="block" href={personal.location} key={personal.name}>
            <Card size="default" className="px-3">
              <CardTitle className="m-0 leading-tight">
                {personal.name}
              </CardTitle>
              <CardDescription className="m-0 leading-snug">
                {personal.description}
              </CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
