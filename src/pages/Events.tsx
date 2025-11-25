import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-primary mb-4">Our Events</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us in celebrating patriotism and adventure through our diverse range of activities and events
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={item}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden h-full flex flex-col group cursor-pointer border-2 hover:border-primary/50 hover:shadow-elegant transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <div className="aspect-video overflow-hidden relative">
                  <motion.img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent text-accent-foreground font-semibold shadow-lg">
                      {event.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <motion.div 
                      className="flex items-center gap-2 text-muted-foreground"
                      whileHover={{ x: 5 }}
                    >
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{event.date}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2 text-muted-foreground"
                      whileHover={{ x: 5 }}
                    >
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{event.location}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2 text-muted-foreground"
                      whileHover={{ x: 5 }}
                    >
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{event.attendees} Participants</span>
                    </motion.div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {event.description}
                  </p>

                  <motion.div 
                    className="mt-4 pt-4 border-t border-border"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  >
                    <span className="text-primary font-semibold group-hover:underline">
                      Learn More →
                    </span>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <Card className="p-12 bg-gradient-patriotic text-primary-foreground border-0">
            <h2 className="text-4xl font-bold mb-4">Want to Participate?</h2>
            <p className="text-xl mb-6 opacity-90">
              Join us in our upcoming events and be part of the adventure!
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-md font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
