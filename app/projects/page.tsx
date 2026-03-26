"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Figma, ExternalLink, LayoutGrid, Folder as FolderIcon, ArrowLeft } from "lucide-react"
import Folder from "@/components/Folder"
import Link from "next/link"
import { projects, type Project } from "@/constants/projects"
import { DaizyChatbot } from "@/components/daizy-chatbot"

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

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFolderOpen, setIsFolderOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"folder" | "cards">("folder")

  const handleCardClick = (item: any) => {
    const project = projects.find(p => p.id === item.id)
    if (project) {
      setSelectedProject(project)
      setIsModalOpen(true)
    }
  }

  const projectItems = projects.map(p => ({
    id: p.id,
    image: p.image,
    title: p.title
  }))

  return (
    <div className="min-h-screen bg-[#0d0d12] text-[#f0f6fc]">
      <main className="pt-12 pb-20">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Showcase</h1>
            <p className="text-[#9ca3af] max-w-2xl mx-auto mb-8">
              A comprehensive collection of my work, ordered from most recent to oldest.
            </p>

            <div className="flex justify-center gap-4">
              <Button
                variant={viewMode === "folder" ? "default" : "outline"}
                onClick={() => setViewMode("folder")}
                className={viewMode === "folder" ? "bg-primary hover:bg-secondary text-primary-foreground" : "border-[#27272a] hover:bg-[#16161e] text-[#9ca3af]"}
              >
                <FolderIcon className="mr-2 h-4 w-4" />
                Folder View
              </Button>
              <Button
                variant={viewMode === "cards" ? "default" : "outline"}
                onClick={() => setViewMode("cards")}
                className={viewMode === "cards" ? "bg-primary hover:bg-secondary text-primary-foreground" : "border-[#27272a] hover:bg-[#16161e] text-[#9ca3af]"}
              >
                <LayoutGrid className="mr-2 h-4 w-4" />
                Grid View
              </Button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {viewMode === "folder" ? (
              <motion.div
                key="folder-view"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  minHeight: isFolderOpen ? "800px" : "300px",
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 1.2,
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="flex justify-center items-center relative py-20"
              >
                <Folder
                  color="#2F7AE5"
                  size={2.5}
                  items={projectItems}
                  onCardClick={handleCardClick}
                  onOpenChange={setIsFolderOpen}
                />
              </motion.div>
            ) : (
              <motion.div
                key="grid-view"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.map((project) => (
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
            )}
          </AnimatePresence>

          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="w-[95vw] md:w-auto md:max-w-4xl max-h-[90vh] md:max-h-[80vh] overflow-hidden p-0 bg-[#0d0d14] border-[#27272a] text-[#f0f6fc] rounded-2xl">
              {selectedProject && (
                <>
                  <DialogHeader className="sr-only">
                    <DialogTitle>{selectedProject.title}</DialogTitle>
                    <DialogDescription>{selectedProject.date}</DialogDescription>
                  </DialogHeader>

                  <div className="flex flex-col md:flex-row h-full">
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

                    <div className="w-full md:w-[50%] p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[80vh] scrollbar-hide flex flex-col gap-5">
                      <div>
                        <p className="text-xs text-primary uppercase tracking-widest font-bold mb-1">{selectedProject.date}</p>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#f0f6fc]">{selectedProject.title}</h3>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Overview</h4>
                        <p className="text-[#d1d5db] leading-relaxed text-sm">{selectedProject.description}</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">My Role</h4>
                        <p className="text-[#d1d5db] leading-relaxed text-sm">{selectedProject.role}</p>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Learning Outcomes</h4>
                        <p className="text-[#d1d5db] leading-relaxed text-sm">{selectedProject.learning}</p>
                      </div>

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
                            className="border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground"
                            onClick={() => window.open(selectedProject.figmaUrl, "_blank")}
                          >
                            <Figma className="h-4 w-4 mr-2" />
                            View Design
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </main>
      <DaizyChatbot />
    </div>
  )
}
