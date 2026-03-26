import { Metadata } from "next"
import { ContactInfo } from "@/components/contacts/contact-info"
import { SocialsSection } from "@/components/contacts/socials-section"
import { ContactForm } from "@/components/contacts/contact-form"
import { BackButton } from "@/components/contacts/back-button"

export const metadata: Metadata = {
  title: "Contact | Ana Angelie Dejer",
  description: "Get in touch with Ana Angelie Dejer. Send a message, view contact information, and connect on social media.",
}

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='none' stroke='%2358a6ff' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Back Button */}
        <BackButton />
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 inline-block bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-4 tracking-tight">
            Let&apos;s <span className="text-primary italic">Connect</span>
          </h1>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            I&apos;m always excited to discuss new opportunities, collaborations, or just have a friendly chat. 
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info & Socials */}
          <div className="flex flex-col gap-8">
            <ContactInfo />
            <SocialsSection />
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
