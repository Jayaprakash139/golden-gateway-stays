import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    id: string;
    name: string;
    location: string;
    rating: number;
    comment: string;
    avatar?: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="bg-ivory border-warm-beige shadow-soft">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {testimonial.avatar ? (
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-warm-beige flex items-center justify-center">
                <span className="text-navy-deep font-semibold text-lg">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-luxury-gold text-luxury-gold' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({testimonial.rating}/5)</span>
            </div>
            
            <div className="relative mb-4">
              <Quote className="w-6 h-6 text-luxury-gold/20 absolute -top-2 -left-2" />
              <p className="text-navy-deep italic leading-relaxed pl-4">
                "{testimonial.comment}"
              </p>
            </div>
            
            <div className="text-sm">
              <p className="font-semibold text-navy-deep">{testimonial.name}</p>
              <p className="text-muted-foreground">{testimonial.location}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;