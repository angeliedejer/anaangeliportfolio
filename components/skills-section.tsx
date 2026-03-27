"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  Code2,
  Palette,
  Cpu,
  Zap,
  Wrench,
  Database,
  Bot,
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type SkillCategory = "all" | "languages" | "frameworks" | "hardware" | "tools_and_design" | "databases" | "ai_tools"

const allSkillsList = [
  // Languages
  { name: "C", logo: "/techstacklogos/C_Language_Logo.png" },
  { name: "C#", logo: "/techstacklogos/Logo_C_sharp.png" },
  { name: "Dart", logo: "/techstacklogos/Dart_logo.png" },
  { name: "JavaScript", logo: "/techstacklogos/JavaScript-Symbol.png" },
  { name: "TypeScript", logo: "/techstacklogos/Typescript_logo.png" },
  { name: "HTML", logo: "/techstacklogos/HTML5_logo.png" },
  { name: "CSS", logo: "/techstacklogos/css-logo.png" },
  { name: "Python", logo: "/techstacklogos/Python-logo.png" },
  { name: "Kotlin", logo: "/techstacklogos/kotlin-icon.png" },
  // Frameworks
  { name: ".NET", logo: "/techstacklogos/NET_logo.png" },
  { name: "Node.js", logo: "/techstacklogos/Node.js_logo.png" },
  { name: "Flutter", logo: "/techstacklogos/flutter_logo.png" },
  { name: "Next.js", logo: "/techstacklogos/next_js_logo.png" },
  { name: "React", logo: "/techstacklogos/React-logo.png" },
  { name: "TailwindCSS", logo: "/techstacklogos/Tailwind_CSS.png" },
  // Hardware
  { name: "Arduino", logo: "/techstacklogos/arduino-logo.png" },
  { name: "SolidWorks", logo: "/techstacklogos/SolidWorks-Logo.png" },
  { name: "Cisco Packet Tracer", logo: "/techstacklogos/cisco-packet-tracer.png" },
  { name: "Eagle", logo: "/techstacklogos/eagle-logo.jpg" },
  { name: "TinkerCAD", logo: "/techstacklogos/logo-tinkercad.png" },
  { name: "ESP32", logo: "/techstacklogos/esp32.jpg" },
  { name: "Raspberry Pi", logo: "/techstacklogos/raspberry-pi.png" },
  // Tools & Design
  { name: "Git/GitHub", logo: "/techstacklogos/github-logo.png" },
  { name: "VS Code", logo: "/techstacklogos/vscode-logo.png" },
  { name: "AndroidStudios", logo: "/techstacklogos/Android_Studio_Logo.png" },
  { name: "Microsoft Office (Word)", logo: "/techstacklogos/microsoft-word-logo.png" },
  { name: "Microsoft Office (PowerPoint)", logo: "/techstacklogos/Microsoft_Office_PowerPoint_logo.png" },
  { name: "Microsoft Office (Excel)", logo: "/techstacklogos/Microsoft_Office_Excel_Logo_.png" },
  { name: "Figma", logo: "/techstacklogos/Figma-Logo.png" },
  { name: "Canva", logo: "/techstacklogos/Canva-Logo.png" },
  { name: "Discord", logo: "/techstacklogos/discord-logo.png" },
  { name: "Notion", logo: "/techstacklogos/Notion_app_logo.png" },
  { name: "Vercel", logo: "/techstacklogos/vercel.png" },
  // Databases
  { name: "Supabase", logo: "/techstacklogos/supabase.png" },
  { name: "MS Access", logo: "/techstacklogos/MS_Access.png" },
  { name: "MySQL", logo: "/techstacklogos/mysql.png" },
  { name: "AWS", logo: "/techstacklogos/AWS-Logo.png" },
  { name: "Firebase", logo: "/techstacklogos/firebase_icon.png" },
  // AI Tools
  { name: "ChatGPT", logo: "/techstacklogos/ChatGPT_logo.png" },
  { name: "Claude AI", logo: "/techstacklogos/claude-ai.png" },
  { name: "Deepseek", logo: "/techstacklogos/deepseek.png" },
  { name: "Google Gemini", logo: "/techstacklogos/Google-gemini.png" },
  { name: "Trae AI", logo: "/techstacklogos/trae.png" },
  { name: "Copilot", logo: "/techstacklogos/copilot-icon.png" },
  { name: "Perplexity", logo: "/techstacklogos/perplexity.png" },
  { name: "V0", logo: "/techstacklogos/v0-logo.png" },
]

