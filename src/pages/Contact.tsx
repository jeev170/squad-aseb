import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Instagram, Send } from "lucide-react";

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
      // For now, just show success message
      // Email functionality will be added with Lovable Cloud
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

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-primary mb-4">Connect With Us</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with The Squad - We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 shadow-elegant">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Your full name"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="your.email@example.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  placeholder="+91 98765 43210"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  required 
                  placeholder="Tell us what's on your mind..."
                  className="mt-2 min-h-32"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="p-8 shadow-elegant">
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a 
                      href="mailto:squad_aseb@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      squad_aseb@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Instagram</h3>
                    <a 
                      href="https://instagram.com/squad_aseb" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      @squad_aseb
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Amrita Vishwa Vidyapeetham<br />
                      Bengaluru Campus<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Google Map */}
            <Card className="overflow-hidden shadow-elegant">
              <div className="aspect-video">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6165686771625!2d77.65669931482163!3d12.930732090880796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1325b4d0c3b7%3A0x9f8beee8e0c5c7f1!2sAmrita%20Vishwa%20Vidyapeetham%2C%20Bengaluru%20Campus!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy"
                  title="Amrita Vishwa Vidyapeetham Bengaluru Campus"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
