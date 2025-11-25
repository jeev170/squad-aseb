import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Mountain, Flag, Users, Calendar } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            THE SQUAD
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-4 font-medium">
            The Patriotic and Adventure Club
          </p>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Uniting the spirit of adventure with love for the nation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 shadow-elegant">
              <Link to="/about">Discover Our Mission</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-card/90 hover:bg-card border-primary">
              <Link to="/events">View Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flag className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Patriotism</h3>
              <p className="text-muted-foreground">
                Cultivating deep love and respect for our nation
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mountain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Adventure</h3>
              <p className="text-muted-foreground">
                Exploring the beauty and diversity of our country
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Community</h3>
              <p className="text-muted-foreground">
                Building strong bonds through shared experiences
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Events</h3>
              <p className="text-muted-foreground">
                Engaging activities celebrating our heritage
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-patriotic">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">Join Our Journey</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Be part of a community that celebrates patriotism through adventure and exploration
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 shadow-elegant">
            <Link to="/contact">Connect With Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