const skills = {
  all: allSkillsList,
  languages: [
    { name: "C", logo: "/techstacklogos/C_Language_Logo.png" },
    { name: "C#", logo: "/techstacklogos/Logo_C_sharp.png" },
    { name: "Dart", logo: "/techstacklogos/Dart_logo.png" },
    { name: "JavaScript", logo: "/techstacklogos/JavaScript-Symbol.png" },
    { name: "TypeScript", logo: "/techstacklogos/Typescript_logo.png" },
    { name: "HTML", logo: "/techstacklogos/HTML5_logo.png" },
    { name: "CSS", logo: "/techstacklogos/css-logo.png" },
    { name: "Python", logo: "/techstacklogos/Python-logo.png" },
    { name: "Kotlin", logo: "/techstacklogos/kotlin-icon.png" },
  ],
  frameworks: [
    { name: ".NET", logo: "/techstacklogos/NET_logo.png" },
    { name: "Node.js", logo: "/techstacklogos/Node.js_logo.png" },
    { name: "Flutter", logo: "/techstacklogos/flutter_logo.png" },
    { name: "Next.js", logo: "/techstacklogos/next_js_logo.png" },
    { name: "React", logo: "/techstacklogos/React-logo.png" },
    { name: "TailwindCSS", logo: "/techstacklogos/Tailwind_CSS.png" },
  ],
  hardware: [
    { name: "Arduino", logo: "/techstacklogos/arduino-logo.png" },
    { name: "SolidWorks", logo: "/techstacklogos/SolidWorks-Logo.png" },
    { name: "Cisco Packet Tracer", logo: "/techstacklogos/cisco-packet-tracer.png" },
    { name: "Eagle", logo: "/techstacklogos/eagle-logo.jpg" },
    { name: "TinkerCAD", logo: "/techstacklogos/logo-tinkercad.png" },
    { name: "ESP32", logo: "/techstacklogos/esp32.jpg" },
    { name: "Raspberry Pi", logo: "/techstacklogos/raspberry-pi.png" },
  ],
  tools_and_design: [
    { name: "Git/GitHub", logo: "/techstacklogos/github-logo.png" },
    { name: "VS Code", logo: "/techstacklogos/vscode-logo.png" },
    { name: "AndroidStudios", logo: "/techstacklogos/Android_Studio_Logo.png" },
    { name: "Microsoft Office (Word)", logo: "/techstacklogos/microsoft-word-logo.png" },
    { name: "Microsoft Office (PowerPoint)", logo: "/techstacklogos/Microsoft_Office_PowerPoint_logo.png" },
    { name: "Microsoft Office (Excel)", logo: "/techstacklogos/Microsoft_Office_Excel_Logo_.png" },
    { name: "Figma", logo: "/techstacklogos/Figma-Logo.png" },
    { name: "Canva", logo: "/techstacklogos/Canva-Logo.png" },
    { name: "Discord", logo: "/techstacklogos/discord-logo.png" },
    { name: "Notion", logo: "/techstacklogos/Notion_app_logo.png" },
    { name: "Vercel", logo: "/techstacklogos/vercel.png" },
  ],
  databases: [
    { name: "Supabase", logo: "/techstacklogos/supabase.png" },
    { name: "MS Access", logo: "/techstacklogos/MS_Access.png" },
    { name: "MySQL", logo: "/techstacklogos/mysql.png" },
    { name: "AWS", logo: "/techstacklogos/AWS-Logo.png" },
    { name: "Firebase", logo: "/techstacklogos/firebase_icon.png" },
  ],
  ai_tools: [
    { name: "ChatGPT", logo: "/techstacklogos/ChatGPT_logo.png" },
    { name: "Claude AI", logo: "/techstacklogos/claude-ai.png" },
    { name: "Deepseek", logo: "/techstacklogos/deepseek.png" },
    { name: "Google Gemini", logo: "/techstacklogos/Google-gemini.png" },
    { name: "Trae AI", logo: "/techstacklogos/trae.png" },
    { name: "Copilot", logo: "/techstacklogos/copilot-icon.png" },
    { name: "Perplexity", logo: "/techstacklogos/perplexity.png" },
    { name: "V0", logo: "/techstacklogos/v0-logo.png" },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all")

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted max-w-2xl mx-auto">
            A diverse skill set spanning languages, frameworks, hardware, tools, and design
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => setActiveCategory("all")}
              className={activeCategory === "all" ? "bg-primary hover:bg-secondary" : "border-border hover:bg-card"}
            >
              <Zap className="mr-2 h-4 w-4" />
              All
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeCategory === "languages" ? "default" : "outline"}
              onClick={() => setActiveCategory("languages")}
              className={activeCategory === "languages" ? "bg-primary hover:bg-secondary" : "border-border hover:bg-card"}
            >
              <Code2 className="mr-2 h-4 w-4" />
              Languages
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeCategory === "frameworks" ? "default" : "outline"}
              onClick={() => setActiveCategory("frameworks")}
              className={
                activeCategory === "frameworks" ? "bg-primary hover:bg-secondary" : "border-border hover:bg-card"
              }
            >
              <Code2 className="mr-2 h-4 w-4" />
              Frameworks
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeCategory === "hardware" ? "default" : "outline"}
              onClick={() => setActiveCategory("hardware")}
              className={
                activeCategory === "hardware" ? "bg-primary hover:bg-secondary" : "border-border hover:bg-card"
              }
            >
              <Cpu className="mr-2 h-4 w-4" />
              Hardware
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeCategory === "tools_and_design" ? "default" : "outline"}
              onClick={() => setActiveCategory("tools_and_design")}
              className={
                activeCategory === "tools_and_design" ? "bg-primary hover:bg-secondary" : "border-border hover:bg-card"
              }
            >
              <Wrench className="mr-2 h-4 w-4" />
              Tools & Design
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeCategory === "databases" ? "default" : "outline"}
              onClick={() => setActiveCategory("databases")}
              className={activeCategory === "databases" ? "bg-primary hover:bg-secondary" : "border-border hover:bg-card"}
            >
              <Database className="mr-2 h-4 w-4" />
              Databases
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeCategory === "ai_tools" ? "default" : "outline"}
              onClick={() => setActiveCategory("ai_tools")}
              className={activeCategory === "ai_tools" ? "bg-primary hover:bg-secondary" : "border-border hover:bg-card"}
            >
              <Bot className="mr-2 h-4 w-4" />
              AI Tools
            </Button>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <TooltipProvider>
              {skills[activeCategory].map((skill, index) => {
                return (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.15, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-16 h-16 md:w-20 md:h-20"
                      >
                        <Card className="p-3 bg-card border-border/50 hover:border-primary transition-all duration-300 h-full w-full flex items-center justify-center shadow-lg">
                          <div className="relative w-full h-full flex items-center justify-center">
                            <Image
                              src={skill.logo}
                              alt={skill.name}
                              width={40}
                              height={40}
                              className="object-contain"
                            />
                          </div>
                        </Card>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                )
              })}
            </TooltipProvider>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
