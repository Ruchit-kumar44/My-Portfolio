import Container from "@/components/common/Container";
import { Separator } from "@/components/ui/separator";

export default function Projects() {
  return (
    <Container className="py-12">
      <div className="space-y-8 bg-yellow-300">
        {/* header */}
        <div className="space-y-4 text-center bg-red-400">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Projects
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My projects and work across different technologies and domains.
          </p>
        </div>
        <Separator />
      </div>
    </Container>
  );
}
