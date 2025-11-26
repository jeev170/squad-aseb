import { Card } from "@/components/ui/card";
import { Mail, BookOpen, Quote } from "lucide-react";
import mentorImage from "@/assets/mentor-placeholder.jpg";
import { motion } from "framer-motion";

const Mentor = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-serif font-bold text-primary mb-4">Our Mentor</h1>
          <p className="text-xl text-muted-foreground">
            Guiding us with wisdom and experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="overflow-hidden shadow-elegant border-2 hover:border-primary/30 transition-colors">
            {/* Header Image Section */}
            <div className="relative h-64 bg-gradient-patriotic flex items-center justify-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary-foreground shadow-elegant">
                  <img 
                    src={mentorImage} 
                    alt="Dr. Shashi Kumar ME"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold shadow-lg whitespace-nowrap">
                  Faculty Mentor
                </div>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="p-12 space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-serif font-bold text-primary mb-2">Dr. Shashi Kumar ME</h2>
                <p className="text-lg text-muted-foreground">Department of Mechanical Engineering</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* About Section */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-6"
                >
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Dr. Shashi Kumar ME is a distinguished faculty member at Amrita Vishwa Vidyapeetham 
                    with extensive experience in mechanical engineering and a deep commitment to student 
                    development. His expertise spans both technical domains and leadership cultivation, 
                    making him an invaluable guide for The Squad.
                  </p>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-2 text-lg">Role in The Squad</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        As our guiding mentor, Dr. Kumar provides strategic direction and mentorship, 
                        helping members develop essential leadership qualities and patriotic values. 
                        His vision has been instrumental in establishing the club's strong foundation.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Quote Section */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="relative"
                >
                  <div className="p-8 bg-muted/50 rounded-lg border-l-4 border-primary relative h-full flex flex-col justify-center">
                    <Quote className="absolute top-4 left-4 h-12 w-12 text-primary/20" />
                    <p className="text-foreground leading-relaxed italic text-lg relative z-10">
                      "True education transcends textbooks. It's about building character, instilling values, 
                      and nurturing a deep connection with our nation. Through The Squad, we create responsible 
                      citizens who are both adventurous in spirit and rooted in patriotism."
                    </p>
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="font-bold text-primary">— Dr. Shashi Kumar ME</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Contact Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="pt-8 border-t border-border"
              >
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm">For mentorship inquiries, contact through </span>
                  <a href="mailto:squad_aseb@gmail.com" className="text-primary hover:underline font-semibold">
                    squad_aseb@gmail.com
                  </a>
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
