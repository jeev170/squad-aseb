import { Card } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import { Crown, Shield, Wallet, Users, Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/ParticleBackground";

const Squad = () => {
  const { year } = useParams();
  const displayYear = year || "2025";
  const isCurrentYear = displayYear === "2025";

  // Team members - upload images to public/images/squad/ folder
  const currentTeam = [
    {
      name: "V Govardhan Datta",
      position: "President",
      image: "/images/squad/president.jpg",
      description: "Leading The Squad with passion, purpose, and patriotism - fueling adventure that build courage, unity and pride.",
      icon: Crown,
      color: "from-accent to-gold-dark"
    },
    {
      name: "Shreepriya P Soraba",
      position: "Vice President",
      image: "/images/squad/vp-1.jpg",
      description: "Big on smiles, low on words. Here to help and never let anyone miss out on the fun!",
      icon: Shield,
      color: "from-primary to-primary-dark"
    },
    {
      name: "K Haripriya",
      position: "Vice President",
      image: "/images/squad/vp-2.jpg",
      description: "Built with grit and a sprinkle of sparkle. Always down to help, never quits till the job’s done!",
      icon: Shield,
      color: "from-burnt to-primary"
    },
    {
      name: "S.J. Yatish",
      position: "Treasurer",
      image: "/images/squad/treasurer.jpg",
      description: "Driving the Squad’s spirit with precision and keeping our finances always in pole position.",
      icon: Wallet,
      color: "from-accent to-burnt"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <ParticleBackground />
      
      <div className="container mx-auto max-w-7xl relative z-10">
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
            <Users className="w-4 h-4 inline mr-2" />
            Leadership Team
          </motion.span>
          <h1 className="text-hero font-serif font-bold text-gradient mb-2">
            The Squad {displayYear}-{String(parseInt(displayYear) + 1).slice(-2)}
          </h1>
          <p className="text-2xl font-serif text-accent font-semibold mb-4">
            Patriotic & Adventure Club
          </p>
          <p className="text-xl text-muted-foreground">
            {isCurrentYear ? "Meet our current leadership team" : "Information to be updated soon"}
          </p>
        </motion.div>

        {isCurrentYear ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <Card className="overflow-hidden h-full flex flex-col group border-2 border-transparent hover:border-accent/30 transition-all duration-500 bg-card relative">
                    {/* Image Section */}
                    <div className="relative">
                      <div className="aspect-square overflow-hidden">
                        <motion.img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.7 }}
                        />
                      </div>
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                      
                      {/* Role Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                        className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center shadow-elegant`}
                      >
                        <member.icon className="h-7 w-7 text-primary-foreground" />
                      </motion.div>
                      
                      {/* Social Links on Hover */}
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-full glassmorphism-dark flex items-center justify-center"
                        >
                          <Instagram className="w-5 h-5 text-primary-foreground" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-full glassmorphism-dark flex items-center justify-center"
                        >
                          <Mail className="w-5 h-5 text-primary-foreground" />
                        </motion.button>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-serif font-bold text-foreground mb-1 group-hover:text-gradient transition-all duration-500">
                        {member.name}
                      </h3>
                      <p className="text-accent font-bold text-lg mb-4">
                        {member.position}
                      </p>
                      <p className="text-muted-foreground leading-relaxed flex-1">
                        {member.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-16 md:p-24 text-center glassmorphism border-2 border-accent/20 relative overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"
              />
              <div className="relative z-10">
                <Users className="w-20 h-20 text-accent mx-auto mb-8" />
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
                  Squad {displayYear}-{String(parseInt(displayYear) + 1).slice(-2)}
                </h3>
                <p className="text-xl text-muted-foreground max-w-lg mx-auto">
                  Information for this year will be updated soon. Stay tuned for updates!
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Squad;
