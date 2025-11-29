import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Briefcase, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import MagneticButton from "@/components/MagneticButton";

// Import alumni images - replace these with your own images in src/assets/alumni/
import alumni1 from "@/assets/alumni/alumni-1.jpg";
import alumni2 from "@/assets/alumni/alumni-2.jpg";
import alumni3 from "@/assets/alumni/alumni-3.jpg";
import alumni4 from "@/assets/alumni/alumni-4.jpg";
import alumni5 from "@/assets/alumni/alumni-5.jpg";
import alumni6 from "@/assets/alumni/alumni-6.jpg";

const Alumni = () => {
  const alumni = [
    {
      name: "Rajesh Kumar",
      batch: "2019-20",
      current: "Indian Army Officer",
      image: alumni1,
      testimonial: "The Squad shaped my leadership skills and instilled in me a deep sense of duty towards the nation. The experiences I gained here were truly transformative and continue to guide me in my career."
    },
    {
      name: "Priya Sharma",
      batch: "2018-19",
      current: "Adventure Tourism Entrepreneur",
      image: alumni2,
      testimonial: "The Squad ignited my passion for adventure and taught me to combine it with purpose. Today, I run my own adventure tourism company, taking people on journeys that transform lives."
    },
    {
      name: "Arun Patel",
      batch: "2020-21",
      current: "Defense Analyst",
      image: alumni3,
      testimonial: "Being part of The Squad was transformative. The bonds I formed here remain strong, and the discipline I learned has been invaluable in my career as a defense analyst."
    },
    {
      name: "Sneha Reddy",
      batch: "2017-18",
      current: "Social Worker & NGO Founder",
      image: alumni4,
      testimonial: "The Squad taught me that true patriotism means serving the community. I founded my NGO to continue the spirit of service that was instilled in me during my time with The Squad."
    },
    {
      name: "Vikram Singh",
      batch: "2021-22",
      current: "Corporate Trainer",
      image: alumni5,
      testimonial: "The leadership experiences at The Squad gave me invaluable skills that I now share with corporate teams. The principles of teamwork and dedication I learned are timeless."
    },
    {
      name: "Anjali Menon",
      batch: "2019-20",
      current: "Environmental Conservationist",
      image: alumni6,
      testimonial: "Our expeditions opened my eyes to India's natural heritage and the need to protect it. The Squad gave me both the passion and the skills to pursue environmental conservation."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <ParticleBackground />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm tracking-premium uppercase mb-6"
          >
            <GraduationCap className="w-4 h-4 inline mr-2" />
            Success Stories
          </motion.span>
          <h1 className="text-hero font-serif font-bold text-gradient mb-6">Our Alumni</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proud members who continue to make a difference with the values gained from The Squad
          </p>
        </motion.div>

        {/* Alumni Alternating Layout */}
        <div className="space-y-16 mb-24">
          {alumni.map((person, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <Card className={`overflow-hidden border-2 border-transparent hover:border-accent/30 transition-all duration-500 bg-card`}>
                  <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Image Section */}
                    <div className="md:w-2/5 relative">
                      <div className="aspect-square md:aspect-auto md:h-full">
                        <img 
                          src={person.image} 
                          alt={person.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent via-transparent to-card hidden md:block`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:hidden" />
                      
                      {/* Batch Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-gradient-gold text-foreground font-bold text-sm rounded-full shadow-gold">
                          Batch {person.batch}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-2">
                          {person.name}
                        </h3>
                        <div className="flex items-center gap-2 text-accent">
                          <Briefcase className="w-5 h-5" />
                          <span className="font-medium text-lg">{person.current}</span>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <Quote className="absolute -left-2 -top-4 w-12 h-12 text-accent/20" />
                        <p className="text-muted-foreground text-lg leading-relaxed pl-8 italic">
                          "{person.testimonial}"
                        </p>
                        <Quote className="absolute right-0 bottom-0 w-12 h-12 text-accent/20 rotate-180" />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-12 md:p-16 bg-gradient-patriotic text-primary-foreground text-center border-0 relative overflow-hidden">
            <div className="absolute inset-0 pattern-diagonal opacity-10" />
            
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]"
            />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <Sparkles className="w-12 h-12 text-accent mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Are You an Alumnus?</h2>
              <p className="text-xl mb-10 text-primary-foreground/80">
                We'd love to hear from you! Share your journey and inspire current members.
              </p>
              <MagneticButton>
                <Button asChild size="lg" className="bg-gradient-gold text-foreground font-bold text-lg px-10 py-6 h-auto shadow-gold hover:shadow-neon transition-all duration-500">
                  <a href="mailto:squad_aseb@gmail.com?subject=Alumni Testimonial" className="flex items-center gap-3">
                    Get in Touch
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </MagneticButton>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Alumni;
