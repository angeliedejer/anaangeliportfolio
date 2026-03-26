"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, Briefcase, MapPin, Calendar, Target, Heart, Sparkles, Code, ShieldCheck, User, ArrowLeft, Info, Award, ExternalLink, CheckCircle, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { DaizyChatbot } from "@/components/daizy-chatbot"

const quickFacts = [
  { icon: GraduationCap, label: "EDUCATION", value: "Bachelor of Science in Computer Engineering" },
  { icon: MapPin, label: "BASED IN", value: "Cebu City, Philippines" },
  { icon: Calendar, label: "AVAILABILITY", value: "Open to full-time  & freelance opportunities" },
  { icon: Target, label: "FOCUS AREA", value: "UI/UX Design & Front-end Development" },
]

const hobbies = [
  "Learning new design trends",
  "Exploring frontend frameworks",
  "Arduino & Hardware tinkering",
  "Collaborating on creative projects",
  "Continuous self-improvement",
]

const interests = [
  "User-Centered Design (UCD)",
  "Responsive Web Architecture",
  "Interactive Prototypes",
  "IoT & Embedded Systems",
  "Human-Computer Interaction",
]

const internshipResponsibilities = [
    "Inspecting desktops and laptops for hardware and software issues.",
    "Replacing and installing hardware components (e.g., SSD, HDD, RAM, Keyboard, etc.).",
    "Installing and updating Windows OS on desktop and laptops.",
    "Basic software configuration (e.g., changing IP addresses in network switches).",
    "Assembling and installing network cabinets and testing POE switches.",
    "Creating crossover and straight-through LAN cables and crimping RJ45 connectors.",
    "Inspecting and troubleshooting CCTV feeds.",
]

