import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Instagram, Send, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import MagneticButton from "@/components/MagneticButton";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    try {
      console.log('Form submission:', data);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "thesquadclub.aseb@gmail.com",
      href: "mailto:thesquadclub.aseb@gmail.com",
      description: "Drop us a line anytime"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@squad_aseb",
      href: "https://instagram.com/squad_aseb",
      description: "Follow our adventures"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Amrita Vishwa Vidyapeetham",
      href: "#",
      description: "Bengaluru Campus, Karnataka"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 pattern-grid opacity-20" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm tracking-premium uppercase mb-6"
          >
            <MessageCircle className="w-4 h-4 inline mr-2" />
            Get in Touch
          </motion.span>
          <h1 className="text-hero font-serif font-bold text-gradient mb-4">Connect With Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you - reach out and let's start a conversation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="p-8 md:p-10 glassmorphism border-2 hover:border-accent/30 transition-all duration-500">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8 flex items-center gap-3">
                <Send className="w-6 h-6 text-accent" />
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Name <span className="text-accent">*</span>
                    </Label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Your full name"
                      className="h-12 bg-muted/50 border-2 focus:border-accent transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email <span className="text-accent">*</span>
                    </Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="your.email@example.com"
                      className="h-12 bg-muted/50 border-2 focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Phone Number
                  </Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    placeholder="+91 98765 43210"
                    className="h-12 bg-muted/50 border-2 focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message <span className="text-accent">*</span>
                  </Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    placeholder="Tell us what's on your mind..."
                    className="min-h-[150px] bg-muted/50 border-2 focus:border-accent transition-colors resize-none"
                  />
                </div>

                <MagneticButton className="w-full">
                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-gradient-gold text-foreground font-bold text-lg shadow-gold hover:shadow-neon transition-all duration-500"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </MagneticButton>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <motion.a
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 glassmorphism border-2 border-transparent hover:border-accent/30 transition-all duration-500 group">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:shadow-neon transition-shadow">
                        <info.icon className="h-6 w-6 text-foreground" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-foreground text-lg mb-1">{info.title}</h3>
                        <p className="text-accent font-medium mb-1">{info.value}</p>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.a>
              </motion.div>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="overflow-hidden border-2 hover:border-accent/30 transition-all duration-500">
                <div className="aspect-video">
                <iframe 
                    src="https://www.google.com/maps?q=12.9065826,77.6865052&z=17&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Amrita Vishwa Vidyapeetham Bengaluru Campus"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
