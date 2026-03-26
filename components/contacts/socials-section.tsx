"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Facebook } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/angeliedejer",
    color: "hover:bg-[#0077b5]/10 hover:text-[#0077b5] hover:border-[#0077b5]/50",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/angeliedejer",
    color: "hover:bg-foreground/10 hover:text-foreground hover:border-foreground/50",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/angeliedejer",
    color: "hover:bg-[#1877f2]/10 hover:text-[#1877f2] hover:border-[#1877f2]/50",
  },
]

export function SocialsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Connect With Me</CardTitle>
          <CardDescription className="text-muted">
            Follow me on social media to stay updated with my latest projects and activities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {socials.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                <Button
                  variant="outline"
                  className={`gap-2 border-border/50 bg-background/50 text-muted transition-all ${social.color}`}
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-5 h-5" />
                    {social.name}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
