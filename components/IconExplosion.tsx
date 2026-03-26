"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState, useMemo } from "react"

interface IconExplosionProps {
  items: string[]
}

interface ExplodingIconProps {
  src: string
  index: number
  total: number
}

function ExplodingIcon({ src, index, total }: ExplodingIconProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Memoize values to keep them stable
  const { angle, initialDistance, randomRotate } = useMemo(() => {
     const baseDistance = isMobile ? 150 : 250
     const randomRange = isMobile ? 80 : 150
     return {
       angle: (index / total) * Math.PI * 2,
       initialDistance: baseDistance + Math.random() * randomRange,
       randomRotate: Math.random() * 360
     }
   }, [index, total, isMobile])

  const targetX = Math.cos(angle) * initialDistance
  const targetY = Math.sin(angle) * initialDistance

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      animate={{ 
        x: targetX, 
        y: targetY, 
        opacity: 1, 
        scale: 1,
        rotate: randomRotate 
      }}
      transition={{ 
        duration: 2, 
        delay: 0.1 + index * 0.08,
        type: "spring",
        stiffness: 40,
        damping: 12
      }}
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="relative w-10 h-10 md:w-12 md:h-12 bg-background/60 backdrop-blur-md rounded-xl border border-border/50 shadow-2xl p-1.5 flex items-center justify-center"
      >
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt="tech icon"
            fill
            className="object-contain filter grayscale-[0.2] hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function IconExplosion({ items }: IconExplosionProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full h-full pointer-events-none">
      {items.map((src, index) => (
        <ExplodingIcon 
          key={`${src}-${index}`} 
          src={src} 
          index={index} 
          total={items.length} 
        />
      ))}
    </div>
  )
}
