"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, Send, ArrowLeft, ExternalLink, Download, Mail, Phone } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { link } from "fs"

const chatFlow = {
  start: {
    message: "Hi! I'm Daizy 🐶 What would you like to know about Ana?",
    options: [
      { label: "👩‍💻 About", next: "about" },
      { label: "🎨 Projects", next: "projects" },
      { label: "⚙️ Tech Stack", next: "techstack" },
      { label: "❓ FAQs", next: "faq" },
      { label: "🐾 Fun Facts", next: "fun" },
      { label: "💼 Contact", next: "contact" }
    ]
  },

  about: {
    message:
      "Ana is a Computer Engineering student and UI/UX Designer who builds web and mobile applications. She combines design, development, and hardware knowledge to solve real-world problems 🐾",
    options: [
      { label: "🎨 View Projects", next: "projects" },
      { label: "⬅️ Menu", next: "start" }
    ]
  },

  projects: {
    message: "Woof! Here are Ana’s projects 🐾",
    options: [
      { label: "💼 HanapBuhay", next: "proj_hanapbuhay" },
      { label: "📚 Whaloo", next: "proj_whaloo" },
      { label: "👓 OptiCare", next: "proj_opticare" },
      { label: "🤝 MentorMatch", next: "proj_mentor" },
      { label: "🏸 SmashZone", next: "proj_smashzone" },
      { label: "💰 BaonBuddy", next: "proj_baonbuddy" },
      { label: "⬅️ Menu", next: "start" }
    ]
  },

  proj_hanapbuhay: {
    message:
      "HanapBuhay is a freelance marketplace built with Next.js, TypeScript, and Figma.",
    options: [
      { label: "🔍 View Project", action: "link_hanapbuhay" },
      { label: "⬅️ Back", next: "projects" }
    ]
  },

  proj_whaloo: {
    message:
      "Whaloo is a mobile app for managing study materials, deadlines, and schedules, built with Flutter, Dart,and Figma.",
    options: [
      { label: "🔍 View Project", action: "link_whaloo" },
      { label: "⬅️ Back", next: "projects" }
    ]
  },

  proj_opticare: {
    message:
      "OptiCare is a UI/UX web prototype for managing patient records and appointments using Figma.",
    options: [
      { label: "🔍 View Project", action: "link_opticare" },
      { label: "⬅️ Back", next: "projects" }
    ]
  },

  proj_mentor: {
    message:
      "MentorMatch is a Tinder-like mentor booking app built with .NET MAUI.",
    options: [
      { label: "🔍 View Project", action: "link_mentor" },
      { label: "⬅️ Back", next: "projects" }
    ]
  },

  proj_smashzone: {
    message:
      "SmashZone is a booking system built using C# Windows Forms with a mobile UI prototype.",
    options: [
      { label: "🔍 View Project", action: "link_smashzone" },
      { label: "🔍 View Figma Design", action: "link_smashzonefigma" },
      { label: "⬅️ Back", next: "projects" }
    ]
  },

  proj_baonbuddy: {
    message:
      "BaonBuddy is a C# console-based expense tracking system using OOP.",
    options: [
      { label: "⬅️ Back", next: "projects" }
    ]
  },

  techstack: {
    message: "Ana uses these technologies: C, C#, Dart, JavaScript, TypeScript, TailwindCSS, .NET, Flutter, Dart, Next.js, React, Node.js, Figma, Canva, GitHub, And many more!",
    options: [
      { label: "⬅️ Menu", next: "start" }
    ]
  },

  faq: {
    message: "Here are some common questions 🐶",
    options: [
      { label: "What roles are you looking for?", next: "faq_roles" },
      { label: "Do you do UI/UX or development?", next: "faq_roles2" },
      { label: "Do you have experience?", next: "faq_exp" },
      { label: "Download resume", action: "resume" },
      { label: "⬅️ Menu", next: "start" }
    ]
  },

  faq_roles: {
    message:
      "Ana is open to UI/UX, Front-End, and Software Engineering roles.",
    options: [{ label: "⬅️ Back", next: "faq" }]
  },

  faq_roles2: {
    message: "She does both UI/UX design and development.",
    options: [{ label: "⬅️ Back", next: "faq" }]
  },

  faq_exp: {
    message:
      "She has multiple academic projects and an IT Support internship.",
    options: [{ label: "⬅️ Back", next: "faq" }]
  },

  fun: {
    message: "Wanna know something fun? 🐶",
    options: [
      { label: "Why Daizy?", next: "fun_beagle" },
      { label: "Fun fact", next: "fun_fact" },
      { label: "Favorite project", next: "fun_proj" },
      { label: "⬅️ Menu", next: "start" }
    ]
  },

  fun_beagle: {
    message:
      "I'm her real life doggo! And also because we beagles are curious and love exploring just like my hooman Ana 🐾",
    options: [{ label: "⬅️ Back", next: "fun" }]
  },

  fun_fact: {
    message: "Ana enjoys building both software and hardware systems!",
    options: [{ label: "⬅️ Back", next: "fun" }]
  },

  fun_proj: {
    message:
      "HanapBuhay stands out for its real-world impact and she had fun creating the design concept.",
    options: [{ label: "⬅️ Back", next: "fun" }]
  },

  contact: {
    message: "Want to work with Ana? 📧 Email: angeliedejer@gmail.com or",
    options: [
      { label: "📄 Resume", action: "resume" },
      { label: "⬅️ Menu", next: "start" }
    ]
  }
}

