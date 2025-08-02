import RoomCard from './RoomCard';
import { Button } from '@/components/ui/button';
import deluxeRoom from '@/assets/deluxe-room.jpg';
import premiumSuite from '@/assets/premium-suite.jpg';
import standardRoom from '@/assets/standard-room.jpg';

const FeaturedRooms = () => {
  const featuredRooms = [
    {
      id: '1',
      name: 'Deluxe King Room',
      description: 'Spacious room with king bed, city views, and modern amenities for the perfect comfortable stay.',
      price: 3999,
      image: deluxeRoom,
      rating: 5,
      amenities: ['WiFi', 'Parking', 'Coffee', 'Restaurant'],
      maxGuests: 2
    },
    {
      id: '2',
      name: 'Premium Sea View Suite',
      description: 'Luxury suite with ocean views, separate living area, and premium furnishings for an unforgettable experience.',
      price: 5499,
      image: premiumSuite,
      rating: 5,
      amenities: ['WiFi', 'Parking', 'Coffee', 'Restaurant'],
      maxGuests: 4
    },
    {
      id: '3',
      name: 'Standard Twin Room',
      description: 'Comfortable twin beds with all essential amenities, perfect for business travelers and friends.',
      price: 2999,
      image: standardRoom,
      rating: 4,
      amenities: ['WiFi', 'Parking', 'Coffee'],
      maxGuests: 2
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy-deep mb-4">
            Featured Rooms
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of rooms designed for comfort, luxury, and memorable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="luxury" size="lg">
            View All Rooms
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;