import Image from "next/image"
import { Github, Linkedin, Facebook } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-border/50 bg-[#0d0d12] circuit-line overflow-hidden">
      <div className="absolute inset-0 bg-[#0d0d12]/60 backdrop-blur-[1px] pointer-events-none" />
      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        {/* Logo */}
        <div className="mb-6 hover:scale-105 transition-transform duration-300">
          <Image src="/logo.png" alt="AnErZ Logo" width={60} height={60} className="w-12 h-auto" />
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mb-8">
          <a
            href="https://github.com/angeliedejer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0f6fc] hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/ana-edejer-094119276/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0f6fc] hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/AnaAngeli.EDEJER/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f0f6fc] hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright & Tech Stack */}
        <div className="text-center space-y-2">
          <p className="text-[#f0f6fc]/80 text-sm md:text-base font-medium">
            © {currentYear} Ana Angeli Edejer. All rights reserved.
          </p>
          <p className="text-[#f0f6fc]/50 text-xs md:text-sm">
            Built with passion and love ♡
          </p>
        </div>
      </div>
    </footer>
  )
}
