import { Card } from "@/components/ui/card";
import { Mail, BookOpen, Quote, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";

// Mentor image - upload to public/images/mentor.jpg

const Mentor = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 relative overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 pattern-dots opacity-20" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
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
            <Award className="w-4 h-4 inline mr-2" />
            Faculty Mentor
          </motion.span>
          <h1 className="text-hero font-serif font-bold text-gradient mb-4">Our Mentor</h1>
          <p className="text-xl text-muted-foreground">
            Guiding us with wisdom and experience
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="overflow-hidden border-2 hover:border-accent/30 transition-all duration-500 bg-card">
            {/* Hero Section */}
            <div className="relative h-72 md:h-96 bg-gradient-patriotic overflow-hidden">
              <div className="absolute inset-0 pattern-diagonal opacity-10" />
              
              {/* Animated orbs */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute top-10 right-10 w-48 h-48 bg-accent/20 rounded-full blur-[80px]"
              />
              
              {/* Profile Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative"
                >
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent shadow-gold">
                    <img 
                      src="/images/mentor.jpg" 
                      alt="Dr. Shashi Kumar ME"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-gold text-foreground font-bold rounded-full shadow-gold whitespace-nowrap"
                  >
                    Faculty Mentor
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 space-y-10">
              {/* Name & Title */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-2">
                  Dr. Shashi Kumar ME
                </h2>
                <p className="text-lg text-muted-foreground">
                  Department of Mechanical Engineering
                </p>
              </motion.div>

              {/* Two Column Layout */}
              <div className="grid md:grid-cols-2 gap-10">
                {/* About & Role */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-4 flex items-center gap-3">
                      <Heart className="w-5 h-5 text-accent" />
                      About
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Dr. Shashi Kumar ME is a distinguished faculty member at Amrita Vishwa Vidyapeetham 
                      with extensive experience in mechanical engineering and a deep commitment to student 
                      development. His expertise spans both technical domains and leadership cultivation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-4 flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-accent" />
                      Role in The Squad
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      As our guiding mentor, Dr. Kumar provides strategic direction and mentorship, 
                      helping members develop essential leadership qualities and patriotic values. 
                      His vision has been instrumental in establishing the club's strong foundation.
                    </p>
                  </div>
                </motion.div>

                {/* Quote Section */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Card className="p-8 bg-gradient-to-br from-muted/50 to-muted/20 border-l-4 border-accent h-full flex flex-col justify-center relative overflow-hidden">
                    <Quote className="absolute top-4 left-4 h-16 w-16 text-accent/10" />
                    <blockquote className="relative z-10">
                      <p className="text-foreground leading-relaxed italic text-lg mb-6">
                        "True education transcends textbooks. It's about building character, instilling values, 
                        and nurturing a deep connection with our nation. Through The Squad, we create responsible 
                        citizens who are both adventurous in spirit and rooted in patriotism."
                      </p>
                      <footer className="pt-4 border-t border-border">
                        <p className="font-serif font-bold text-primary text-lg">— Dr. Shashi Kumar ME</p>
                      </footer>
                    </blockquote>
                  </Card>
                </motion.div>
              </div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="pt-8 border-t border-border"
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">For mentorship inquiries, contact through</p>
                    <a 
                      href="mailto:thesquadclub.aseb@gmail.com" 
                      className="text-accent hover:text-accent/80 font-bold text-lg underline-reveal transition-colors"
                    >
                      thesquadclub.aseb@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Mentor;
