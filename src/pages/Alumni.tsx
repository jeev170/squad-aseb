import { Card } from "@/components/ui/card";
import { Quote, Award, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-serif font-bold text-primary mb-4">Our Alumni</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proud members who continue to make a difference with the values and experiences gained from The Squad
          </p>
        </motion.div>

        <div className="space-y-12">
          {alumni.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="overflow-hidden hover:shadow-elegant transition-all duration-500 group border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
              >
                <div className={`grid md:grid-cols-5 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  {/* Image Section */}
                  <motion.div 
                    className={`md:col-span-2 ${index % 2 === 1 ? 'md:order-2' : ''} relative overflow-hidden`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="aspect-square overflow-hidden relative">
                      <img 
                        src={person.image} 
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Floating Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold shadow-lg"
                      >
                        {person.batch}
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <div className={`md:col-span-3 p-8 md:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {person.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-5 h-5 text-accent" />
                        <p className="text-lg text-primary font-semibold">{person.current}</p>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <Quote className="absolute -left-2 -top-2 h-12 w-12 text-primary/20" />
                      <blockquote className="pl-8 border-l-4 border-primary relative">
                        <p className="text-foreground leading-relaxed text-lg italic">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="mt-16 p-10 bg-gradient-patriotic text-primary-foreground text-center border-0">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4">Are You an Alumnus?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                We'd love to hear from you! Share your journey and inspire current members.
              </p>
              <motion.a 
                href="mailto:squad_aseb@gmail.com?subject=Alumni Testimonial" 
                className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 rounded-md font-semibold shadow-lg text-lg"
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
