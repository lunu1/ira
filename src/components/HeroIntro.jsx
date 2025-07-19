import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const HeroIntro = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center flex items-center px-4 md:px-8 py-20 sm:py-24"
      style={{
        backgroundImage: "url('hero.jpg')", // replace with your actual bg image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="text-white w-full max-w-2xl space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Supreme <span className="text-primary">Luxury Cars</span> Dubai:<br />
            Your <span className="text-primary">Premier</span> Luxury Car<br />
            Rental Service in <span className="text-primary">Dubai, UAE</span>
          </h1>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            When it comes to Luxury Car Rental in Dubai, Supreme Luxury Cars Dubai is your ultimate destination.
            We pride ourselves on offering a premium selection of world-class vehicles, allowing you to immerse
            yourself in Dubai’s vibrant and luxurious lifestyle in the most sophisticated way imaginable.
            <br /><br />
            With the largest fleet and showroom of luxury cars in the city, we provide an unrivaled variety of options.
            Explore Dubai’s iconic landmarks behind the wheel of a Lamborghini, Ferrari, Porsche, Bentley, or Mercedes-Benz.
          </p>

          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2">
            Details <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Image */}
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-md rounded-3xl overflow-hidden shadow-xl">
          <img
            src="hero.jpg"
            alt="Luxury Car"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroIntro;
