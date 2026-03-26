'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface FolderProps {
  color?: string
  size?: number
  items?: { id: number; image: string; title: string }[]
  className?: string
  onOpenChange?: (open: boolean) => void
  onCardClick?: (item: any) => void
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('')
  }
  const num = parseInt(color, 16)
  let r = (num >> 16) & 0xff
  let g = (num >> 8) & 0xff
  let b = num & 0xff
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))))
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))))
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))))
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
}

const Folder: React.FC<FolderProps> = ({ 
  color = '#2F7AE5', 
  size: propSize = 1, 
  items = [], 
  className = '',
  onOpenChange,
  onCardClick
}) => {
  const [open, setOpen] = useState(false)
  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: items.length || 7 }, () => ({ x: 0, y: 0 }))
  )
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [responsiveScale, setResponsiveScale] = useState(propSize)
  const [isMobile, setIsMobile] = useState(false)
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440)

  // Handle responsive scaling
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') return
      const width = window.innerWidth
      setScreenWidth(width)
      setIsMobile(width < 768)
      
      // Fine-tuned scaling to ensure perfect fit without overflow
      if (width < 320) {
        setResponsiveScale(propSize * 0.3)
      } else if (width < 375) {
        setResponsiveScale(propSize * 0.35)
      } else if (width < 425) {
        setResponsiveScale(propSize * 0.4)
      } else if (width < 768) {
        setResponsiveScale(propSize * 0.52)
      } else if (width < 1024) {
        setResponsiveScale(propSize * 0.75)
      } else if (width < 1440) {
        setResponsiveScale(propSize * 0.85)
      } else {
        setResponsiveScale(propSize)
      }
    }

    handleResize() // Initial call
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [propSize])

  const papers = items.length > 0 ? items : Array(7).fill(null)

  const folderBackColor = darkenColor(color, 0.08)
  const paper1 = "#0B1120" // Background Dark Blue
  const paper2 = "#0B1120" // Background Dark Blue
  const paper3 = "#0B1120" // Background Dark Blue

  const handleClick = () => {
    const newOpen = !open
    setOpen(newOpen)
    onOpenChange?.(newOpen)
    if (newOpen) {
      setPaperOffsets(Array.from({ length: papers.length }, () => ({ x: 0, y: 0 })))
    }
  }

  const handlePaperMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    if (!open) return
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const offsetX = (e.clientX - centerX) * 0.15
    const offsetY = (e.clientY - centerY) * 0.15
    setPaperOffsets(prev => {
      const newOffsets = [...prev]
      newOffsets[index] = { x: offsetX, y: offsetY }
      return newOffsets
    })
  }

  const handlePaperMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev]
      newOffsets[index] = { x: 0, y: 0 }
      return newOffsets
    })
    setHoveredIndex(null)
  }

  const handlePaperClick = (item: any) => {
    if (item && onCardClick) {
      onCardClick(item)
    }
  }

  const folderStyle: React.CSSProperties = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  } as React.CSSProperties

  const scaleStyle = { transform: `scale(${responsiveScale})` }

  const getOpenTransform = (index: number, total: number) => {
    const angle = 18
    const startAngle = -(angle * (total - 1)) / 2
    const currentAngle = startAngle + index * angle
    const centerIndex = (total - 1) / 2
    const relativePosition = index - centerIndex
    
    // Precise spread to fit exact screen width without horizontal scroll
    let spreadWidth = 40
    if (screenWidth < 320) spreadWidth = 14
    else if (screenWidth < 375) spreadWidth = 16
    else if (screenWidth < 425) spreadWidth = 18
    else if (screenWidth < 768) spreadWidth = 22
    else if (screenWidth < 1024) spreadWidth = 30
    else if (screenWidth < 1440) spreadWidth = 34
    
    const xOffset = relativePosition * spreadWidth
    const yOffset = Math.abs(relativePosition) * (isMobile ? 5 : 10) - (isMobile ? 55 : 80) 
    
    return {
      x: xOffset,
      y: yOffset,
      rotate: currentAngle * (isMobile ? 0.6 : 1),
      scale: 1,
      opacity: 1
    }
  }

  return (
    <div style={scaleStyle} className={`relative transition-transform duration-300 ease-out ${className}`}>
      <div
        className="relative cursor-pointer flex items-center justify-center"
        onClick={handleClick}
      >
        {/* Folder Back */}
        <motion.div
          animate={{
            width: open ? (screenWidth < 375 ? 280 : screenWidth < 425 ? 320 : screenWidth < 768 ? 400 : 500) : 100,
            height: open ? (isMobile ? 180 : 300) : 80,
            y: open ? (isMobile ? 10 : 20) : 0
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          <motion.span
            animate={{
              width: open ? (isMobile ? 50 : 60) : 30,
              height: open ? (isMobile ? 12 : 15) : 10,
            }}
            className="absolute bottom-[98%] left-0 rounded-tl-[5px] rounded-tr-[5px]"
            style={{ backgroundColor: folderBackColor }}
          ></motion.span>

          {/* Papers/Cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            <TooltipProvider>
              <AnimatePresence>
                {papers.map((item, i) => {
                  const openState = getOpenTransform(i, papers.length)
                  const isHovered = hoveredIndex === i

                  return (
                    <Tooltip key={i} open={open && isHovered}>
                      <TooltipTrigger asChild>
                        <motion.div
                          initial={{ x: 0, y: 0, rotate: 0, scale: 0.5, opacity: 0 }}
                          animate={open ? {
                            ...openState,
                            x: openState.x + (isHovered ? 0 : (paperOffsets[i]?.x || 0)),
                            y: openState.y + (isHovered ? -30 : (paperOffsets[i]?.y || 0)),
                            scale: isHovered ? 1.1 : 1,
                            zIndex: isHovered ? 100 : 50 + i,
                            pointerEvents: "auto" as const,
                          } : {
                            x: 0,
                            y: 0,
                            rotate: 0,
                            scale: 0.5,
                            opacity: 0,
                            zIndex: 0,
                            pointerEvents: "none" as const,
                          }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 260, 
                            damping: 20,
                            delay: open ? i * 0.05 : 0 
                          }}
                          onMouseMove={e => handlePaperMouseMove(e, i)}
                          onMouseLeave={e => handlePaperMouseLeave(e, i)}
                          onMouseEnter={() => setHoveredIndex(i)}
                          onClick={(e) => {
                            e.stopPropagation()
                            handlePaperClick(item)
                          }}
                          className={`absolute ${isMobile ? 'w-[75px] h-[100px]' : 'w-[120px] h-[160px]'} cursor-pointer origin-bottom p-1 group/card transition-colors duration-300`}
                          style={{
                            backgroundColor: i % 3 === 0 ? paper1 : i % 3 === 1 ? paper2 : paper3,
                            borderRadius: '8px',
                            border: isHovered ? '2px solid #2F7AE5' : '1px solid rgba(0, 0, 0, 0.1)',
                            boxShadow: isHovered 
                              ? '0 25px 50px rgba(0, 0, 0, 0.4), 0 15px 30px rgba(0, 0, 0, 0.3)' 
                              : '0 4px 8px rgba(0, 0, 0, 0.12)',
                          }}
                        >
                          <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
                            {item && item.image ? (
                              <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-full object-contain p-2 rounded-[4px]"
                              />
                            ) : item && (
                              <div className="flex flex-col items-center justify-center text-center p-1">
                                <span className="text-[6px] md:text-[8px] font-bold text-primary uppercase tracking-wider leading-tight">Ongoing Thesis Project</span>
                                <div className="w-4 md:w-8 h-0.5 bg-primary/20 rounded-full mt-1" />
                              </div>
                            )}
                          </div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-primary text-primary-foreground border-none">
                        <p className="text-xs font-bold">{item?.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  )
                })}
              </AnimatePresence>
            </TooltipProvider>
          </div>

          {/* Folder Front Flap */}
          <motion.div
            animate={open ? {
              rotateX: -110,
              scaleY: 0.5,
              y: 40,
              skewX: 0,
            } : {
              rotateX: 0,
              scaleY: 1,
              y: 0,
              skewX: 0,
            }}
            whileHover={!open ? { skewX: 15, scaleY: 0.6 } : {}}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-40 origin-bottom"
            style={{
              backgroundColor: color,
              borderRadius: '5px 10px 10px 10px',
              backfaceVisibility: 'hidden',
              perspective: '1000px'
            }}
          ></motion.div>
          
          {/* Folder Front Flap (Secondary part for the skew effect when closed) */}
          {!open && (
            <motion.div
              whileHover={{ skewX: -15, scaleY: 0.6 }}
              className="absolute inset-0 z-40 origin-bottom"
              style={{
                backgroundColor: color,
                borderRadius: '5px 10px 10px 10px'
              }}
            ></motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Folder
