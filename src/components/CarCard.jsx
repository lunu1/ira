import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col justify-between">
      <img src={car.image} alt={car.name} className="w-full h-52 object-cover" />

      <div className="p-4 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-md font-semibold text-gray-800">{car.name}</h3>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-3 mt-1">{car.description}</p>

        {/* Specs */}
        <div className="mt-3 text-sm text-gray-700 space-y-2">
          <div className="flex items-center space-x-2">
            <span className="font-medium">Color:</span>
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: car.color }}
            ></span>
          </div>
          <div className="flex items-center justify-between">
            <span>Engine Type:</span> <span className="text-gray-600">{car.engine}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>0-100 km/h:</span> <span>{car.speed}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Door:</span> <span>{car.door}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Seats:</span> <span>{car.seats}</span>
          </div>
        </div>

        {/* Price box */}
        <div className="mt-4">
          <div className="border rounded-md px-3 py-2 flex justify-between items-center text-sm text-gray-800">
            <span>
              <span className="font-semibold text-primary">{car.price}</span> / Per Day
            </span>
            <span className="text-gray-500">Currency: {car.currency}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 space-y-2">
            <a
  href={`https://wa.me/${car.whatsapp}?text=Hi, I'm interested in the ${encodeURIComponent(car.name)}. Please send me more information.`}
  target="_blank"
  rel="noopener noreferrer"
//   className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-full font-medium text-sm text-center block"
>
          <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-full font-medium text-sm">
            More Information
          </button>
    </a>
          <div className="flex gap-2">
            <a
              href={`tel:${car.phone}`}
              className="w-1/2 flex items-center justify-center bg-primary hover:bg-primary/90 text-white py-2 rounded-full text-sm"
            >
              <FaPhone className="mr-2" /> Call
            </a>
            <a
              href={`https://wa.me/${car.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 flex items-center justify-center bg-green-700 hover:bg-green-800 text-white py-2 rounded-full text-sm"
            >
              <FaWhatsapp className="mr-2" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
