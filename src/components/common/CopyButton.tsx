"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import { cn } from "cn"
import Copied from "../svgs/Copied"
import Copy from "../svgs/Copy"

interface CopyButtonProps {
    text: string,
    className?: string
}

export default function CopyButton({text, className}: CopyButtonProps){
    const [copied, setCopied] = useState(false)

   async function handlClick(){
    try{

     await navigator.clipboard.writeText(text)
     setCopied(true);
     setTimeout(()=> setCopied(false), 3000)

    } catch(error){
      console.log(error)
    }
   }
    return(
      <Button
      type="button"
      size={"icon"}
      onClick={handlClick}
      className={cn("text-secondary hover:text-foreground inline-flex size-8 items-center justify-center rounded-md border transition-colors",
        className)}
      >
        {copied ? <Copied className="size-4 text-green-500" /> : <Copy className="size-4" />}

      </Button>
    )
}