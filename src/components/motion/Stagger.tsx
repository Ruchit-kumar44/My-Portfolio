"use client"

import { motion, type Variants } from "motion/react"

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08},
  },
}

const item: Variants = {
  hidden: { opacity: 0, y:8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

interface StaggerProps {
  children: React.ReactNode
  className?: string
}

export function StaggerList({ children, className }: StaggerProps) {
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: StaggerProps) {
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  )
}