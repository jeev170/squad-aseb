import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";
import MagneticButton from "@/components/MagneticButton";

const Events = () => {

  const events = [
    {
      id: 1,
      title: "Mountain Trek 2025",
      date: "March 15-17, 2025",
      location: "Western Ghats",
      description: "Join us for an exhilarating three-day mountain trek through the beautiful Western Ghats.",
      attendees: 45,
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
      category: "Adventure"
    },
    {
      id: 2,
      title: "Republic Day Celebration",
      date: "January 26, 2025",
      location: "Campus Auditorium",
      description: "A grand celebration honoring our Republic Day with patriotic performances and flag hoisting.",
      attendees: 200,
      image: "https://images.unsplash.com/photo-1611329857570-f02f340e7378?w=800&h=600&fit=crop",
      category: "Patriotic"
    },
    {
      id: 3,
      title: "Leadership Workshop",
      date: "February 10, 2025",
      location: "Training Hall",
      description: "A comprehensive workshop focusing on leadership qualities and team management.",
      attendees: 60,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      category: "Workshop"
    },
    {
      id: 4,
      title: "Heritage Walk",
      date: "April 5, 2025",
      location: "Historic Bangalore",
      description: "Explore Bangalore's rich historical sites and cultural heritage.",
      attendees: 35,
      image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800&h=600&fit=crop",
      category: "Cultural"
    },
    {
      id: 5,
      title: "Adventure Camp",
      date: "May 20-23, 2025",
      location: "Coorg",
      description: "Intensive adventure camp featuring rock climbing, rappelling, and survival skills.",
      attendees: 40,
      image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop",
      category: "Adventure"
    },
    {
      id: 6,
      title: "Independence Day Rally",
      date: "August 15, 2025",
      location: "City Center",
      description: "A patriotic rally commemorating India's Independence Day with marches and activities.",
      attendees: 150,
      image: "https://images.unsplash.com/photo-1627873649417-c67f701f1949?w=800&h=600&fit=crop",
      category: "Patriotic"
    }
  ];

  const filteredEvents = events;

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Adventure": return "bg-burnt text-burnt-foreground";
      case "Patriotic": return "bg-primary text-primary-foreground";
      case "Workshop": return "bg-accent text-accent-foreground";
      case "Cultural": return "bg-primary-light text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <ParticleBackground />
      
      <div className="container mx-auto relative z-10">
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
            <Calendar className="w-4 h-4 inline mr-2" />
            Upcoming Activities
          </motion.span>
          <h1 className="text-hero font-serif font-bold text-gradient mb-6">Our Events</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us in celebrating patriotism and adventure through our diverse range of activities
          </p>
        </motion.div>


        {/* Events Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col group cursor-pointer border-2 border-transparent hover:border-accent/30 transition-all duration-500 bg-card">
                    {/* Image */}
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <motion.img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className={`${getCategoryColor(event.category)} font-bold shadow-lg`}>
                          {event.category}
                        </Badge>
                      </div>
                      
                      {/* Hover Content */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute bottom-4 left-4 right-4"
                      >
                        <p className="text-primary-foreground text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          {event.description}
                        </p>
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-gradient transition-all duration-500">
                        {event.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Calendar className="h-4 w-4 text-accent" />
                          <span className="text-sm font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <MapPin className="h-4 w-4 text-accent" />
                          <span className="text-sm font-medium">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Users className="h-4 w-4 text-accent" />
                          <span className="text-sm font-medium">{event.attendees} Participants</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                        {event.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <Card className="relative p-12 md:p-16 bg-gradient-patriotic text-primary-foreground border-0 overflow-hidden">
            <div className="absolute inset-0 pattern-diagonal opacity-10" />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"
            />
            
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <Sparkles className="w-12 h-12 text-accent mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Want to Participate?</h2>
              <p className="text-xl mb-10 text-primary-foreground/80">
                Join us in our upcoming events and be part of the adventure!
              </p>
              <MagneticButton>
                <Button asChild size="lg" className="bg-gradient-gold text-foreground font-bold text-lg px-10 py-6 h-auto shadow-gold hover:shadow-neon transition-all duration-500">
                  <Link to="/contact" className="flex items-center gap-3">
                    Get in Touch
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
