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
      name: "Ram Sameer",
      batch: "President, 2019-20",
      current: "Position",
      image: "/images/alumni/alumni-7.jpg",
      testimonial: "Squad, the adventure club, was my first and most memorable experience at Amrita. It taught me discipline, teamwork, leadership, and resilience through treks, cadet training, and shared adventures. From my first trek to leading under female guidance, Squad gave me real-life lessons, lasting friendships, and unforgettable memories that shaped me."
    },
    {
      name: "Varun",
      batch: "Secretary, 2020-21",
      current: "Position",
      image: "/images/alumni/alumni-8.jpg",
      testimonial: "Serving as secretary of Squad has been a rewarding journey filled with patriotism and adventure. It strengthened my confidence, communication, and discipline while allowing me to grow alongside inspiring peers. Being part of such a dedicated and passionate community has been an honor that shaped my values and enriched my college journey."
    },
    {
      name: "Sai Krishna",
      batch: "Joint secretary, 2020-21",
      current: "Position",
      image: "/images/alumni/alumni-9.jpg",
      testimonial: "Holding the position of joint secretary in Squad became an enriching chapter in my journey, shaping both my growth and perspective. It deepened my leadership, confidence, and decision-making skills while reinforcing the importance of teamwork and discipline. Being among passionate individuals taught me to lead with integrity and purpose, inspiring me even today."
    },
    {
      name: "Harshitha",
      batch: "Joint secretary, 2020-21",
      current: "Position",
      image: "/images/alumni/alumni-10.jpg",
      testimonial: "Joining Squad was an easy choice once I learned its purpose. What began as a club soon became a family built on teamwork and perseverance. Leading as joint secretary during an online tenure taught resilience and adaptability. Squad gave me invaluable lessons, lasting memories, and immense pride in belonging."
    },
    {
      name: "Teja Sree",
      batch: "President, 2021-22",
      current: "Position",
      image: "/images/alumni/alumni-11.jpg",
      testimonial: "Squad will always hold a special place in my heart. It was more than a club, it was a journey of self-discovery. Through every challenge and event, I learned teamwork, leadership, discipline, and patriotism. The experiences, lessons, and friendships I gained shaped my college life and will stay with me forever."
    },
    {
      name: "Tarakaram",
      batch: "Joint Secretary, 2021-22",
      current: "Position",
      image: "/images/alumni/alumni-12.jpg",
      testimonial: "Squad has been one of the best experiences of my college life. It taught me discipline, confidence, teamwork, and determination. The adventures and events deepened my love for the nation and strengthened my sense of responsibility. I am grateful to my mentors and encourage juniors to carry forward its spirit."
    },
    {
      name: "Deepthi",
      batch: "President, 2022-23",
      current: "Position",
      image: "/images/alumni/alumni-13.jpg",
      testimonial: "Squad gave me a memorable and enriching journey, creating a family-like space that built teamwork, leadership, and pride through treks and patriotic events. Under the guidance of Dr. Shashi Kumar M E, we learned with joy and purpose. I hope juniors continue to carry forward Squad’s energy, adventure, and unforgettable spirit."
    },
    {
      name: "Samuel",
      batch: "President, 2023-24",
      current: "Position",
      image: "/images/alumni/alumni-14.jpg",
      testimonial: "As president of Squad, I have witnessed its incredible impact on every member. Built on adventure and patriotism, the club fosters resilience, teamwork, and national pride. From treks to parades, each experience shapes us into disciplined and united individuals. Squad remains a family that continues to inspire future leaders."
    },
    {
      name: "Samhita",
      batch: "Vice President, 2023-24",
      current: "Position",
      image: "/images/alumni/alumni-15.jpg",
      testimonial: "Squad has been a life-changing experience that shaped my character and values. It nurtured my leadership, teamwork, and sense of patriotism while connecting me to a meaningful purpose. The club became a family that inspired integrity, service, and pride, leaving me with lasting memories and lessons for life."
    },
    {
      name: "Akanksha",
      batch: "Vice President, 2023-24",
      current: "Position",
      image: "/images/alumni/alumni-16.jpg",
      testimonial: "Serving as the Vice President of Squad has been a truly transformative journey. Through adventurous treks and patriotic initiatives, I developed leadership, teamwork, and discipline. The experiences, challenges, and friendships shaped me deeply, leaving lasting memories. I’ll always be grateful to Squad for inspiring growth, pride, and lifelong connections."
    },
    {
      name: "Abheetha",
      batch: "President, 2024-25",
      current: "Position",
      image: "/images/alumni/alumni-17.jpg",
      testimonial: "Leading Squad has been one of the most beautiful chapters of my college life. From treks to parades, every moment was filled with pride and joy. I found a family in my teammates and a guiding mentor who shaped us. Squad will always remain a cherished part of me."
    },
    {
      name: "Saran",
      batch: "Vice President, 2024-25",
      current: "Position",
      image: "/images/alumni/alumni-18.jpg",
      testimonial: "My time in Squad was a blend of adventure, laughter, and unforgettable chaos. From treks to parades, every moment built resilience and pride. As vice president, I learned to lead with spirit and unity. Squad gave me confidence, lasting friendships, and memories that will always stay close to my heart."
    },
    {
      name: "Tapan",
      batch: "Vice President, 2024-25",
      current: "Position",
      image: "/images/alumni/alumni-19.jpg",
      testimonial: "My time in The Squad stands out as one of the best experiences of my college life. Treks, leadership roles, and countless moments of learning and laughter created unforgettable memories. The spirit of teamwork, the vibrant energy, and the friendships I made will always hold a special place in my heart."
    },
    {
      name: "Pranav Murthy",
      batch: "Treasurer, 2024-25",
      current: "Position",
      image: "/images/alumni/alumni-20.jpg",
      testimonial: "Being an office bearer of Squad was one of the most impactful parts of my B.Tech journey. It taught me patience, teamwork, and true leadership through challenges and shared experiences. From planning to execution, every moment shaped my confidence and perspective, making my college life meaningful and unforgettable."
    },
    {
      name: "Meghna",
      batch: "Member, 2022-26",
      current: "Position",
      image: "/images/alumni/alumni-21.jpg",
      testimonial: "Since childhood, I’ve loved adventures and treks. Joining Amrita’s adventure and patriotism club in my first semester felt perfect. Becoming an executive and later Squad Commander deepened my bond with the club. Even after my term, I kept volunteering. The Squad gave me unforgettable friendships, memories, and reasons to cherish college life."
    },
    {
      name: "Swetha",
      batch: "Member, 2022-26",
      current: "Position",
      image: "/images/alumni/alumni-22.jpg",
      testimonial: "The Squad Club became one of the most memorable parts of my college experience. Whether it was treks, parades, or organizing the Treasure Hunt, each moment was special. It taught me teamwork, discipline, and pride, shaping me into a more confident and determined person."
    }
  ] as const;

  type AlumniPerson = typeof alumni[number];
  type PlaceholderPerson = { placeholder: true; id: string };
  type AlumniItem = AlumniPerson | PlaceholderPerson;

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
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-12 md:pb-16 px-3 sm:px-4 relative overflow-hidden">
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient mb-6">Our Alumni</h1>
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
            className="space-y-8 md:space-y-12 mb-16"
          >
{(() => {
  // Make a full list of 6 items by adding placeholders
  const items: AlumniItem[] = [...currentAlumni];
  const missing = alumniPerPage - items.length;

  for (let i = 0; i < missing; i++) {
    items.push({ placeholder: true, id: `ph-${i}` });
  }

  return items.map((person, index) => {
    const isEven = index % 2 === 0;
    const isPlaceholder = 'placeholder' in person && person.placeholder;

    return (
      <motion.div
        key={isPlaceholder ? person.id : currentPage * alumniPerPage + index}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={isPlaceholder ? "invisible" : ""}
      >
        <Card className="overflow-hidden border-2 border-transparent bg-card h-full">
          <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} h-full`}>
            
            {/* Image Section */}
            <div className="md:w-1/3 relative flex-shrink-0">
              <div className="aspect-square w-full">
                {isPlaceholder ? (
                  <div className="w-full h-full bg-transparent" />
                 ) : (
                   <img 
                     src={'image' in person ? person.image : ''} 
                     alt={'name' in person ? person.name : ''}
                     className="w-full h-full object-cover"
                   />
                 )}
              </div>
              
               {!isPlaceholder && 'batch' in person && (
                 <div className="absolute top-4 left-4">
                   <span className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-gold text-foreground font-bold text-xs md:text-sm rounded-full shadow-gold">
                     {person.batch}
                   </span>
                 </div>
               )}
            </div>

             {/* Content Section */}
             <div className="md:w-2/3 p-4 md:p-10 flex flex-col justify-center">
               {!isPlaceholder && 'name' in person && (
                 <>
                   <h3 className="text-xl md:text-3xl font-serif font-bold text-gradient mb-4 md:mb-6">
                     {person.name}
                   </h3>

                   <div className="relative">
                     <Quote className="absolute -left-1 md:-left-2 -top-3 md:-top-4 w-6 h-6 md:w-10 md:h-10 text-accent/20" />
                     <p className="text-muted-foreground text-sm md:text-base leading-relaxed pl-4 md:pl-6 italic">
                       "{person.testimonial}"
                     </p>
                     <Quote className="absolute right-0 bottom-0 w-6 h-6 md:w-10 md:h-10 text-accent/20 rotate-180" />
                   </div>
                 </>
               )}
             </div>
          </div>
        </Card>
      </motion.div>
    );
  });
})()}
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
