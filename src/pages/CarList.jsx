import React, { useState } from 'react';
import CarCard from '../components/CarCard';
import { useLocation } from 'react-router-dom';

const cars = [
  {
    name: 'Mercedes Benz G63',
    image: 'benz.jpeg',
    description: 'The iconic G-Wagon tuned for power and luxury. Brabus styling, 577hp, and head-turning road presence.',
    color: '#000000',
    engine: 'V8 Biturbo',
    speed: '4.5 seconds',
    door: 4,
    seats: 5,
    price: '',
    currency: 'AED',
    phone: '971509417417',
    whatsapp: '971509417417',
  },
  {
    name: 'Lamborghini Urus',
    image: 'lemborgini.jpeg',
    description: 'A super SUV combining performance and versatility. Lamborghini DNA with luxury and aggressive style.',
    color: '#000000',
    engine: 'V8 Twin Turbo',
    speed: '3.6 seconds',
    door: 4,
    seats: 5,
    price: '',
    currency: 'AED',
    phone: '971509417417',
    whatsapp: '971509417417',
  },
  {
    name: 'BMW X4M',
    image: 'bmw.jpeg',
    description: 'A dynamic performance SUV with M-tuned power, sleek coupe styling, and luxury features.',
    color: '#aeb2b5',
    engine: '3.0L I6 Twin Turbo',
    speed: '4.1 seconds',
    door: 4,
    seats: 5,
    price: 'AED 1,500',
    currency: 'AED',
    phone: '971509417417',
    whatsapp: '971509417417',
  },
  {
    name: 'Audi SQ5',
    image: 'audi.jpeg',
    description: 'Luxury compact SUV delivering a refined yet sporty drive. Quattro grip and turbocharged performance.',
    color: '#000000',
    engine: 'V6 Turbo',
    speed: '5.1 seconds',
    door: 4,
    seats: 5,
    price: '',
    currency: 'AED',
    phone: '971509417417',
    whatsapp: '971509417417',
  },
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

const CarList = () => {
  const [showAll, setShowAll] = useState(false);
  const location = useLocation();
  const isCarsPage = location.pathname === '/cars';

  const displayedCars = showAll ? cars : cars.slice(0, 4);

  return (
    <div className={`max-w-7xl mx-auto px-4 py-16 ${isCarsPage ? 'pt-36' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-gray-800">Luxury <span className="text-black">Car</span></span> Rental in Dubai
      </h2>
      <p className="text-gray-500 max-w-2xl mb-10">
        Discover the thrill of high-end driving with our exclusive fleet of luxury and sports cars for rent in Dubai.
      </p>

      {/* Car Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedCars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>

      {/* Toggle Button */}
      {isCarsPage && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition"
          >
            {showAll ? 'View Less' : 'View More Cars'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CarList;
