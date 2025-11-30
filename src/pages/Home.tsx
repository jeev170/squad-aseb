import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Mountain, Flag, Users, Calendar, Heart, Award, Target, 
  Sparkles, TrendingUp, Trophy, Compass, Star, ArrowRight,
  Play, ChevronDown, Zap
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBanner from "@/components/hero-banner.jpg";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedCounter from "@/components/AnimatedCounter";
import Timeline from "@/components/Timeline";
import SectionDivider from "@/components/SectionDivider";
import MagneticButton from "@/components/MagneticButton";


const Home = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1.5, 1.2]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  const timelineItems = [
    { year: "2016", title: "The Beginning", description: "The Squad was founded with a vision to blend patriotism with adventure.", icon: Flag },
    { year: "2018", title: "First Major Trek", description: "Successfully organized our first Western Ghats expedition with 50+ members.", icon: Mountain },
    { year: "2020", title: "Digital Expansion", description: "Adapted to virtual events while maintaining our community spirit.", icon: Zap },
    { year: "2023", title: "500+ Members", description: "Reached a milestone of 500 active members across batches.", icon: Users },
    { year: "2025", title: "A Decade Strong", description: "Celebrating 10 years of fostering patriotism and adventure.", icon: Trophy },
  ];

  const values = [
    { 
      icon: Flag, 
      title: "Patriotism", 
      desc: "Cultivating deep love and respect for our nation through meaningful experiences",
      gradient: "from-primary/20 to-primary/5"
    },
    { 
      icon: Mountain, 
      title: "Adventure", 
      desc: "Exploring the beauty and diversity of India through thrilling expeditions",
      gradient: "from-burnt/20 to-burnt/5"
    },
    { 
      icon: Users, 
      title: "Community", 
      desc: "Building lifelong bonds through shared experiences and collective growth",
      gradient: "from-accent/20 to-accent/5"
    },
    { 
      icon: Award, 
      title: "Excellence", 
      desc: "Striving for the highest standards in everything we do",
      gradient: "from-primary/20 to-accent/5"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Epic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        
        {/* Cinematic Background */}
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBanner})` }}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -30, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-accent/25 rounded-full blur-[150px]"
        />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto pt-20">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring", damping: 20 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full glassmorphism-dark border border-accent/30 mb-8"
            >
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-primary-foreground/90 text-sm font-medium tracking-premium uppercase">
                Est. 2016
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-display font-serif font-bold text-primary-foreground mb-6 leading-none"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="block text-glow">THE SQUAD</span>
            </motion.h1>
            
            {/* Animated Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mb-8"
            >
              <p className="text-3xl md:text-5xl font-serif text-primary-foreground/95 italic">
                Where{" "}
                <span className="text-gold-gradient font-bold not-italic">Patriotism</span>
                {" "}Meets{" "}
                <span className="text-gold-gradient font-bold not-italic">Adventure</span>
              </p>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              A vibrant community uniting the spirit of exploration with love for our nation
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <MagneticButton>
                <Button asChild size="lg" className="bg-gradient-gold text-foreground font-bold text-lg px-10 py-7 h-auto shadow-gold hover:shadow-neon transition-all duration-500 group">
                  <Link to="/about" className="flex items-center gap-3">
                    <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    Discover Our Mission
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </MagneticButton>
              
              <MagneticButton>
                <Button asChild size="lg" variant="outline" className="glassmorphism-dark border-2 border-primary-foreground/30 text-primary-foreground font-bold text-lg px-10 py-7 h-auto hover:border-accent hover:bg-accent/10 transition-all duration-500 group">
                  <Link to="/events" className="flex items-center gap-3">
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    View Events
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* Impact Stats Section */}
      <section className="py-24 px-4 bg-gradient-patriotic relative overflow-hidden">
        <div className="absolute inset-0 pattern-diagonal opacity-10" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: 500, suffix: "+", label: "Active Members", icon: Users },
              { value: 50, suffix: "+", label: "Events Organized", icon: Calendar },
              { value: 10, suffix: "+", label: "Years of Excellence", icon: Trophy },
              { value: 25, suffix: "+", label: "Adventure Treks", icon: Mountain },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors"
                >
                  <stat.icon className="w-8 h-8 text-accent" />
                </motion.div>
                <div className="text-5xl md:text-6xl font-serif font-bold text-primary-foreground mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-primary-foreground/80 font-medium tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-30" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm tracking-premium uppercase mb-6"
            >
              Our Core Values
            </motion.span>
            <h2 className="text-hero font-serif font-bold text-gradient mb-6">What We Stand For</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every adventure and shape our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`p-8 h-full bg-gradient-to-br ${value.gradient} border-2 border-transparent hover:border-accent/30 transition-all duration-500 group relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold group-hover:shadow-neon transition-shadow"
                    >
                      <value.icon className="h-8 w-8 text-foreground" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-serif font-bold mb-4 text-foreground group-hover:text-gradient transition-all duration-500">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="flag" />

      {/* Timeline Section */}
      <section className="py-32 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm tracking-premium uppercase mb-6"
            >
              Our Journey
            </motion.span>
            <h2 className="text-hero font-serif font-bold text-gradient mb-6">A Decade of Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped our community
            </p>
          </motion.div>

          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-gradient-patriotic relative overflow-hidden">
        <div className="absolute inset-0 pattern-diagonal opacity-10" />
        
        {/* Animated orbs */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[200px]"
        />

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-8"
            >
              <Heart className="w-16 h-16 text-accent mx-auto" />
            </motion.div>
            
            <h2 className="text-hero font-serif font-bold text-primary-foreground mb-8">
              Ready to Join the Adventure?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Be part of a community that celebrates patriotism through adventure and builds bonds that last a lifetime.
            </p>
            
            <MagneticButton>
              <Button asChild size="lg" className="bg-gradient-gold text-foreground font-bold text-xl px-14 py-8 h-auto shadow-gold hover:shadow-neon transition-all duration-500">
                <Link to="/contact" className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  Join The Squad
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { to: "/gallery", icon: Mountain, title: "Explore Gallery", desc: "See our adventures" },
              { to: "/events", icon: Calendar, title: "Upcoming Events", desc: "Join our activities" },
              { to: "/squad/2025", icon: Users, title: "Meet The Team", desc: "Our leadership" }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={item.to}>
                  <Card className="p-6 glassmorphism-dark border-primary-foreground/10 hover:border-accent/30 transition-all duration-500 group">
                    <item.icon className="w-10 h-10 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-serif font-bold text-primary-foreground mb-2 text-lg">{item.title}</h3>
                    <p className="text-primary-foreground/60 text-sm">{item.desc}</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