const actions = {
  link_smashzonefigma: () => window.open("https://www.figma.com/design/aNDjXDKBJGzWdBrM7qXA0e/SmashZone"),
  link_hanapbuhay: () => window.open("https://hanapbuhay.vercel.app/", "_blank"),
  link_whaloo: () => window.open("https://github.com/settery7/whaloo.git", "_blank"),
  link_opticare: () => window.open("https://www.figma.com/design/yEy8Fb8PxIs2Am8pZB2rXx/OPTICARE-VER.1?t=yDu0fdAPyzSfVAWw-1", "_blank"),
  link_mentor: () => window.open("https://github.com/SeesonLau/ProjectMentorMatch.git", "_blank"),
  link_smashzone: () => window.open("https://github.com/angeliedejer/SmashZone-BadmintonxTennis-BookingHub.git", "_blank"),
  resume: () => window.open("https://drive.google.com/file/d/17O9zHDUQbwmNGqQeUMp3ZnOACM9T6y6-/view?usp=sharing", "_blank")
}

export function DaizyChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ type: "bot" | "user"; text: string; options?: any[] }[]>([])
  const [typing, setTyping] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      handleBotMessage("start")
    }
  }, [isOpen])

  const handleBotMessage = (key: string) => {
    setTyping(true)
    setTimeout(() => {
      const node = (chatFlow as any)[key]
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: node.message, options: node.options }
      ])
      setTyping(false)
    }, 800)
  }

  const handleOptionClick = (option: any) => {
    setMessages((prev) => [...prev, { type: "user", text: option.label }])

    if (option.action) {
      (actions as any)[option.action]?.()
      // Still show the menu option after an action
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: "What else would you like to know?", options: chatFlow.start.options }
        ])
      }, 1000)
      return
    }

    if (option.next) {
      handleBotMessage(option.next)
    }
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, typing])

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] max-w-[calc(100vw-2rem)]">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.3 } }}
            className="w-[calc(100vw-2rem)] sm:w-[350px] md:w-[400px] h-[500px] max-h-[70vh] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white">
                  <Image
                    src="/daizy_bot.gif"
                    alt="Daizy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white leading-none">Daizy the Beagle</h3>
                  <span className="text-[10px] text-white/80">Ana's Assistant 🐾</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className="space-y-2">
                  <motion.div
                    initial={{ opacity: 0, x: msg.type === "bot" ? -10 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`p-3 rounded-2xl text-sm max-w-[85%] ${
                      msg.type === "bot"
                        ? "bg-muted text-foreground rounded-tl-none"
                        : "bg-primary text-primary-foreground ml-auto rounded-tr-none"
                    }`}
                  >
                    {msg.text}
                  </motion.div>

                  {msg.options && msg.type === "bot" && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {msg.options.map((opt: any, idx: number) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleOptionClick(opt)}
                          className="bg-card border border-border hover:border-primary hover:text-primary px-3 py-1.5 rounded-full text-xs transition-colors"
                        >
                          {opt.label}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {typing && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="flex gap-1">
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-1.5 h-1.5 bg-current rounded-full"
                    />
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                      className="w-1.5 h-1.5 bg-current rounded-full"
                    />
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                      className="w-1.5 h-1.5 bg-current rounded-full"
                    />
                  </div>
                  <span className="text-xs italic">Daizy is sniffing around...</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
          </motion.div>
        ) : (
          /* Toggle Button */
          <motion.button
            key="toggle-button"
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="relative w-16 h-16 rounded-full bg-primary shadow-xl flex items-center justify-center overflow-hidden border-2 border-white"
          >
            <Image
              src="/daizy_bot.gif"
              alt="Open Daizy Chat"
              fill
              className="object-cover"
            />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-[10px] text-white font-bold">1</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
