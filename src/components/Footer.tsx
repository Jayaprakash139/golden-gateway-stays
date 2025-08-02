import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold mb-4 text-luxury-gold">
              Luxury Haven Hotel
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Experience premium hospitality at our centrally located hotel designed for comfort, 
              luxury, and peace. Creating memorable experiences for travelers worldwide.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-luxury-gold" />
                <span className="text-white/80">123 Luxury Avenue, City Center, State 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-luxury-gold" />
                <span className="text-white/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-luxury-gold" />
                <span className="text-white/80">reservations@luxuryhaven.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-luxury-gold">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Rooms & Suites', 'Dining', 'Spa & Wellness', 'Business Center', 'Events'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-luxury-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-luxury-gold">Services</h4>
            <ul className="space-y-2">
              {['Airport Shuttle', 'Room Service', 'Concierge', 'Laundry', 'Car Rental', 'Tour Packages'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/80 hover:text-luxury-gold transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-white/80 hover:text-luxury-gold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-luxury-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-luxury-gold transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm">
                © 2024 Luxury Haven Hotel. All rights reserved.
              </p>
              <div className="flex gap-4 mt-2 text-sm text-white/60">
                <a href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;