import "./globals.css";
import Navbar from "@/components/common/Navbar";
import ThemeProvider from "@/components/common/ThemeProvider"
import Footer from "@/components/common/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "../components/ui/tooltip";
import { generateMetadata as getMetadata} from "@/config/Meta";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = getMetadata('/')

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}
    >
      <body className = {`font-hanken-grotesk antialiased`}>
        <ThemeProvider 
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        <Navbar></Navbar>
        <TooltipProvider>
        {children}
        </TooltipProvider>
        <Footer></Footer>
       </ThemeProvider>
      </body>
    </html>
  );
}
