import React from 'react';
import CarCard from '../components/CarCard';

const cars = [
  {
    name: 'Porsche GT3 RS',
    image: 'porchegt3.jpeg',
    description: 'Track-bred sports car with extreme aerodynamics, lightweight design, and race-ready handling.',
    color: '#00ffcc',
    engine: '4.0L Flat-6 NA',
    speed: '3.0 seconds',
    door: 2,
    seats: 2,
    price: '',
    currency: 'AED',
    phone: '971509417417',
    whatsapp: '971509417417',
  },
  {
    name: 'Range Rover SVR',
    image: 'rangerover.jpeg',
    description: 'Luxury meets performance in this full-size SUV. Supercharged power and commanding presence.',
    color: '#aeb2b5',
    engine: 'V8 Supercharged',
    speed: '4.3 seconds',
    door: 4,
    seats: 5,
    price: '',
    currency: 'AED',
    phone: '971509417417',
    whatsapp: '971509417417',
  },
  {
    name: 'Porsche Macan GTS',
    image: 'porche.jpeg',
    description: 'A sporty compact SUV delivering everyday performance and Porsche precision.',
    color: '#f2f2f2',
    engine: 'V6 Twin Turbo',
    speed: '4.5 seconds',
    door: 4,
    seats: 5,
    price: '',
    currency: 'AED',
    phone: '971509417417',
    whatsapp: '971509417417',
  },
];

const CarListTwo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarListTwo;
