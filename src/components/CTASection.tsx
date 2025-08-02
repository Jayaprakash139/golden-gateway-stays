import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 gradient-gold relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-deep mb-6">
          Ready for Your Next Getaway?
        </h2>
        <p className="text-xl text-navy-deep/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Book now and get 10% off your first stay with us. Experience luxury, comfort, and exceptional service that creates memories to last a lifetime.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="hero" size="xl">
            Book Your Stay Now
          </Button>
          <Button variant="elegant" size="xl">
            Call +91 98765 43210
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-navy-deep/70 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-navy-deep rounded-full"></span>
            Free Cancellation
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-navy-deep rounded-full"></span>
            Best Price Guarantee
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-navy-deep rounded-full"></span>
            24/7 Customer Service
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-navy-deep rounded-full"></span>
            Instant Confirmation
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;