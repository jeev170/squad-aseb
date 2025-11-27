import { Card } from "@/components/ui/card";
import { Quote, Award, Briefcase, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";

const Alumni = () => {
  const alumni = [
    {
      name: "Rajesh Kumar",
      batch: "2019-20",
      current: "Indian Army Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      testimonial: "The Squad shaped my leadership skills and instilled in me a deep sense of duty towards the nation. The experiences I gained here directly contributed to my success in joining the Indian Army."
    },
    {
      name: "Priya Sharma",
      batch: "2018-19",
      current: "Adventure Tourism Entrepreneur",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      testimonial: "The Squad ignited my passion for adventure and taught me to combine it with purpose. Today, I run my own adventure tourism company, helping others discover India's beauty just as The Squad helped me discover mine."
    },
    {
      name: "Arun Patel",
      batch: "2020-21",
      current: "Defense Analyst",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      testimonial: "Being part of The Squad was transformative. The club's emphasis on patriotism and analytical thinking prepared me perfectly for my career in defense analysis. The bonds I formed here remain strong."
    },
    {
      name: "Sneha Reddy",
      batch: "2017-18",
      current: "Social Worker & NGO Founder",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      testimonial: "The Squad taught me that true patriotism means serving the community. The values I learned here inspired me to start an NGO focused on rural education and empowerment."
    },
    {
      name: "Vikram Singh",
      batch: "2021-22",
      current: "Corporate Trainer & Motivational Speaker",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      testimonial: "The leadership experiences and team-building activities at The Squad gave me invaluable skills. Today, I use those lessons to inspire corporate teams and youth across the country."
    },
    {
      name: "Anjali Menon",
      batch: "2019-20",
      current: "Environmental Conservationist",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
      testimonial: "Our adventure expeditions with The Squad opened my eyes to India's natural heritage and the need to protect it. Now I work full-time on conservation projects, protecting the very landscapes we once explored."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <ParticleBackground />
      
      <div className="container mx-auto max-w-7xl relative z-10">
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
            <Sparkles className="h-20 w-20 text-accent mx-auto animate-pulse-glow" />
          </motion.div>
          <h1 className="text-8xl font-serif font-bold text-gradient mb-8">Our Alumni</h1>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Proud members who continue to make a difference with the values and experiences gained from The Squad
          </p>
        </motion.div>

        <div className="space-y-16">
          {alumni.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
            >
              <Card 
                className="overflow-hidden hover:shadow-glow transition-all duration-700 group border-2 hover:border-accent/50 glassmorphism relative"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none"
                />
                
                <div className={`grid md:grid-cols-5 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  {/* Image Section */}
                  <motion.div 
                    className={`md:col-span-2 ${index % 2 === 1 ? 'md:order-2' : ''} relative overflow-hidden`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.7 }}
                  >
                    <div className="aspect-square overflow-hidden relative">
                      <img 
                        src={person.image} 
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      
                      {/* Floating Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="absolute top-6 right-6 bg-gradient-gold text-foreground px-5 py-3 rounded-full font-bold shadow-gold text-lg"
                      >
                        {person.batch}
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <div className={`md:col-span-3 p-10 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''} relative z-10`}>
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-4xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-500">
                        {person.name}
                      </h3>
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-6 h-6 text-accent" />
                        <p className="text-xl text-primary font-bold">{person.current}</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <Quote className="absolute -left-4 -top-4 h-16 w-16 text-accent/20" />
                      <blockquote className="pl-10 border-l-4 border-accent relative">
                        <p className="text-foreground leading-relaxed text-xl italic font-medium">
                          "{person.testimonial}"
                        </p>
                      </blockquote>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="mt-24 p-16 bg-gradient-patriotic text-primary-foreground text-center border-0 relative overflow-hidden">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
            />
            <div className="relative z-10">
              <h2 className="text-6xl font-serif font-bold mb-6">Are You an Alumnus?</h2>
              <p className="text-2xl mb-10 opacity-90 max-w-3xl mx-auto font-medium">
                We'd love to hear from you! Share your journey and inspire current members.
              </p>
              <motion.a 
                href="mailto:squad_aseb@gmail.com?subject=Alumni Testimonial" 
                className="inline-block bg-gradient-gold text-foreground px-12 py-5 rounded-xl font-bold shadow-gold text-xl border-2 border-accent hover:shadow-glow transition-all duration-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Alumni;
