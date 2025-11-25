import { Card } from "@/components/ui/card";
import { Target, Eye, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* About Us Section */}
        <section className="mb-16" id="about">
          <h1 className="text-5xl font-bold text-primary mb-6 text-center">About Us</h1>
          <Card className="p-8 bg-card shadow-elegant">
            <p className="text-lg text-foreground leading-relaxed">
              The Squad Club is a vibrant community dedicated to uniting the spirit of adventure with love for the nation. 
              Our mission is to inspire students to explore the beauty, history, and values of our country through engaging 
              outdoor experiences and meaningful patriotic initiatives. We strive to build a platform where enthusiasm for 
              exploration goes hand in hand with respect for our national heritage, motivating members to learn, experience, 
              and contribute with pride and purpose.
            </p>
          </Card>
        </section>

        {/* Mission Section */}
        <section className="mb-16" id="mission">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-primary">Our Mission</h2>
          </div>
          <Card className="p-8 bg-card shadow-elegant border-l-4 border-primary">
            <p className="text-lg text-foreground leading-relaxed">
              Our mission is to foster a dynamic community that intertwines patriotism with adventure, encouraging members 
              to actively engage in activities that celebrate and explore our nation's heritage. Through a blend of outdoor 
              adventures and patriotic events, we aim to inspire a deep appreciation for our country, cultivate a sense of 
              national pride, and promote a spirit of exploration and contribution to our shared legacy.
            </p>
          </Card>
        </section>

        {/* Vision Section */}
        <section className="mb-16" id="vision">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-primary">Our Vision</h2>
          </div>
          <Card className="p-8 bg-card shadow-elegant border-l-4 border-primary">
            <p className="text-lg text-foreground leading-relaxed">
              We envision a club where patriotism and adventure converge to strengthen connections to our nation's values. 
              We endeavour to establish a community that honours and enhances our rich heritage by combining exhilarating 
              experiences with a profound sense of national pride while embracing the spirit of exploration.
            </p>
          </Card>
        </section>

        {/* Objectives Section */}
        <section id="objectives">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-primary">Our Objectives</h2>
          </div>
          <div className="grid gap-6">
            <Card className="p-6 bg-card shadow-soft hover:shadow-elegant transition-shadow">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  To induce the traits of discipline and responsibility among the student community and guide them 
                  towards careers in the Indian Defence Forces.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card shadow-soft hover:shadow-elegant transition-shadow">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  To inculcate patriotism among the students and mold them into responsible citizens of India.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card shadow-soft hover:shadow-elegant transition-shadow">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  To ignite the spirit of adventures as it lights up the inner soul.
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card shadow-soft hover:shadow-elegant transition-shadow">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold">4</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  Foster a strong sense of camaraderie and teamwork among members through collaborative activities and events.
                </p>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
