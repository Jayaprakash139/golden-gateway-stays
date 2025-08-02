import { Button } from '@/components/ui/button';
import { Award, Heart, Shield, Star } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-luxury-gold" />,
      title: '5-Star Service',
      description: 'Exceptional service that exceeds expectations every time.'
    },
    {
      icon: <Heart className="w-8 h-8 text-luxury-gold" />,
      title: 'Warm Hospitality',
      description: 'Genuine care and attention to make you feel at home.'
    },
    {
      icon: <Shield className="w-8 h-8 text-luxury-gold" />,
      title: 'Safety First',
      description: 'Your safety and security are our top priorities.'
    },
    {
      icon: <Award className="w-8 h-8 text-luxury-gold" />,
      title: 'Award Winning',
      description: 'Recognized for excellence in hospitality and service.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-deep mb-6">
              About Our Hotel
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience premium hospitality at our centrally located hotel designed for comfort, 
              luxury, and peace. For over two decades, we've been creating memorable experiences 
              for travelers from around the world.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to excellence shines through in every detail - from our elegantly 
              appointed rooms to our world-class amenities and personalized service that makes 
              every guest feel special.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="gold" size="lg">
                Learn More
              </Button>
              <Button variant="outline" size="lg">
                Take a Tour
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-deep font-heading">25+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-deep font-heading">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Guests</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-deep font-heading">150+</div>
                <div className="text-sm text-muted-foreground">Luxury Rooms</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-soft">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-heading text-xl font-semibold text-navy-deep mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;