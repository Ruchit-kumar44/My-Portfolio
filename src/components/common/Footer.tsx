import Link from "next/link";
import Container from "./Container";
import { FooterConfig, footerSocialLinks, PageLinks } from "@/config/Footer";
import { Button } from "../ui/button";
import { cn } from '@/lib/utils';

export default function Footer(){

    return(
        <div className="w-full min-h-70 border-t border-#909092 bg-[#F7F7F7] dark:bg-[#161515]">
          <Container className="text-secondary text-small">
             <div className="w-full flex justify-between items-center py-10 border-b border-#909092">
                <div className="max-w-55">
                    <p className="pb-3 font-medium">NAVIGATE</p>
                    <div className="font-medium font-[#4D4C4D] w-full flex flex-wrap items-center gap-x-4 gap-y-2">
                       {PageLinks.map((page)=>(
                         <Link key={page.label} href={page.href}>{page.label}</Link>
                       ))}
                    </div>
                </div>
                <div className="">
                    <p className="pb-3 font-medium">CONNECT</p>
                    <div className="max-w-40 flex items-center flex-wrap gap-x-3 gap-y-2">
                        {footerSocialLinks.map((link)=>(
                            <Button 
                             key={link.name}
                             variant={"outline"}
                             asChild
                             className="bg-background h-10 w-10 hover:bg-[#F5F5F5] dark:hover:bg-[#262626]"
                            >
                                <Link href={link.href}><span className="dark:text-white flex items-center">{link.icon}</span></Link>
                            </Button>
                        ))}
                    </div>
                </div>
             </div>
             <div className="py-8 flex items-center">
                 &copy;{' '} {new Date().getFullYear()} {FooterConfig.name}  {FooterConfig.copyright}
             </div>
            </Container>
        </div>
    )
}