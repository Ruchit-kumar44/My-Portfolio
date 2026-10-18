"use client"

import { motion } from "motion/react"

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function Reveal({children, delay=0, className}: RevealProps){

    return(
        <motion.div
         className={className}
         initial={{ opacity: 0, y: 24 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "0px 0px -80px 0px" }}
         transition={{ duration: 0.5, ease: "easeOut", delay }}
         >
            {children}
        </motion.div>
    )

}