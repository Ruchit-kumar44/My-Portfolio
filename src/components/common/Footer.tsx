import Link from "next/link";
import Container from "./Container";
import { FooterConfig, footerSocialLinks, PageLinks } from "@/config/Footer";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function Footer(){

    return(
        <div className="w-full min-h-70 border-t border-#909092 bg-[#F7F7F7] dark:bg-[#161515]">
          <Container className="text-secondary text-small">
             <div className="w-full flex flex-col gap-y-10 py-10  lg:flex-row lg:justify-between">
                <div className="w-full lg:max-w-55">
                    <p className="pb-3 font-medium">NAVIGATE</p>
                    <div className="font-medium font-[#4D4C4D] w-full flex flex-wrap items-center gap-x-4 gap-y-1">
                       {PageLinks.map((page)=>(
                         <Link key={page.label} href={page.href}>{page.label}</Link>
                       ))}
                    </div>
                </div>
                <div className="w-full lg:max-w-40">
                    <p className="pb-3 font-medium">CONNECT</p>
                    <div className="flex items-center flex-wrap gap-x-3 gap-y-2">
                        {footerSocialLinks.map((link)=>(
                            <Button 
                             key={link.name}
                             variant={"outline"}
                             asChild
                             className="bg-background h-10 w-10 hover:bg-[#F5F5F5] dark:hover:text-white dark:hover:bg-[#262626]"
                            >
                                <Link href={link.href}><span className="flex items-center">{link.icon}</span></Link>
                            </Button>
                        ))}
                    </div>
                </div>
             </div>
             <Separator/>
             <div className="py-8 flex items-center">
                 &copy;{' '} {new Date().getFullYear()} {FooterConfig.name}  {FooterConfig.copyright}
             </div>
            </Container>
        </div>
    )
}