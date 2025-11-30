import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Instagram, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import MagneticButton from "@/components/MagneticButton";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const Contact = () => {
  const { toast } = useToast();

  useEffect(() => {
    const form = document.getElementById("contactForm") as HTMLFormElement | null;

    if (!form) return;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      // Unique subject to avoid email threading
      const formData = new FormData(form);
      formData.set("_subject", "New Squad Contact Message - " + Date.now());

      try {
        const response = await fetch("https://formsubmit.co/ajax/thesquadclub.aseb@gmail.com", {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (response.ok) {
          toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. We’ll get back to you soon.",
          });
          form.reset();
        } else {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Network Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    });
  }, [toast]);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "thesquadclub.aseb@gmail.com",
      href: "mailto:thesquadclub.aseb@gmail.com",
      description: "Drop us a line anytime",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@squad_aseb",
      href: "https://instagram.com/squad_aseb",
      description: "Follow our adventures",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Amrita Vishwa Vidyapeetham",
      href: "#",
      description: "Bengaluru Campus, Karnataka",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 pattern-grid opacity-20" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
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

              <form id="contactForm" className="space-y-6">
                {/* FormSubmit hidden fields */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name <span className="text-accent">*</span></Label>
                    <Input id="name" name="name" required placeholder="Your full name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email <span className="text-accent">*</span></Label>
                    <Input id="email" name="email" type="email" required placeholder="your.email@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message <span className="text-accent">*</span></Label>
                  <Textarea id="message" name="message" required placeholder="Tell us what's on your mind..." />
                </div>

                <MagneticButton className="w-full">
                  <Button className="w-full h-14 bg-gradient-gold text-foreground font-bold text-lg shadow-gold hover:shadow-neon transition-all duration-500">
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
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
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 glassmorphism border-2 hover:border-accent/30 group">
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
              <Card className="overflow-hidden border-2 hover:border-accent/30">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.695348473493!2d77.67688647520547!3d12.884031087426566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13e06c59fead%3A0x73f6f92c0ab62b97!2sAmrita%20Vishwa%20Vidyapeetham%2C%20Bengaluru%20Campus!5e0!3m2!1sen!2sin!4v1707042812345
"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                    title="Amrita Campus"
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
