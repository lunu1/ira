import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden font-libre">
      {/* ▶ BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0" />

      {/* HERO CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-4">
        {/* Logo (now sits ON TOP of the text) */}
        <img
          src="/logo.png"
          alt="Supreme Luxury Cars"
          className="w-40 sm:w-48 md:w-56 lg:w-64 mb-6 pointer-events-none"
        />

        {/* Headline */}
        <h1
          className="text-center font-bold leading-tight text-white uppercase tracking-wide
                       text-3xl sm:text-3xl md:text-3xl lg:text-5xl max-w-5xl"
        >
          Experience the thrill of driving <br />
          <span className="text-primary text-outline-black">
            no deposit • no salik • unlimited kms
          </span>
        </h1>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {/* <button className="bg-primary hover:bg-primary/90 px-8 py-4 rounded-full font-semibold text-white">
            Book a supreme car today
          </button> */}

          <a
            href="https://wa.me/971565266295"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-black px-7 py-4 rounded-full text-white bg-primary hover:bg-primary/90 hover:text-black transition"
          >
            <FaWhatsapp className="text-xl" />
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
