import Container from "./Container";
import { FooterConfig } from "@/config/Footer";

export default function Footer(){

    return(
        <div className="w-full min-h-70 border-t border-#909092 bg-[#F7F7F7] dark:bg-[#161515]">
          <Container className="text-secondary text-small">
             <div className="w-full flex justify-between items-center py-10 border-b        border-#909092">
                <div className="">
                    <p className="pb-2 font-medium">NAVIGATE</p>
                    <div className="flex items-center gap-3">flex items-center</div>
                </div>
                <div className="">
                    <p className="pb-2 font-medium">CONNECT</p>
                    <div>social links</div>
                </div>
             </div>
             <div className="py-8 flex items-center">
                 &copy;{' '} {new Date().getFullYear()} {FooterConfig.name}  {FooterConfig.copyright}
             </div>
            </Container>
        </div>
    )
}