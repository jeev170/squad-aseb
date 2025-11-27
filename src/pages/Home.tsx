import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Mountain, Flag, Users, Calendar, Heart, Award, Target } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </motion.div>

        {/* Animated gradient orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
        />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", damping: 20 }}
          >
            <motion.h1 
              className="text-7xl md:text-9xl font-serif font-bold text-primary-foreground mb-8 tracking-tight leading-none"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 40px rgba(255,255,255,0.3)",
                  "0 0 20px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              THE SQUAD
            </motion.h1>
            
            <motion.div 
              className="inline-block mb-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
            >
              <p className="text-2xl md:text-4xl text-primary-foreground font-semibold glassmorphism px-10 py-4 rounded-full border-2 border-accent/50">
                The Patriotic and Adventure Club
              </p>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-primary-foreground/95 mb-14 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Uniting the spirit of adventure with love for the nation
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-12 py-7 h-auto shadow-glow hover:shadow-glow transition-all">
                  <Link to="/about">
                    Discover Our Mission
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="glassmorphism border-primary-foreground/40 border-2 text-primary-foreground hover:text-primary-foreground text-lg px-12 py-7 h-auto hover:bg-white/20 transition-all">
                  <Link to="/events">View Events</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ 
            y: [0, 10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="min-h-screen py-24 px-4 bg-background flex items-center relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, hsl(var(--accent)) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%)"
            ]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-serif font-bold mb-6 text-primary">What We Stand For</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values that drive everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Flag, title: "Patriotism", desc: "Cultivating deep love and respect for our nation", gradient: "from-primary/10 to-primary/5" },
              { icon: Mountain, title: "Adventure", desc: "Exploring the beauty and diversity of our country", gradient: "from-accent/10 to-accent/5" },
              { icon: Users, title: "Community", desc: "Building strong bonds through shared experiences", gradient: "from-primary/10 to-primary/5" },
              { icon: Award, title: "Excellence", desc: "Striving for excellence in all our endeavors", gradient: "from-accent/10 to-accent/5" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -15, rotateY: 5 }}
              >
                <Card className={`p-10 text-center hover:shadow-glow transition-all duration-500 group h-full bg-gradient-to-br ${feature.gradient} border-2 hover:border-primary/50 relative overflow-hidden`}>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.7, type: "spring" }}
                    className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:shadow-glow relative z-10"
                  >
                    <feature.icon className="h-12 w-12 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-foreground relative z-10 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    {feature.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="min-h-screen py-24 px-4 bg-gradient-patriotic flex items-center">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl font-serif font-bold mb-6 text-primary-foreground">Our Journey</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              A decade of fostering patriotism and adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
            {[
              { number: "500+", label: "Active Members", icon: Users },
              { number: "50+", label: "Events Organized", icon: Calendar },
              { number: "10+", label: "Years of Excellence", icon: Target }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
                className="group"
              >
                <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors">
                  <stat.icon className="w-12 h-12 text-accent" />
                </div>
                <div className="text-6xl font-bold text-primary-foreground mb-4">{stat.number}</div>
                <div className="text-2xl text-primary-foreground/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen py-24 px-4 bg-background flex items-center relative overflow-hidden">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-serif font-bold mb-8 text-primary leading-tight">
              Join Our Journey
            </h2>
            <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Be part of a community that celebrates patriotism through adventure and exploration
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="bg-gradient-patriotic text-primary-foreground hover:opacity-90 shadow-elegant text-xl px-12 py-8 h-auto">
                <Link to="/contact">
                  <Heart className="w-6 h-6 mr-3" />
                  Connect With Us
                </Link>
              </Button>
            </motion.div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link to="/gallery">
                  <Card className="p-6 hover:shadow-elegant transition-all hover:scale-105 cursor-pointer border-2 hover:border-primary/50">
                    <Mountain className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-foreground mb-2">View Gallery</h3>
                    <p className="text-sm text-muted-foreground">Explore our adventures</p>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/events">
                  <Card className="p-6 hover:shadow-elegant transition-all hover:scale-105 cursor-pointer border-2 hover:border-primary/50">
                    <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-foreground mb-2">Our Events</h3>
                    <p className="text-sm text-muted-foreground">Join upcoming activities</p>
                  </Card>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/squad/2025">
                  <Card className="p-6 hover:shadow-elegant transition-all hover:scale-105 cursor-pointer border-2 hover:border-primary/50">
                    <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold text-foreground mb-2">Meet The Squad</h3>
                    <p className="text-sm text-muted-foreground">Our leadership team</p>
                  </Card>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
