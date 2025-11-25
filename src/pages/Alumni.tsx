import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

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
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Our Alumni</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proud members who continue to make a difference with the values and experiences gained from The Squad
          </p>
        </div>

        <div className="space-y-8">
          {alumni.map((person, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-elegant transition-all duration-300"
            >
              <div className={`grid md:grid-cols-5 gap-6 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Image Section */}
                <div className={`md:col-span-2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="aspect-square overflow-hidden bg-gradient-patriotic">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className={`md:col-span-3 p-6 md:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-1">{person.name}</h3>
                    <p className="text-primary font-semibold mb-1">{person.current}</p>
                    <p className="text-sm text-muted-foreground">Batch: {person.batch}</p>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -left-2 -top-2 h-8 w-8 text-primary/20" />
                    <blockquote className="pl-6 border-l-4 border-primary">
                      <p className="text-foreground leading-relaxed italic">
                        {person.testimonial}
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 p-8 bg-gradient-patriotic text-primary-foreground text-center">
          <h2 className="text-3xl font-bold mb-4">Are You an Alumnus?</h2>
          <p className="text-lg mb-6 opacity-90">
            We'd love to hear from you! Share your journey and inspire current members.
          </p>
          <a 
            href="mailto:squad_aseb@gmail.com?subject=Alumni Testimonial" 
            className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-md font-semibold transition-colors"
          >
            Get in Touch
          </a>
        </Card>
      </div>
    </div>
  );
};

export default Alumni;
