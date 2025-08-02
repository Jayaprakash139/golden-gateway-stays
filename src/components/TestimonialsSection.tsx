import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: '1',
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      rating: 5,
      comment: 'Best hotel experience ever! The staff were amazing and the room was incredibly comfortable. Will definitely stay here again on my next visit.'
    },
    {
      id: '2',
      name: 'James Mitchell',
      location: 'London, UK',
      rating: 5,
      comment: 'Outstanding service and beautiful rooms. The location is perfect and the amenities exceeded all expectations. Highly recommend!'
    },
    {
      id: '3',
      name: 'Sarah Chen',
      location: 'Singapore',
      rating: 5,
      comment: 'A truly luxurious experience from check-in to check-out. The attention to detail and personalized service made our anniversary celebration perfect.'
    },
    {
      id: '4',
      name: 'Rajesh Kumar',
      location: 'Delhi, India',
      rating: 4,
      comment: 'Great value for money and excellent facilities. The business center was particularly helpful during my corporate stay. Very professional staff.'
    },
    {
      id: '5',
      name: 'Emma Thompson',
      location: 'Sydney, Australia',
      rating: 5,
      comment: 'The spa services were incredible and the dining options were diverse and delicious. A perfect blend of relaxation and luxury.'
    },
    {
      id: '6',
      name: 'David Martinez',
      location: 'Barcelona, Spain',
      rating: 5,
      comment: 'Exceptional hospitality and beautiful architecture. The rooftop view was breathtaking and the concierge service was top-notch.'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-deep mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read testimonials from our valued guests who have experienced the luxury and comfort of our hotel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;