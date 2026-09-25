import Container from "@/components/common/Container";
import { generateMetadata as getMetadata } from "@/config/Meta";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...getMetadata('/reusme'),
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
    <Container className="py-16">
      <div>this is resume page</div>
    </Container>
  );
}
