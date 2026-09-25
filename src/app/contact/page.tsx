import Container from "@/components/common/Container";
import { Metadata } from "next";
import { generateMetadata as getMetadata } from "@/config/Meta";

export const metadata: Metadata = {
  ...getMetadata('/contact'),
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
  }
}

export default function Contacts(){

    return(
       <Container>
         <div>contact me using this email</div>
       </Container>
    )
}