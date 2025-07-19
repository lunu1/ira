import React, { useState, useEffect } from "react";
import {
  Star,
  Leaf,
  Award,
  ChefHat,
  Heart,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  RefreshCw,
  Phone,
} from "lucide-react";

export default function IRASpiceLanding() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Chef Maria Rodriguez",
      role: "Executive Chef",
      text: "IRA's spices have transformed my kitchen. The authenticity and quality are unmatched.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Food Blogger",
      text: "Finally found spices that taste like they're straight from the source. Incredible depth of flavor.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Home Cook",
      text: "These spices have made me fall in love with cooking all over again. Pure magic!",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      name: "Signature Garam Masala",
      description:
        "A premium blend of aromatic spices like cardamom, cinnamon, cloves, and nutmeg, handpicked to bring authentic flavor to your dishes.",
      image: "/image.png", // Replace with actual image
    },
    // {
    //   name: "Signature Turmeric Powder",
    //   description:
    //     "Pure, natural turmeric powder with rich color and earthy aroma, sourced from the finest farms to ensure purity and health benefits.",
    //   image: "/images/signature-turmeric.png", // Replace with actual image
    // },
    // {
    //   name: "Signature Chilli Powder",
    //   description:
    //     "Fiery and flavorful, our Signature Chilli Powder adds vibrant color and a bold taste, made from hand-selected dried red chilies.",
    //   image: "/images/signature-chilli.png", // Replace with actual image
    // },
  ];

  const product = {
    name: "Premium black pepper",
    description:
      "Experience the bold aroma and authentic flavor of handpicked black pepper sourced from Kerala's premium spice farms. Perfect for enhancing the taste of your favorite dishes.",
    image: "/pepper.jpg", // Front image
    backImage: "/image2.jpg", // Backside image
    price: "₹190",
    oldPrice: "₹299",
    highlights: [
      "Sourced from Kerala’s finest spice farms",
      "Limited edition premium pack",
      "Packed with freshness guarantee",
    ],
  };

  const [isFlipped, setIsFlipped] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const [showBack, setShowBack] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Navigation */}

      <section
        id="home"
        className="bg-white py-7 md:py-16 px-6 relative pb-[250px] md:pb-16"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center relative">
          {/* Image for Mobile & Desktop */}
          <div className="flex justify-center items-center relative">
            <img
              src="/heros.jpg" // Replace with actual image
              alt="IRA Signature Spices"
              className="rounded-2xl shadow-lg w-full h-[400px] md:h-[500px] object-cover"
            />

            {/* Full Text Overlap for Mobile */}
            <div className="md:hidden absolute bottom-[-60%] left-1/2 transform -translate-x-1/2 w-[90%] bg-[#ad3622] rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-3 bona-nova-sc-regular">
                Signatures
              </h2>
              <p className="text-[#FAF9F6] leading-relaxed mb-4 text-sm">
                Introducing <span className="font-semibold">Signature</span> – a
                premium spice collection crafted by IRA to bring the authentic
                taste of tradition to your kitchen. Our spices are handpicked
                and blended in small batches, preserving the purity and aroma of
                nature. Signature is more than a product; it’s a journey of
                flavors that celebrates culture, quality, and craftsmanship.
              </p>
              <p className="text-[#FAF9F6] leading-relaxed mb-6 text-sm">
                With Signature, you unlock the essence of carefully curated
                spices that elevate every dish to a masterpiece. Taste the
                difference, feel the heritage, and embrace the story in every
                sprinkle.
              </p>
              <a
                href="#about"
                className="bg-white text-[#c84929] px-5 py-2 rounded-md shadow-md transition w-full block text-center"
              >
                Explore Signature
              </a>
            </div>
          </div>

          {/* Desktop Full Text */}
          <div className="hidden md:block bg-[#c84929] rounded-2xl p-8 shadow-lg relative z-10 md:-ml-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bona-nova-sc-regular">
              Signatures
            </h2>
            <p className="text-[#FAF9F6] leading-relaxed mb-6">
              Introducing <span className="font-semibold">Signature</span> – a
              premium spice collection crafted by IRA to bring the authentic
              taste of tradition to your kitchen. Our spices are handpicked and
              blended in small batches, preserving the purity and aroma of
              nature. Signature is more than a product; it’s a journey of
              flavors that celebrates culture, quality, and craftsmanship.
            </p>
            <p className="text-[#FAF9F6] leading-relaxed mb-8">
              With Signature, you unlock the essence of carefully curated spices
              that elevate every dish to a masterpiece. Taste the difference,
              feel the heritage, and embrace the story in every sprinkle.
            </p>
            <a
              href="#about"
              className="bg-white text-[#ad3622] px-6 py-3 rounded-md shadow-md transition"
            >
              Explore Signature
            </a>
          </div>
        </div>
      </section>

      <section
        id="product"
        className="bg-white py-20 px-6 relative overflow-hidden"
      >
        {/* Background Accent */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-40 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-40 -z-10"></div>

        {/* Heading */}
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bona-nova-sc-regular">
            Most Loved
          </h2>
          <p className="text-lg text-gray-600">
            Discover the best of{" "}
            <span className="font-semibold ">Signature Spices</span>
          </p>
        </div>

        {/* Product Section */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product Flip Card */}
          <div className="relative perspective w-full h-[600px]">
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
            >
              {/* Front Image */}
              <img
                src={product.image}
                alt={product.name}
                className="absolute w-full h-full object-cover rounded-2xl shadow-xl backface-hidden"
              />
              {/* Back Image */}
              <img
                src={product.backImage}
                alt={`${product.name} Back`}
                className="absolute w-full h-full object-cover rounded-2xl shadow-xl backface-hidden rotate-y-180"
              />
            </div>

            {/* Flip Button */}
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="absolute bottom-6 right-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white p-4 rounded-full shadow-lg z-20 hover:scale-110 transition-transform"
            >
              <RefreshCw className="w-6 h-6" />
            </button>
          </div>

          {/* Product Info */}
          <div className="text-left space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 bona-nova-sc-regular">
              {product.name}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-3">
              {product.highlights.map((point, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                {product.price}
              </div>
              <div className="text-gray-400 line-through text-xl">
                {product.oldPrice}
              </div>
              <div className="bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold shadow-md">
                Launch Offer
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/917736725425?text=Hi!%20I%20am%20interested%20in%20IRA%20Signature%20Spices."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Order Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-white py-16 px-4 relative overflow-hidden"
      >
        {/* Top Decorative Heading */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <div className="text-orange-600 text-2xl font-bold mb-2">✦ ✦ ✦ ✦</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 bona-nova-sc-regular">
            How it <span className="text-orange-600">began?</span>
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We grew with a dream to build something meaningful — something that
            respects tradition, celebrates purity, and feels like home.
          </p>
          {/* <p className="text-gray-700 leading-relaxed mt-4 max-w-3xl mx-auto">
      Each spice is sourced from trusted farms, processed under the highest
      quality standards, and packed to preserve freshness—ensuring every dish
      you make bursts with authentic flavors.
    </p> */}
        </div>

        {/* Decorative Spice Images */}
        <div className="absolute -top-12 -left-12 hidden md:block">
          <img
            src="/spice.png" // Use PNG you generated (left side spice image)
            alt="Spices"
            className="w-96 h-auto object-contain"
          />
        </div>
        <div className="absolute top- -right-40 hidden md:block">
          <img
            src="/spice1.png" // Use PNG you generated (right side spice image)
            alt="Spices"
            className="w-96 h-auto object-contain"
          />
        </div>

        {/* Best Products Section */}
        <div className="bg-white rounded-lg py-12 px-6 max-w-5xl mx-auto mt-16 text-center">
          <div className="text-orange-600 text-2xl font-bold mb-2">✦ ✦ ✦ ✦</div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6 bona-nova-sc-regular">
            Signatures by <span className="font-sans font-semibold"> IRA</span>  is a reflection of that dream.
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            Every pack carries our promise of authenticity, honesty, and taste
            that lingers — just like a good story.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            {/* <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-orange-600">
        Explore Spices
      </button> */}
            <a
              href="https://wa.me/917736725425?text=Hi!%20I%20am%20interested%20in%20IRA%20Signature%20Spices."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Shop Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 bona-nova-sc-regular">
              What Our <span className="text-orange-600">Customers</span> Say
            </h2>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex text-orange-500">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current" />
                    )
                  )}
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div>
                <div className="font-bold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? "bg-orange-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20  bg-[#ad3622]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 bona-nova-sc-regular">
            Have Questions? Let’s Talk!
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Call us now and bring authentic IRA Signature Spices to your home.
          </p>

          {/* Contact Button */}
          <a
            href="tel:+917736725425"
            className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 mx-auto group shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span>+91 7736 725 425</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-semibold">IRA</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Bringing Kerala's authentic spice heritage to kitchens
                worldwide. Our inaugural blend marks the beginning of an
                extraordinary journey.
              </p>
              <div className="text-sm text-gray-500">
                © 2025 IRA Spices. All rights reserved.
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="#home"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="#product"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Our Spice
                </a>
                <a
                  href="#contact"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-gray-400">
                <a
                  href="mailto:iraprivatelimited@gmail.com"
                  className="hover:underline"
                >
                  iraprivatelimited@gmail.com
                </a>
                <div>+91 7736 725 425</div>
                <div className="space-y-1 ">
                  <div>24/1485, SINDHOORAM, CHEVARAMBALAM PO</div>
                  <div>KOZHIKODE, Kozhikode North Circle</div>
                  <div>Kozhikode, Kerala - 673017</div>
                  <div>Kerala, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
