import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Mountain, Flag, Users, Calendar, Heart, Award, Target, Sparkles, TrendingUp, Trophy } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Enhanced Visuals */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pattern-dots">
        <ParticleBackground />
        
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </motion.div>

        {/* Animated gradient orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 right-10 w-[600px] h-[600px] bg-primary/40 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-accent/40 rounded-full blur-[120px]"
        />
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, type: "spring", damping: 15 }}
          >
            <motion.div
              animate={{ 
                textShadow: [
                  "0 0 30px rgba(255,215,0,0.6)",
                  "0 0 60px rgba(255,215,0,0.4)",
                  "0 0 30px rgba(255,215,0,0.6)"
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h1 className="text-8xl md:text-[12rem] font-serif font-bold text-primary-foreground mb-10 tracking-tight leading-none shimmer">
                THE SQUAD
              </h1>
            </motion.div>
            
            <motion.div 
              className="inline-block mb-12"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-gold blur-xl opacity-60 animate-pulse-glow" />
                <p className="relative text-3xl md:text-5xl text-primary-foreground font-bold glassmorphism px-12 py-5 rounded-full border-2 border-accent/50 shadow-gold">
                  The Patriotic & Adventure Club
                </p>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-2xl md:text-3xl text-primary-foreground/95 mb-16 max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              Uniting the spirit of adventure with love for the nation
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-8 justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <motion.div 
                whileHover={{ scale: 1.08, y: -5 }} 
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-gold rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500" />
                <Button asChild size="lg" className="relative bg-gradient-gold text-foreground hover:bg-gradient-gold text-xl px-14 py-8 h-auto shadow-gold font-bold border-2 border-accent">
                  <Link to="/about">
                    <Sparkles className="mr-3 h-6 w-6" />
                    Discover Our Mission
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.08, y: -5 }} 
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-primary/50 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500" />
                <Button asChild size="lg" variant="outline" className="relative glassmorphism border-primary-foreground/50 border-2 text-primary-foreground hover:text-primary-foreground text-xl px-14 py-8 h-auto hover:bg-white/20 font-bold">
                  <Link to="/events">
                    <Calendar className="mr-3 h-6 w-6" />
                    View Events
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-primary-foreground/80"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-base font-semibold tracking-wider">SCROLL TO EXPLORE</span>
            <div className="w-8 h-14 border-3 border-primary-foreground/50 rounded-full flex items-start justify-center p-3">
              <motion.div 
                className="w-2 h-3 bg-gradient-gold rounded-full"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Section with Premium Design */}
      <section className="min-h-screen py-32 px-4 bg-background flex items-center relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-50" />
        
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, hsl(var(--accent) / 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.15) 0%, transparent 50%)"
            ]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-gold blur-2xl opacity-40" />
                <Sparkles className="relative h-16 w-16 text-accent mx-auto" />
              </div>
            </motion.div>
            <h2 className="text-7xl font-serif font-bold mb-8 text-gradient">What We Stand For</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
              Our core values that drive everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { 
                icon: Flag, 
                title: "Patriotism", 
                desc: "Cultivating deep love and respect for our nation",
                color: "from-primary/20 to-primary/5",
                shadowColor: "hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.5)]"
              },
              { 
                icon: Mountain, 
                title: "Adventure", 
                desc: "Exploring the beauty and diversity of our country",
                color: "from-accent/20 to-accent/5",
                shadowColor: "hover:shadow-[0_20px_60px_-15px_hsl(var(--accent)/0.5)]"
              },
              { 
                icon: Users, 
                title: "Community", 
                desc: "Building strong bonds through shared experiences",
                color: "from-primary/20 to-primary/5",
                shadowColor: "hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.5)]"
              },
              { 
                icon: Award, 
                title: "Excellence", 
                desc: "Striving for excellence in all our endeavors",
                color: "from-accent/20 to-accent/5",
                shadowColor: "hover:shadow-[0_20px_60px_-15px_hsl(var(--accent)/0.5)]"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, type: "spring" }}
                whileHover={{ y: -20, rotate: 2 }}
                className="group"
              >
                <Card className={`p-12 text-center transition-all duration-700 group h-full bg-gradient-to-br ${feature.color} border-2 hover:border-accent/50 relative overflow-hidden ${feature.shadowColor}`}>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    initial={false}
                  />
                  
                  <motion.div 
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                  />
                  
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
                    className="w-28 h-28 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-10 relative z-10 group-hover:shadow-gold"
                  >
                    <feature.icon className="h-14 w-14 text-primary group-hover:text-accent transition-colors duration-500" />
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold mb-6 text-foreground relative z-10 group-hover:text-gradient transition-all duration-500">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg relative z-10">
                    {feature.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Luxury Design */}
      <section className="min-h-screen py-32 px-4 bg-gradient-patriotic flex items-center relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        
        {/* Animated background elements */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"
        />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Trophy className="h-20 w-20 text-accent mx-auto" />
            </motion.div>
            <h2 className="text-7xl font-serif font-bold mb-8 text-primary-foreground">Our Journey</h2>
            <p className="text-2xl text-primary-foreground/90 max-w-3xl mx-auto font-medium">
              A decade of fostering patriotism and adventure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center max-w-6xl mx-auto">
            {[
              { number: "500+", label: "Active Members", icon: Users },
              { number: "50+", label: "Events Organized", icon: Calendar },
              { number: "10+", label: "Years of Excellence", icon: Target }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.25, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.15, y: -10 }}
                className="group relative"
              >
                <motion.div
                  className="absolute inset-0 bg-accent/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative">
                  <motion.div 
                    className="w-32 h-32 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-accent/50 transition-all duration-500 border-4 border-accent/50"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-16 h-16 text-accent" />
                  </motion.div>
                  <div className="text-8xl font-bold text-primary-foreground mb-6 font-serif">{stat.number}</div>
                  <div className="text-3xl text-primary-foreground/90 font-semibold">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Premium Design */}
      <section className="min-h-screen py-32 px-4 bg-background flex items-center relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30" />
        
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 360, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]"
        />

        <div className="container mx-auto text-center relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-10"
            >
              <TrendingUp className="h-24 w-24 text-accent mx-auto" />
            </motion.div>
            
            <h2 className="text-8xl font-serif font-bold mb-10 text-gradient leading-tight">
              Join Our Journey
            </h2>
            <p className="text-3xl text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
              Be part of a community that celebrates patriotism through adventure and exploration
            </p>
            
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block relative group"
            >
              <div className="absolute -inset-2 bg-gradient-patriotic rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse-glow" />
              <Button asChild size="lg" className="relative bg-gradient-patriotic text-primary-foreground hover:opacity-90 shadow-elegant text-2xl px-16 py-10 h-auto font-bold border-2 border-accent/50">
                <Link to="/contact">
                  <Heart className="w-8 h-8 mr-4" />
                  Connect With Us
                </Link>
              </Button>
            </motion.div>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { to: "/gallery", icon: Mountain, title: "View Gallery", desc: "Explore our adventures" },
                { to: "/events", icon: Calendar, title: "Our Events", desc: "Join upcoming activities" },
                { to: "/squad/2025", icon: Users, title: "Meet The Squad", desc: "Our leadership team" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index + 0.5, duration: 0.6 }}
                >
                  <Link to={item.to}>
                    <Card className="p-10 hover:shadow-glow transition-all duration-500 hover:scale-105 cursor-pointer border-2 hover:border-accent/50 group bg-gradient-to-br from-card to-muted/20 relative overflow-hidden">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      />
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="w-12 h-12 text-primary mx-auto mb-5 group-hover:text-accent transition-colors duration-500" />
                      </motion.div>
                      <h3 className="font-bold text-foreground mb-3 text-2xl group-hover:text-gradient transition-all duration-500">{item.title}</h3>
                      <p className="text-base text-muted-foreground">{item.desc}</p>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
