import Container from "@/components/common/Container";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { generateMetadata as getMetadata } from "@/config/Meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...getMetadata('/resume'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ResumePage() {
  return (
    <Container className="py-12">
        <div className="space-y-12">
          <div>
            <h1 className="font-bold tracking-tight text-2xl">Resume</h1>
            <p className="text-secondary font text-[16px]">View and download my professional Resume</p>
          </div>
          <Separator />
          <div className="max-full overflow-hidden py-0 border rounded-[8px] border-#909092">
            <iframe 
            src="https://drive.google.com/file/d/1ormIiMVpWGAMOZ3FZVj_XrKPkEmPlPQj/preview" 
            className="w-full min-h-screen"
            ></iframe>
          </div>
        </div>
    </Container>
  );
}
