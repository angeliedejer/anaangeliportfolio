"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-8"
    >
      <Button
        variant="ghost"
        className="text-muted hover:text-foreground gap-2 pl-0"
        asChild
      >
        <Link href="/">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </Button>
    </motion.div>
  )
}
