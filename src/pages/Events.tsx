import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Mountain Trek 2025",
      date: "March 15-17, 2025",
      location: "Western Ghats",
      description: "Join us for an exhilarating three-day mountain trek through the beautiful Western Ghats. Experience nature, build teamwork, and create lasting memories while exploring India's natural heritage.",
      attendees: 45,
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop",
      category: "Adventure"
    },
    {
      id: 2,
      title: "Republic Day Celebration",
      date: "January 26, 2025",
      location: "Campus Auditorium",
      description: "A grand celebration honoring our Republic Day with patriotic performances, flag hoisting ceremony, and inspiring speeches about our nation's journey and values.",
      attendees: 200,
      image: "https://images.unsplash.com/photo-1611329857570-f02f340e7378?w=800&h=600&fit=crop",
      category: "Patriotic"
    },
    {
      id: 3,
      title: "Leadership Workshop",
      date: "February 10, 2025",
      location: "Training Hall",
      description: "A comprehensive workshop focusing on leadership qualities, team management, and personal development inspired by military discipline and values.",
      attendees: 60,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      category: "Workshop"
    },
    {
      id: 4,
      title: "Heritage Walk",
      date: "April 5, 2025",
      location: "Historic Bangalore",
      description: "Explore Bangalore's rich historical sites and learn about the city's contribution to India's freedom struggle and cultural heritage.",
      attendees: 35,
      image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800&h=600&fit=crop",
      category: "Cultural"
    },
    {
      id: 5,
      title: "Adventure Camp",
      date: "May 20-23, 2025",
      location: "Coorg",
      description: "An intensive adventure camp featuring rock climbing, rappelling, river crossing, and survival skills training in the scenic landscapes of Coorg.",
      attendees: 40,
      image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=600&fit=crop",
      category: "Adventure"
    },
    {
      id: 6,
      title: "Independence Day Rally",
      date: "August 15, 2025",
      location: "City Center",
      description: "A patriotic rally commemorating India's Independence Day, featuring marches, flag distribution, and community engagement activities.",
      attendees: 150,
      image: "https://images.unsplash.com/photo-1627873649417-c67f701f1949?w=800&h=600&fit=crop",
      category: "Patriotic"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <ParticleBackground />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <Calendar className="h-20 w-20 text-accent mx-auto animate-pulse-glow" />
          </motion.div>
          <h1 className="text-8xl font-serif font-bold text-gradient mb-8">Our Events</h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Join us in celebrating patriotism and adventure through our diverse range of activities and events
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              variants={item}
              whileHover={{ y: -15, rotate: 1 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <Card className="overflow-hidden h-full flex flex-col group cursor-pointer border-2 hover:border-accent/50 hover:shadow-glow transition-all duration-500 glassmorphism relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                />
                
                <div className="aspect-video overflow-hidden relative">
                  <motion.img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute top-4 right-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Badge className="bg-gradient-gold text-foreground font-bold shadow-gold text-base px-4 py-1">
                        {event.category}
                      </Badge>
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="p-8 flex-1 flex flex-col relative z-10">
                  <h3 className="text-3xl font-bold text-foreground mb-6 group-hover:text-gradient transition-all duration-500">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <motion.div 
                      className="flex items-center gap-3 text-muted-foreground"
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-base font-semibold">{event.date}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3 text-muted-foreground"
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="text-base font-semibold">{event.location}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3 text-muted-foreground"
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-base font-semibold">{event.attendees} Participants</span>
                    </motion.div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1 text-lg">
                    {event.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <Card className="relative p-16 bg-gradient-patriotic text-primary-foreground border-0 overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
            />
            <div className="relative z-10">
              <h2 className="text-6xl font-serif font-bold mb-6">Want to Participate?</h2>
              <p className="text-2xl mb-10 opacity-90 font-medium">
                Join us in our upcoming events and be part of the adventure!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  to="/contact"
                  className="inline-block bg-gradient-gold text-foreground px-12 py-5 rounded-xl font-bold shadow-gold text-xl border-2 border-accent hover:shadow-glow transition-all duration-500"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
