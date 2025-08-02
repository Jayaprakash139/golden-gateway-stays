import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hotel-hero.jpg';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover Comfort <br />
          <span className="text-luxury-gold">& Luxury</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Book your dream stay with us and experience premium hospitality 
          at our centrally located hotel designed for comfort, luxury, and peace.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Check Availability
          </Button>
          
          <Button 
            variant="elegant" 
            size="xl"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
        
        {/* Quick booking strip */}
        <div className="mt-12 bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="text-left">
              <label className="block text-sm font-medium mb-2">Check-in</label>
              <input 
                type="date" 
                className="w-full p-3 rounded-md bg-white/90 text-navy-deep border-0 focus:ring-2 focus:ring-luxury-gold"
              />
            </div>
            
            <div className="text-left">
              <label className="block text-sm font-medium mb-2">Check-out</label>
              <input 
                type="date" 
                className="w-full p-3 rounded-md bg-white/90 text-navy-deep border-0 focus:ring-2 focus:ring-luxury-gold"
              />
            </div>
            
            <div className="text-left">
              <label className="block text-sm font-medium mb-2">Guests</label>
              <select className="w-full p-3 rounded-md bg-white/90 text-navy-deep border-0 focus:ring-2 focus:ring-luxury-gold">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
            
            <Button variant="luxury" size="lg" className="h-12">
              Search Rooms
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;