export default function AboutPage() {
  const [certModalOpen, setCertModalOpen] = useState(false)
  const [ojtModalOpen, setOjtModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0d0d12] text-[#f0f6fc]">
      <main className="pt-12 pb-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
            className="mb-8"
          >
            <Link href="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary gap-2 p-0 h-auto hover:bg-transparent transition-colors group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to main
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl md:text-4xl font-bold mb-1"
              >
                All about <span className="text-primary">Me</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground text-base md:text-lg"
              >
              </motion.p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Profile + Basic Information + Certification stacked vertically */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              >
                <Card className="py-4 px-4 bg-[#16161e] border-[#27272a] flex flex-row items-center gap-4 rounded-2xl hover:border-primary/50 transition-colors">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-primary p-0.5 bg-[#0d0d12] rotate-[-4deg]">
                      <Image 
                        src="/professional_image.png" 
                        alt="Ana Angeli" 
                        fill 
                        className="object-cover object-top rounded-[10px] rotate-[4deg]"
                      />
                    </div>
                  </div>
                  <div className="text-left">
                    <h2 className="text-sm font-bold text-[#f0f6fc] leading-tight">Ana Angeli S. Edejer</h2>
                    <p className="text-primary text-xs font-medium mt-0.5">Computer Engineering Student</p>
                  </div>
                </Card>
              </motion.div>

              {/* Quick Facts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
              >
                <Card className="p-3 bg-[#16161e] border-[#27272a] rounded-2xl hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Info className="w-3 h-3 text-primary" />
                    </div>
                    <h3 className="text-sm font-bold text-[#f0f6fc]">Basic Information</h3>
                  </div>
                  <div className="space-y-1">
                    {quickFacts.map((fact, i) => (
                      <motion.div 
                        key={i} 
                        className="flex gap-2 items-center group/fact px-1.5 py-1 rounded-lg hover:bg-primary/5 transition-colors cursor-default"
                        whileHover={{ x: 4 }}
                      >
                        <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover/fact:border-primary/50 transition-colors">
                          <fact.icon className="w-3 h-3 text-primary" />
                        </div>
                        <div>
                          <p className="text-[8px] font-bold text-primary tracking-wider">{fact.label}</p>
                          <p className="text-[10px] text-[#f0f6fc] font-medium leading-tight">{fact.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Certification Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                onClick={() => setCertModalOpen(true)}
                className="cursor-pointer"
              >
                <Card className="p-0 bg-[#16161e] border-[#27272a] rounded-2xl hover:border-primary/50 transition-colors overflow-hidden">
                  {/* Certificate Image */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src="/projects/IBMCert.jpg"
                      alt="IBM Web Development Fundamentals Certificate"
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16161e] via-[#16161e]/20 to-transparent" />
                  </div>

                  {/* Certificate Info */}
                  <div className="px-5 pb-5 -mt-2 relative z-10">
                    {/* Year Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-full bg-emerald-500/15 flex items-center justify-center border border-emerald-500/30">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="text-sm font-bold text-emerald-400 tracking-wide">2026</span>
                    </div>

                    {/* Title & Issuer */}
                    <h4 className="text-base font-bold text-primary mb-1 leading-tight">Web Development Fundamentals</h4>
                    <p className="text-sm text-muted-foreground font-medium mb-3">IBM</p>

                    {/* Description */}
                    <p className="text-xs text-[#9ca3af] leading-relaxed">
                      Completed a comprehensive Web Development Fundamentals certification covering HTML, CSS, JavaScript, software development lifecycle, testing, deployment, and DevOps, culminating in building and deploying an interactive web application.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Right Column: My Story + Internship stacked vertically */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* My Story */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              >
                <Card className="p-6 bg-[#16161e] border-[#27272a] rounded-2xl hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-[#f0f6fc]">My Story</h3>
                  </div>
                  <div className="space-y-3 text-[#d1d5db] leading-relaxed text-[13px] md:text-sm">
                    <p>
                      I'm a detail-oriented Computer Engineering student with a passion for creating innovative solutions that bridge the gap between design, software, and hardware. My journey in technology began with a curiosity about how things work, which led me to explore everything from UI/UX design to Arduino programming.
                    </p>
                    <p>
                      Over time, I've developed a deep interest in user-centered design and frontend development. I believe that the best digital products are not only functional but also intuitive and visually engaging. I love the challenge of transforming complex requirements into clean, elegant interfaces that provide seamless user experiences.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Internship Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
              >
                <Card className="p-6 bg-[#16161e] border-[#27272a] rounded-2xl hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-[#f0f6fc]">Work Experience</h3>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 items-start mb-6 group/intern">
                    <div className="w-20 h-20 rounded-xl bg-white p-2 shrink-0 flex items-center justify-center overflow-hidden border border-[#27272a] group-hover/intern:border-primary/50 transition-colors">
                      <Image 
                        src="/ngkhai.png" 
                        alt="NG KHAI" 
                        width={80} 
                        height={80} 
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#f0f6fc] text-lg leading-tight mb-1 group-hover/intern:text-primary transition-colors">IT Support Intern</h4>
                      <p className="text-primary font-medium mb-1">NG KHAI Development</p>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">JUN – JUL 2025</p>
                    </div>
                    <Button
                        onClick={() => setOjtModalOpen(true)}
                        variant="outline"
                        size="sm"
                        className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all gap-1.5 text-xs shrink-0 cursor-pointer"
                      >
                        <Award className="w-3.5 h-3.5" />
                        View Certificate
                      </Button>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-sm font-bold text-[#f0f6fc] border-b border-[#27272a] pb-2">Key Responsibilities</h5>
                    <ul className="space-y-2">
                      {internshipResponsibilities.map((resp, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start gap-3 text-[13px] text-[#9ca3af] leading-relaxed p-1.5 rounded-lg hover:bg-primary/5 hover:text-[#f0f6fc] transition-all cursor-default"
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          {resp}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Certificate Modal */}
      <AnimatePresence>
        {certModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setCertModalOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-[#13131a] border border-[#27272a] rounded-2xl max-w-4xl w-full pointer-events-auto overflow-hidden shadow-2xl shadow-primary/5">
                <div className="flex flex-col md:flex-row items-stretch">
                  {/* Left: Certificate Image */}
                  <div className="md:w-1/2 p-5 flex items-center justify-center bg-[#0d0d12]">
                    <div className="w-full rounded-xl overflow-hidden border border-primary/30 shadow-[0_0_24px_rgba(99,102,241,0.08)]">
                      <Image
                        src="/projects/IBMCert.jpg"
                        alt="IBM Web Development Fundamentals Certificate"
                        width={600}
                        height={420}
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div className="md:w-1/2 p-8 flex flex-col justify-between relative">
                    {/* Close Button */}
                    <button
                      onClick={() => setCertModalOpen(false)}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 hover:border-primary/40 transition-all cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <div>
                      {/* Subtitle */}
                      <p className="text-sm text-primary font-medium tracking-wide mb-4">
                        IBM — 2026
                      </p>

                      {/* Title */}
                      <h2 className="text-2xl md:text-3xl font-bold text-[#f0f6fc] mb-5 leading-tight">
                        Web Development Fundamentals
                      </h2>

                      {/* Description */}
                      <p className="text-[#9ca3af] text-sm leading-relaxed">
                        Completed a comprehensive Web Development Fundamentals certification covering HTML, CSS, JavaScript, software development lifecycle, testing, deployment, and DevOps, culminating in building and deploying an interactive web application.
                      </p>
                    </div>

                    {/* Verified Badge */}
                    <div className="mt-8 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-primary">Verified Credential</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <DaizyChatbot />

      {/* OJT Certificate Modal */}
      <AnimatePresence>
        {ojtModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setOjtModalOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-[#13131a] border border-[#27272a] rounded-2xl max-w-4xl w-full pointer-events-auto overflow-hidden shadow-2xl shadow-primary/5">
                <div className="flex flex-col md:flex-row items-stretch">
                  {/* Left: OJT Certificate Image */}
                  <div className="md:w-1/2 p-5 flex items-center justify-center bg-[#0d0d12]">
                    <div className="w-full rounded-xl overflow-hidden border border-primary/30 shadow-[0_0_24px_rgba(99,102,241,0.08)]">
                      <Image
                        src="/projects/OJTCompletion.jpg"
                        alt="OJT Completion Certificate"
                        width={600}
                        height={420}
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div className="md:w-1/2 p-8 flex flex-col justify-between relative">
                    {/* Close Button */}
                    <button
                      onClick={() => setOjtModalOpen(false)}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 hover:border-primary/40 transition-all cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <div>
                      {/* Subtitle */}
                      <p className="text-sm text-primary font-medium tracking-wide mb-4">
                        NG KHAI Development — 2025
                      </p>

                      {/* Title */}
                      <h2 className="text-2xl md:text-3xl font-bold text-[#f0f6fc] mb-5 leading-tight">
                        Certificate of Completion
                      </h2>

                      {/* Description */}
                      <p className="text-[#9ca3af] text-sm leading-relaxed">
                        Successfully completed an IT Support internship at NG KHAI Development, gaining hands-on experience in hardware maintenance, network infrastructure, software configuration, and CCTV systems.
                      </p>
                    </div>

                    {/* Verified Badge */}
                    <div className="mt-8 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold text-primary">Official Completion Certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
