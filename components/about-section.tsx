"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { GraduationCap, Briefcase } from "lucide-react"

const timeline = [
  {
    type: "education",
    icon: GraduationCap,
    title: "Bachelor of Science in Computer Engineering",
    organization: "Cebu Institute of Technology-University",
    period: "2022 - Present",
    description: "Pursuing degree with focus on software and hardware development",
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "Junior and Senior High School",
    organization: "Saint Theresa's College of Cebu",
    period: "2016 - 2022",
    description: "Completed junior and senior high school education",
  },
  {
    type: "experience",
    icon: Briefcase,
    title: "IT Support Intern",
    organization: "NG KHAI Development",
    period: "June 2025 - July 2025",
    description: "Assisted with hardware and software maintenance, network setup, and system troubleshooting",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted max-w-2xl mx-auto">My journey in technology, design, and innovation</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center"
          >
            <motion.img
              src="/profile.png"
              alt="Ana Angeli S. Edejer"
              className="w-full max-w-sm aspect-square object-cover rounded-full shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4">Hello! I'm Ana</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a detail-oriented Computer Engineering student with a passion for creating innovative solutions that
                bridge the gap between design, software, and hardware.
              </p>
              <p>
                My journey in technology began with a curiosity about how things work, which led me to explore
                everything from UI/UX design to Arduino programming. I believe in the power of technology to solve
                real-world problems and improve people's lives.
              </p>
              <p>
                When I'm not coding or designing, I enjoy learning new technologies, working on personal projects, and
                collaborating with others to bring creative ideas to life.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Education & Experience</h3>
          <div className="space-y-6">
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h4 className="text-lg font-bold">{item.title}</h4>
                          <span className="text-sm text-muted">{item.period}</span>
                        </div>
                        <p className="text-primary mb-2">{item.organization}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
