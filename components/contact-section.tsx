"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0d0d12]">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='none' stroke='%2358a6ff' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* Availability Tag */}
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-primary text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20"
            >
              Available for work
            </motion.span>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-[#f0f6fc] tracking-tight leading-tight">
              Let’s bring your <br />
              <span className="text-primary italic">ideas to life.</span>
            </h2>

            {/* Description */}
            <p className="text-[#9ca3af] text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              I'm currently open to full-time work, freelancing, and collaborations. 
              Feel free to reach out if you have something in mind.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-secondary text-primary-foreground h-14 px-10 rounded-full text-lg font-bold transition-all shadow-xl shadow-primary/20 group"
                  asChild
                >
                  <Link href="/contacts">
                    Get in touch
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-[#27272a] hover:border-primary/50 text-[#9ca3af] hover:text-[#f0f6fc] h-14 px-10 rounded-full text-lg font-medium transition-all bg-transparent"
                  asChild
                >
                  <Link href="/projects">
                    View my work
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
