"use client"

import { useTheme } from "next-themes"
import { useState, useEffect, useCallback } from "react"
import Sun from "../svgs/sun"
import Moon from "../svgs/moon"


export default function ThemeSwitch(){
    const {resolvedTheme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
      setMounted(true)
    }, [])

    const toggelTeme = useCallback(()=>{
        const isDark = resolvedTheme === "dark";
        const nextTheme = isDark ? "light": "dark"

        if (!document.startViewTransition) {
           setTheme(nextTheme)
           return
        }

        document.startViewTransition(() => {
            setTheme(nextTheme)
        })
    }, [resolvedTheme, setTheme])


   if (!mounted) return null

    const isDark = resolvedTheme === "dark"

  return(
     <button onClick={toggelTeme}
      aria-label="Toggle theme"
      className="cursor-pointer p-2 transition-transform active:scale-90"
     >
        {isDark? <Sun className="size-4"/>: <Moon className="size-4" />}
     </button>
  )

}