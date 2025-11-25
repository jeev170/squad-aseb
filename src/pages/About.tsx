import { Card } from "@/components/ui/card";
import { Target, Eye, CheckCircle, Zap } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const objectives = [
    "To induce the traits of discipline and responsibility among the student community and guide them towards careers in the Indian Defence Forces.",
    "To inculcate patriotism among the students and mold them into responsible citizens of India.",
    "To ignite the spirit of adventures as it lights up the inner soul.",
    "Foster a strong sense of camaraderie and teamwork among members through collaborative activities and events."
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-5xl relative">
        {/* Decorative Background */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary rounded-full blur-3xl -z-10"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent rounded-full blur-3xl -z-10"
        />

        {/* About Us Section */}
        <motion.section 
          className="mb-20" 
          id="about"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
            >
              <Zap className="w-16 h-16 text-accent mx-auto mb-4" />
            </motion.div>
            <h1 className="text-6xl font-bold text-primary mb-6">About Us</h1>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-10 bg-card/50 backdrop-blur-sm shadow-elegant border-2 hover:border-primary/50 transition-colors">
              <p className="text-xl text-foreground leading-relaxed">
                The Squad Club is a vibrant community dedicated to uniting the spirit of adventure with love for the nation. 
                Our mission is to inspire students to explore the beauty, history, and values of our country through engaging 
                outdoor experiences and meaningful patriotic initiatives. We strive to build a platform where enthusiasm for 
                exploration goes hand in hand with respect for our national heritage, motivating members to learn, experience, 
                and contribute with pride and purpose.
              </p>
            </Card>
          </motion.div>
        </motion.section>

        {/* Mission Section */}
        <motion.section 
          className="mb-20" 
          id="mission"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-6 mb-8">
            <motion.div 
              className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Target className="h-10 w-10 text-primary" />
            </motion.div>
            <h2 className="text-5xl font-bold text-primary">Our Mission</h2>
          </div>
          
          <motion.div
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-10 bg-card/50 backdrop-blur-sm shadow-elegant border-l-8 border-primary hover:shadow-xl transition-all">
              <p className="text-lg text-foreground leading-relaxed">
                Our mission is to foster a dynamic community that intertwines patriotism with adventure, encouraging members 
                to actively engage in activities that celebrate and explore our nation's heritage. Through a blend of outdoor 
                adventures and patriotic events, we aim to inspire a deep appreciation for our country, cultivate a sense of 
                national pride, and promote a spirit of exploration and contribution to our shared legacy.
              </p>
            </Card>
          </motion.div>
        </motion.section>

        {/* Vision Section */}
        <motion.section 
          className="mb-20" 
          id="vision"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-6 mb-8">
            <motion.div 
              className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Eye className="h-10 w-10 text-accent" />
            </motion.div>
            <h2 className="text-5xl font-bold text-primary">Our Vision</h2>
          </div>
          
          <motion.div
            whileHover={{ x: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-10 bg-card/50 backdrop-blur-sm shadow-elegant border-l-8 border-accent hover:shadow-xl transition-all">
              <p className="text-lg text-foreground leading-relaxed">
                We envision a club where patriotism and adventure converge to strengthen connections to our nation's values. 
                We endeavour to establish a community that honours and enhances our rich heritage by combining exhilarating 
                experiences with a profound sense of national pride while embracing the spirit of exploration.
              </p>
            </Card>
          </motion.div>
        </motion.section>

        {/* Objectives Section */}
        <motion.section 
          id="objectives"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-6 mb-10">
            <motion.div 
              className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <CheckCircle className="h-10 w-10 text-primary" />
            </motion.div>
            <h2 className="text-5xl font-bold text-primary">Our Objectives</h2>
          </div>
          
          <div className="grid gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <Card className="p-8 bg-card/50 backdrop-blur-sm shadow-soft hover:shadow-elegant transition-all border-2 hover:border-primary/50 group">
                  <div className="flex gap-6 items-start">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-patriotic rounded-full flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-primary-foreground font-bold text-xl">{index + 1}</span>
                    </motion.div>
                    <p className="text-foreground leading-relaxed text-lg pt-2 group-hover:text-primary transition-colors">
                      {objective}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Decorative Floating Icons */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-0 w-12 h-12 opacity-20"
        >
          <Target className="w-full h-full text-primary" />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-40 left-0 w-16 h-16 opacity-20"
        >
          <Eye className="w-full h-full text-accent" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
