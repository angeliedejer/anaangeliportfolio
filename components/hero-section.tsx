"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, User } from "lucide-react"
import { motion } from "framer-motion"
import IconExplosion from "./IconExplosion"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

const techstackLogos = [
  "/techstacklogos/C_Language_Logo.png",
  "/techstacklogos/Canva-Logo.png",
  "/techstacklogos/css-logo.png",
  "/techstacklogos/React-logo.png",
  "/techstacklogos/JavaScript-Symbol.png",
  "/techstacklogos/Typescript_logo.png",
  "/techstacklogos/flutter_logo.png",
  "/techstacklogos/HTML5_logo.png",
  "/techstacklogos/Node.js_logo.png",
  "/techstacklogos/next_js_logo.png",
  "/techstacklogos/Tailwind_CSS.png",
  "/techstacklogos/github-logo.png",
  "/techstacklogos/Figma-Logo.png",
  "/techstacklogos/vscode-logo.png",
]

const typingText = "Aspiring UI/UX Designer | Front-end Developer"

export function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [isLargeScreen, setIsLargeScreen] = useState(true)

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleTyping = () => {
      const fullText = typingText
      setDisplayText(
        isDeleting 
          ? fullText.substring(0, displayText.length - 1) 
          : fullText.substring(0, displayText.length + 1)
      )

      setTypingSpeed(isDeleting ? 100 : 150)

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, typingSpeed, loopNum])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 circuit-line">
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left relative flex items-center justify-center lg:block min-h-[520px] sm:min-h-[500px] lg:min-h-0">
            {/* Explosion icons behind text on screens below lg */}
            {!isLargeScreen && (
              <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center z-0">
                <IconExplosion items={techstackLogos} />
              </div>
            )}

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="relative z-10">
              <motion.h1
                className="text-5xl md:text-7xl lg:text-5xl xl:text-7xl font-bold mb-6 text-balance"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm{" "}
                <motion.span
                  className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Ana Angeli
                </motion.span>
              </motion.h1>
              <motion.div
                className="text-xl md:text-2xl lg:text-xl xl:text-2xl text-primary font-mono mb-4 min-h-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {displayText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-1 h-6 bg-primary ml-1 align-middle"
                />
              </motion.div>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Detail-oriented Computer Engineering student with a strong foundation in software development and UI/UX
                design. Passionate about creating innovative solutions through thoughtful design and clean code.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-secondary text-primary-foreground group"
                    asChild
                  >
                    <Link href="/about">
                      <User className="mr-2 h-4 w-4" />
                      About Me
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    asChild
                  >
                    <a
                      href="https://drive.google.com/file/d/17O9zHDUQbwmNGqQeUMp3ZnOACM9T6y6-/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-card bg-transparent"
                    onClick={() => scrollToSection("contact")}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Professional Image with Explosion Background — only on lg+ */}
          {isLargeScreen && (
            <div className="flex-1 relative flex justify-center items-end min-h-[700px]">
              <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center z-20">
                <IconExplosion items={techstackLogos} />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative w-full h-[750px] z-10"
              >
                <Image
                  src="/professional_image.png"
                  alt="Ana Angeli"
                  fill
                  className="object-contain object-bottom drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

