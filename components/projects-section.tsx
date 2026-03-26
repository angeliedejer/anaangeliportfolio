"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Figma, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import { projects, type Project } from "@/constants/projects"

const featuredProjectIds = [10, 8, 6]
const featuredProjects = projects.filter(p => featuredProjectIds.includes(p.id))

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted max-w-2xl mx-auto mb-8">
            A selection of my most impactful work spanning design and software development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <Card
                className="overflow-hidden bg-[#16161e] border-[#27272a] hover:border-primary/50 transition-all duration-300 cursor-pointer group h-full flex flex-col shadow-2xl rounded-2xl"
                onClick={() => {
                  setSelectedProject(project)
                  setIsModalOpen(true)
                }}
              >
                <div className="relative h-48 overflow-hidden bg-[#0d0d12]/50 p-6 flex items-center justify-center border-b border-[#27272a]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center p-4">
                      <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">Ongoing Thesis Project</span>
                      <div className="w-12 h-1 bg-primary/20 rounded-full" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="text-primary font-bold flex items-center bg-[#16161e]/80 px-4 py-2 rounded-full border border-primary/20 shadow-xl">
                      View Details <ExternalLink className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2 text-[#f0f6fc] group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-[#9ca3af] text-sm mb-4 line-clamp-3 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary text-[10px] font-bold border border-primary/20 uppercase tracking-wider">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary text-[10px] font-bold border border-primary/20 uppercase tracking-wider">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-secondary text-primary-foreground group"
            asChild
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          {/* Wide landscape rectangle on md+, portrait on mobile */}
          <DialogContent className="w-[95vw] md:w-auto md:max-w-4xl max-h-[90vh] md:max-h-[80vh] overflow-hidden p-0 bg-[#0d0d14] border-[#27272a] text-[#f0f6fc] rounded-2xl">
            {selectedProject && (
              <>
                {/* Hidden header for accessibility */}
                <DialogHeader className="sr-only">
                  <DialogTitle>{selectedProject.title}</DialogTitle>
                  <DialogDescription>{selectedProject.date}</DialogDescription>
                </DialogHeader>

                {/* LANDSCAPE layout on md+, PORTRAIT/stacked on mobile */}
                <div className="flex flex-col md:flex-row h-full">

                  {/* LEFT: Prototype image — flush, no padding */}
                  <div className="w-full md:w-[50%] bg-[#0a0a10] flex items-center justify-center p-6 md:p-8 md:border-r border-b md:border-b-0 border-[#27272a]">
                    {selectedProject.prototypeImage ? (
                      <img
                        src={selectedProject.prototypeImage}
                        alt={`${selectedProject.title} prototype`}
                        className="w-full h-auto max-h-[40vh] md:max-h-[65vh] object-contain"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center p-8">
                        <span className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Ongoing Thesis Project</span>
                        <div className="w-24 h-1 bg-primary/20 rounded-full" />
                        <p className="mt-6 text-xs text-muted-foreground max-w-[200px]">Development and system integration in progress.</p>
                      </div>
                    )}
                  </div>

                  {/* RIGHT: Details + buttons — scrollable */}
                  <div className="w-full md:w-[50%] p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[80vh] scrollbar-hide flex flex-col gap-5">
                    {/* Category & Date */}
                    <div>
                      <p className="text-xs text-primary uppercase tracking-widest font-bold mb-1">{selectedProject.date}</p>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#f0f6fc]">{selectedProject.title}</h3>
                    </div>

                    {/* Description */}
                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Overview</h4>
                      <p className="text-[#d1d5db] leading-relaxed text-sm">{selectedProject.description}</p>
                    </div>

                    {/* My Role */}
                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">My Role</h4>
                      <p className="text-[#d1d5db] leading-relaxed text-sm">{selectedProject.role}</p>
                    </div>

                    {/* Learning Outcomes */}
                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Learning Outcomes</h4>
                      <p className="text-[#d1d5db] leading-relaxed text-sm">{selectedProject.learning}</p>
                    </div>

                    {/* Tech Stack / Tags */}
                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border border-primary/20 uppercase text-[10px] font-bold tracking-wider px-3 py-1 rounded-full">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2 mt-auto">
                      {selectedProject.liveUrl && (
                        <Button
                          className="bg-accent hover:bg-accent/90"
                          onClick={() => window.open(selectedProject.liveUrl, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {selectedProject.showAllButtons ? (
                        <>
                          {selectedProject.githubUrl && (
                            <Button
                              className="bg-primary hover:bg-secondary"
                              onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Source Code
                            </Button>
                          )}
                          {selectedProject.figmaUrl && (
                            <Button
                              variant="outline"
                              className="border-primary bg-transparent"
                              onClick={() => window.open(selectedProject.figmaUrl, "_blank")}
                            >
                              <Figma className="h-4 w-4 mr-2" />
                              View Design
                            </Button>
                          )}
                        </>
                      ) : selectedProject.category === "design" || selectedProject.category === "both" ? (
                        <>
                          {selectedProject.githubUrl && (
                            <Button
                              className="bg-primary hover:bg-secondary"
                              onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                            >
                              <Github className="h-4 w-4 mr-2" />
                              Source Code
                            </Button>
                          )}
                          {selectedProject.figmaUrl && (
                            <Button
                              variant="outline"
                              className="border-primary bg-transparent"
                              onClick={() => window.open(selectedProject.figmaUrl, "_blank")}
                            >
                              <Figma className="h-4 w-4 mr-2" />
                              View Design
                            </Button>
                          )}
                        </>
                      ) : (
                        selectedProject.githubUrl && (
                          <Button
                            className="bg-primary hover:bg-secondary"
                            onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Source Code
                          </Button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
