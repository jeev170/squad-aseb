import { Card } from "@/components/ui/card";
import { Target, Eye, CheckCircle, Compass, Heart, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import SectionDivider from "@/components/SectionDivider";
import ParticleBackground from "@/components/ParticleBackground";

const About = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  const objectives = [
    "To induce the traits of discipline and responsibility among the student community and guide them towards careers in the Indian Defence Forces.",
    "To inculcate patriotism among the students and mold them into responsible citizens of India.",
    "To ignite the spirit of adventures as it lights up the inner soul.",
    "Foster a strong sense of camaraderie and teamwork among members through collaborative activities and events."
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 pattern-grid opacity-20" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="mb-24" 
          id="about"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm tracking-premium uppercase mb-6"
            >
              <Heart className="w-4 h-4 inline mr-2" />
              Who We Are
            </motion.span>
            <h1 className="text-hero font-serif font-bold text-gradient mb-6">About Us</h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-10 md:p-14 glassmorphism border-2 hover:border-accent/30 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
              <p className="text-xl md:text-2xl text-foreground leading-relaxed relative z-10 font-medium">
                The Squad Club is a vibrant community dedicated to uniting the spirit of adventure with love for the nation. 
                Our mission is to inspire students to explore the beauty, history, and values of our country through engaging 
                outdoor experiences and meaningful patriotic initiatives. We strive to build a platform where enthusiasm for 
                exploration goes hand in hand with respect for our national heritage, motivating members to learn, experience, 
                and contribute with pride and purpose.
              </p>
            </Card>
          </motion.div>
        </motion.section>

        <SectionDivider />

        {/* Mission Section */}
        <motion.section 
          className="mb-24 scroll-smooth-offset" 
          id="mission"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-gold"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="h-8 w-8 text-foreground" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to foster a dynamic community that intertwines patriotism with adventure, encouraging members 
                to actively engage in activities that celebrate and explore our nation's heritage.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-l-4 border-primary hover:shadow-elegant transition-all duration-500">
                <p className="text-foreground leading-relaxed text-lg">
                  Through a blend of outdoor adventures and patriotic events, we aim to inspire a deep appreciation for our 
                  country, cultivate a sense of national pride, and promote a spirit of exploration and contribution to our 
                  shared legacy.
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Vision Section */}
        <motion.section 
          className="mb-24 scroll-smooth-offset" 
          id="vision"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-l-4 border-accent hover:shadow-elegant transition-all duration-500">
                <p className="text-foreground leading-relaxed text-lg">
                  We envision a club where patriotism and adventure converge to strengthen connections to our nation's values. 
                  We endeavour to establish a community that honours and enhances our rich heritage by combining exhilarating 
                  experiences with a profound sense of national pride while embracing the spirit of exploration.
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="w-16 h-16 bg-gradient-burnt rounded-2xl flex items-center justify-center shadow-gold"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Eye className="h-8 w-8 text-burnt-foreground" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Building a community where every member becomes an ambassador of national pride and adventurous spirit.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <SectionDivider variant="flag" />

        {/* Objectives Section */}
        <motion.section 
          className="scroll-smooth-offset mt-20"
          id="objectives"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm tracking-premium uppercase mb-6"
            >
              <Compass className="w-4 h-4 inline mr-2" />
              Our Goals
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">Our Objectives</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The guiding principles that drive every initiative
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 h-full bg-card border-2 border-transparent hover:border-accent/30 transition-all duration-500 group">
                    <div className="flex gap-5 items-start">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-patriotic rounded-xl flex items-center justify-center flex-shrink-0 shadow-elegant group-hover:shadow-gold transition-shadow"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                      </motion.div>
                      <p className="text-foreground leading-relaxed text-lg group-hover:text-gradient transition-all duration-500 pt-2">
                        {objective}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
