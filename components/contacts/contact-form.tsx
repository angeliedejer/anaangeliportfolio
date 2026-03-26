"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Loader2, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full">
          <CardContent className="flex flex-col items-center justify-center h-full min-h-[400px] gap-4 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <div className="p-4 rounded-full bg-green-500/10 text-green-500">
                <CheckCircle className="w-12 h-12" />
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
            <p className="text-muted max-w-sm">
              Thank you for reaching out. I&apos;ll get back to you as soon as possible.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
              className="mt-4"
            >
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Send a Message</CardTitle>
          <CardDescription className="text-muted">
            Have a project in mind or just want to say hello? Fill out the form below and I&apos;ll get back to you soon.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-foreground">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="subject" className="text-foreground">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-background/50 border-border/50 focus:border-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message" className="text-foreground">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or just say hi..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-background/50 border-border/50 focus:border-primary resize-none"
              />
            </div>

            {error && (
              <p className="text-destructive text-sm">{error}</p>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-secondary text-primary-foreground font-semibold h-12 rounded-lg transition-all shadow-lg shadow-primary/20"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
