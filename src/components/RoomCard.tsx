import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Wifi, Car, Coffee, Users } from 'lucide-react';

interface RoomCardProps {
  room: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
    amenities: string[];
    maxGuests: number;
  };
}

const RoomCard = ({ room }: RoomCardProps) => {
  const amenityIcons = {
    'WiFi': <Wifi className="w-4 h-4" />,
    'Parking': <Car className="w-4 h-4" />,
    'Coffee': <Coffee className="w-4 h-4" />,
    'Restaurant': <Coffee className="w-4 h-4" />,
  };

  return (
    <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={room.image} 
          alt={room.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-luxury-gold text-navy-deep px-3 py-1 rounded-full text-sm font-semibold">
          ₹{room.price.toLocaleString()}/night
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="font-heading text-xl text-navy-deep">{room.name}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < room.rating ? 'fill-luxury-gold text-luxury-gold' : 'text-gray-300'}`} 
              />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">({room.rating}/5)</span>
          </div>
          <div className="flex items-center ml-auto">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">{room.maxGuests} guests</span>
          </div>
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground mb-4">{room.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {room.amenities.slice(0, 4).map((amenity) => (
            <div key={amenity} className="flex items-center gap-1 bg-warm-beige px-2 py-1 rounded-md text-sm">
              {amenityIcons[amenity as keyof typeof amenityIcons]}
              <span>{amenity}</span>
            </div>
          ))}
          {room.amenities.length > 4 && (
            <span className="text-sm text-muted-foreground">+{room.amenities.length - 4} more</span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button variant="outline" className="flex-1">
          View Details
        </Button>
        <Button variant="gold" className="flex-1">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;