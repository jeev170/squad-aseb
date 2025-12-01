import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, GraduationCap, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";
import MagneticButton from "@/components/MagneticButton";

// Alumni images - upload your images to public/images/alumni/ folder
// Name them: alumni-1.jpg, alumni-2.jpg, etc.

const Alumni = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const alumniPerPage = 6;

  const alumni = [
    {
      name: "LT. Nirmal",
      batch: "Member, 2016-20",
      current: "Indian Navy Officer",
      image: "/images/alumni/alumni-1.jpg",
      testimonial: "Being part of the Squad from my first year was a defining experience. Playing side drums and performing drills on national days taught me teamwork, discipline, and leadership. Guided by Shashi Sir, I grew immensely, and those lessons became the foundation of my journey to the Indian Navy."
    },
    {
      name: "Guna",
      batch: "Secretary, 2016-17",
      current: "",
      image: "/images/alumni/alumni-2.jpg",
      testimonial: "My role as Secretary of The Squad stands out as one of the most rewarding experiences of my college life. From adventurous treks to patriotic parades, every activity strengthened teamwork, discipline, and pride. With the guidance of supportive mentors, I grew as both a leader and an explorer. The Squad gifted me unforgettable memories and lifelong lessons."
    },
    {
      name: "Varun Raj",
      batch: "Member, 2016-20",
      current: "",
      image: "/images/alumni/alumni-3.jpg",
      testimonial: "Squad, the adventure club, has given me a memorable and inspiring journey. It taught me discipline, teamwork, and self-discovery through treks and events like the Republic Day march past. With guidance from our mentor Shashi Kumar Sir, I gained confidence, character, and lifelong memories that truly shaped my college experience."
    },
    {
      name: "Abhinav",
      batch: "Secretary, 2018-19",
      current: "",
      image: "/images/alumni/alumni-4.jpg",
      testimonial: "My journey with Squad began with a failed parade selection in 2016 but turned into a path of growth and leadership. Through perseverance and teamwork, I rose to lead the club. Squad taught me resilience, trust, and mentorship, giving me a family that shaped my character and strengthened my purpose."
    },
    {
      name: "Sri Harsha",
      batch: "Joint Secretary, 2018-19",
      current: "",
      image: "/images/alumni/alumni-5.jpg",
      testimonial: "Discovering The Squad at Amrita felt like finding my true calling. From a passionate member to joint secretary and Best Cadet, the journey taught me discipline, perseverance, and humility. The Squad became a family that shaped my leadership, confidence, and purpose, leaving an everlasting impact on my college life."
    },
    {
      name: "Aravind",
      batch: "Mmeber, 2018-22",
      current: "",
      image: "/images/alumni/alumni-6.jpg",
      testimonial: "Squad offered a transformative journey that deeply influenced my growth and character. Earning three gold stars reflected perseverance, teamwork, and excellence. It strengthened my leadership and mentoring abilities while giving me lifelong friendships and memories. Even after graduation, I proudly continue to support Squad’s lasting spirit and mission."
    },
    {
      name: "Alumni 7",
      batch: "2018-19",
      current: "Position",
      image: "/images/alumni/alumni-7.jpg",
      testimonial: "Testimonial text goes here. Share your experience with The Squad."
    },
    {
      name: "Alumni 8",
      batch: "2017-18",
      current: "Position",
      image: "/images/alumni/alumni-8.jpg",
      testimonial: "Testimonial text goes here. Share your experience with The Squad."
    },
    {
      name: "Alumni 9",
      batch: "2020-21",
      current: "Position",
      image: "/images/alumni/alumni-9.jpg",
      testimonial: "Testimonial text goes here. Share your experience with The Squad."
    },
    {
      name: "Alumni 10",
      batch: "2019-20",
      current: "Position",
      image: "/images/alumni/alumni-10.jpg",
      testimonial: "Testimonial text goes here. Share your experience with The Squad."
    },
    {
      name: "Alumni 11",
      batch: "2018-19",
      current: "Position",
      image: "/images/alumni/alumni-11.jpg",
      testimonial: "Testimonial text goes here. Share your experience with The Squad."
    },
    {
      name: "Alumni 12",
      batch: "2021-22",
      current: "Position",
      image: "/images/alumni/alumni-12.jpg",
      testimonial: "Testimonial text goes here. Share your experience with The Squad."
    },
    {
      name: "Alumni 13",
      batch: "2017-18",
      current: "Position",
      image: "/images/alumni/alumni-13.jpg",
      testimonial: "Testimonial text goes here. Share your experience with The Squad."
    },
    {
      name: "Alumni 14",
      batch: "2020-21",
      current: "Position",
      image: "/images/alumni/alumni-14.jpg",
      testimonial: "Testimonial text goes here. Share your experience with The Squad."
    },
    {
      name: "Alumni 15",
      batch: "2019-20",
      current: "Position",
      image: "/images/alumni/alumni-15.jpg",
      testimonial: "Testimonial text goes here. Share your experience with The Squad."
    },
    {
      name: "Alumni 16",
      batch: "2018-19",
      current: "Position",
      image: "/images/alumni/alumni-16.jpg",
      testimonial: "Testimonial text goes here. Share your experience with The Squad."
    },
    {
      name: "Alumni 17",
      batch: "2021-22",
      current: "Position",
      image: "/images/alumni/alumni-17.jpg",
      testimonial: "Testimonial text goes here. Share your experience with The Squad."
    },
    {
      name: "Alumni 18",
      batch: "2017-18",
      current: "Position",
      image: "/images/alumni/alumni-18.jpg",
      testimonial: "Testimonial text goes here. Share your experience with The Squad."
    },
    {
      name: "Alumni 19",
      batch: "2020-21",
      current: "Position",
      image: "/images/alumni/alumni-19.jpg",
      testimonial: "Testimonial text goes here. Share your experience with The Squad."
    },
    {
      name: "Alumni 20",
      batch: "2019-20",
      current: "Position",
      image: "/images/alumni/alumni-20.jpg",
      testimonial: "Testimonial text goes here. Share your experience with The Squad."
    },
    {
      name: "Alumni 21",
      batch: "2018-19",
      current: "Position",
      image: "/images/alumni/alumni-21.jpg",
      testimonial: "Testimonial text goes here. Share your experience with The Squad."
    },
    {
      name: "Alumni 22",
      batch: "2021-22",
      current: "Position",
      image: "/images/alumni/alumni-22.jpg",
      testimonial: "Testimonial text goes here. Share your experience with The Squad."
    }
  ];

  const totalPages = Math.ceil(alumni.length / alumniPerPage);
  const currentAlumni = alumni.slice(
    currentPage * alumniPerPage,
    (currentPage + 1) * alumniPerPage
  );

  // Auto-rotate pages every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 8000);

    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-20" />
      <ParticleBackground />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm tracking-premium uppercase mb-6"
          >
            <GraduationCap className="w-4 h-4 inline mr-2" />
            Success Stories
          </motion.span>
          <h1 className="text-hero font-serif font-bold text-gradient mb-6">Our Alumni</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proud members who continue to make a difference with the values gained from The Squad
          </p>
        </motion.div>

        {/* Alumni Alternating Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-12 mb-16"
          >
            {currentAlumni.map((person, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={currentPage * alumniPerPage + index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className={`overflow-hidden border-2 border-transparent hover:border-accent/30 transition-all duration-500 bg-card`}>
                    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Image Section */}
                      <div className="md:w-1/3 relative flex-shrink-0">
                        <div className="aspect-square">
                          <img 
                            src={person.image} 
                            alt={person.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent via-transparent to-card hidden md:block`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:hidden" />
                        
                        {/* Batch Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-4 py-2 bg-gradient-gold text-foreground font-bold text-sm rounded-full shadow-gold">
                            Batch {person.batch}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="md:w-2/3 p-6 md:p-10 flex flex-col justify-center">
                        <div className="mb-4">
                          <h3 className="text-2xl md:text-3xl font-serif font-bold text-gradient mb-2">
                            {person.name}
                          </h3>
                        </div>
                        
                        <div className="relative">
                          <Quote className="absolute -left-2 -top-4 w-10 h-10 text-accent/20" />
                          <p className="text-muted-foreground text-base leading-relaxed pl-6 italic">
                            "{person.testimonial}"
                          </p>
                          <Quote className="absolute right-0 bottom-0 w-10 h-10 text-accent/20 rotate-180" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Page Indicators */}
        <div className="flex justify-center items-center gap-3 mb-16">
          <button
            onClick={() => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)}
            className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-accent" />
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentPage 
                    ? 'w-8 bg-accent' 
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
            className="w-10 h-10 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-5 h-5 text-accent" />
          </button>
        </div>

        <p className="text-center text-muted-foreground text-sm mb-16">
          Page {currentPage + 1} of {totalPages}
        </p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-12 md:p-16 bg-gradient-patriotic text-primary-foreground text-center border-0 relative overflow-hidden">
            <div className="absolute inset-0 pattern-diagonal opacity-10" />
            
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px]"
            />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <Sparkles className="w-12 h-12 text-accent mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Are You an Alumnus?</h2>
              <p className="text-xl mb-10 text-primary-foreground/80">
                We'd love to hear from you! Share your journey and inspire current members.
              </p>
              <MagneticButton>
                <Button asChild size="lg" className="bg-gradient-gold text-foreground font-bold text-lg px-10 py-6 h-auto shadow-gold hover:shadow-neon transition-all duration-500">
                  <a href="mailto:thesquadclub.aseb@gmail.com?subject=Alumni Testimonial" className="flex items-center gap-3">
                    Get in Touch
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </MagneticButton>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Alumni;
