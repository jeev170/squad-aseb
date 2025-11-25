import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Mountain, Flag, Users, Calendar, Sparkles, Zap, Heart } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { motion } from "framer-motion";

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Sparkles className="w-12 h-12 text-accent mx-auto mb-4 animate-pulse" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl md:text-8xl font-bold text-primary-foreground mb-6 tracking-tight"
          >
            THE SQUAD
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-block"
          >
            <p className="text-2xl md:text-3xl text-primary-foreground/95 mb-4 font-bold bg-accent/20 px-6 py-2 rounded-full backdrop-blur-sm border border-accent/30">
              The Patriotic and Adventure Club
            </p>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto"
          >
            Uniting the spirit of adventure with love for the nation 🇮🇳
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 shadow-elegant hover:scale-105 transition-transform">
              <Link to="/about">
                <Zap className="w-5 h-5 mr-2" />
                Discover Our Mission
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-card/90 hover:bg-card border-accent border-2 hover:scale-105 transition-transform">
              <Link to="/events">View Events</Link>
            </Button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full backdrop-blur-sm border border-accent/30"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-32 right-10 w-32 h-32 bg-primary/20 rounded-full backdrop-blur-sm border border-primary/30"
        />
      </section>

      {/* Features Section with Stagger Animation */}
      <section className="py-24 px-4 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-center mb-4 text-primary"
          >
            What We Stand For
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-muted-foreground text-lg mb-16"
          >
            Our core values that drive everything we do
          </motion.p>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Flag, title: "Patriotism", desc: "Cultivating deep love and respect for our nation", color: "primary" },
              { icon: Mountain, title: "Adventure", desc: "Exploring the beauty and diversity of our country", color: "accent" },
              { icon: Users, title: "Community", desc: "Building strong bonds through shared experiences", color: "primary" },
              { icon: Calendar, title: "Events", desc: "Engaging activities celebrating our heritage", color: "accent" }
            ].map((feature, index) => (
              <motion.div key={index} variants={item}>
                <Card className="p-8 text-center hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden h-full bg-card/50 backdrop-blur-sm border-2 hover:border-primary/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-${feature.color}/10 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:bg-${feature.color}/20 transition-colors`}
                  >
                    <feature.icon className={`h-10 w-10 text-${feature.color}`} />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground relative z-10">{feature.title}</h3>
                  <p className="text-muted-foreground relative z-10 leading-relaxed">
                    {feature.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 bg-gradient-patriotic"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "500+", label: "Active Members", icon: Users },
              { number: "50+", label: "Events Organized", icon: Calendar },
              { number: "10+", label: "Years of Excellence", icon: Heart }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <stat.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-5xl font-bold text-primary-foreground mb-2">{stat.number}</div>
                <div className="text-xl text-primary-foreground/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-background relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center relative z-10"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"
          />
          
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
          <h2 className="text-5xl font-bold mb-6 text-primary">Join Our Journey</h2>
          <p className="text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Be part of a community that celebrates patriotism through adventure and exploration
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="bg-gradient-patriotic text-primary-foreground hover:opacity-90 shadow-elegant text-lg px-10 py-6 h-auto">
              <Link to="/contact">
                <Heart className="w-6 h-6 mr-2" />
                Connect With Us
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
