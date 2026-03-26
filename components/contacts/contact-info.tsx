"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "angeliedejer@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 922 533 5975",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cebu City, Philippines",
  },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
          <CardDescription className="text-muted">
            Reach out to me directly through any of these channels. I typically respond within 24-48 hours.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {contactDetails.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/50">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <contact.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted">{contact.label}</p>
                  <p className="text-foreground font-medium">{contact.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}
