import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Briefcase, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import MagneticButton from "@/components/MagneticButton";

const Alumni = () => {
  const alumni = [
    {
      name: "Rajesh Kumar",
      batch: "2019-20",
      current: "Indian Army Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      testimonial: "The Squad shaped my leadership skills and instilled in me a deep sense of duty towards the nation."
    },
    {
      name: "Priya Sharma",
      batch: "2018-19",
      current: "Adventure Tourism Entrepreneur",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      testimonial: "The Squad ignited my passion for adventure and taught me to combine it with purpose."
    },
    {
      name: "Arun Patel",
      batch: "2020-21",
      current: "Defense Analyst",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      testimonial: "Being part of The Squad was transformative. The bonds I formed here remain strong."
    },
    {
      name: "Sneha Reddy",
      batch: "2017-18",
      current: "Social Worker & NGO Founder",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      testimonial: "The Squad taught me that true patriotism means serving the community."
    },
    {
      name: "Vikram Singh",
      batch: "2021-22",
      current: "Corporate Trainer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      testimonial: "The leadership experiences at The Squad gave me invaluable skills."
    },
    {
      name: "Anjali Menon",
      batch: "2019-20",
      current: "Environmental Conservationist",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
      testimonial: "Our expeditions opened my eyes to India's natural heritage and the need to protect it."
    }
  ];

  const carouselTestimonials = alumni.map(a => ({
    name: a.name,
    role: `${a.current} | Batch ${a.batch}`,
    image: a.image,
    quote: a.testimonial
  }));

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <ParticleBackground />
      
      <div className="container mx-auto max-w-7xl relative z-10">
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

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <Card className="p-8 md:p-16 glassmorphism border-2 border-transparent hover:border-accent/20 transition-all duration-500">
            <TestimonialCarousel testimonials={carouselTestimonials} />
          </Card>
        </motion.div>

        {/* Alumni Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-serif font-bold text-gradient text-center mb-12">Meet Our Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full group border-2 border-transparent hover:border-accent/30 transition-all duration-500 bg-card">
                    {/* Image */}
                    <div className="relative h-48">
                      <img 
                        src={person.image} 
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                      
                      {/* Batch Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gradient-gold text-foreground font-bold text-sm rounded-full shadow-gold">
                          {person.batch}
                        </span>
                      </div>
                      
                      {/* Name overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-serif font-bold text-primary-foreground">
                          {person.name}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-foreground/80">
                          <Briefcase className="w-4 h-4" />
                          <span className="text-sm">{person.current}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="relative">
                        <Quote className="absolute -left-2 -top-2 w-8 h-8 text-accent/20" />
                        <p className="text-muted-foreground leading-relaxed pl-6 italic">
                          "{person.testimonial}"
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
