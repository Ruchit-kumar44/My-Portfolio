import Container from '@/components/common/Container';
import { Reveal } from '@/components/motion/Reveal';
import { StaggerItem, StaggerList } from '@/components/motion/Stagger';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface Movie {
  name: string;
  year: number;
}

const Movies: Movie[] = [
  { name: 'The Social Network', year: 2010 },
  { name: 'Ferrari', year: 2019 },
  { name: 'Pursuit of Happiness', year: 2020 },
  { name: 'Rush', year: 2013 },
];

export default function Moviespage() {
  return (
    <Reveal>
      <Container className="py-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Movies</h1>
            <p className="text-secondary text-[16px]">
              Movies and shows that have inspired and entertained me.
            </p>
          </div>
          <div>
            <Separator />
            <StaggerList>
              <div className="flex w-full flex-wrap gap-5 py-5 md:gap-10">
                {Movies.map((movie) => (
                  <StaggerItem key={movie.name}>
                    <Card size="default" className="w-full border md:w-75">
                      <CardHeader>
                        <CardTitle>{movie.name}</CardTitle>
                        <CardDescription>{movie.year}</CardDescription>
                      </CardHeader>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerList>
          </div>
        </div>
      </Container>
    </Reveal>
  );
}
