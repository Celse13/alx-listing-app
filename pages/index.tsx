export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Listings', href: '/listings' },
  { name: 'About', href: '/about' },
];

export const DUMMY_LISTINGS = [
  {
    id: '1',
    title: 'Cozy Beach House',
    description: 'Beautiful beachfront property with amazing views',
    price: 150,
    imageUrl: '/assets/house1.jpg',
    location: 'Miami Beach, FL',
    amenities: ['WiFi', 'Pool', 'Kitchen'],
    rating: 4.8
  },
  // Add more dummy listings as needed
];