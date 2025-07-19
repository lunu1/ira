import React from 'react';

const DocumentsSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center text-white py-20 px-4 md:px-10"
      style={{
        backgroundImage: "url('hero.jpg')", // Replace with your actual bg image
      }}
    >
      {/* Overlay */}
      <div className="bg-black/60 backdrop-blur-sm py-16 px-4 rounded-xl">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10">
            What <span className="font-bold">documents</span> Are Needed To <span className="font-bold">Rent</span> A Car in Dubai
          </h2>

          {/* Info Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">AGE</h3>
              <p className="text-white/90 text-sm">You should be at least 21 years old.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">DRIVING LICENSE</h3>
              <p className="text-white/90 text-sm">
                You should have a valid UAE driving license if you are UAE resident or
                You should have an International driving license.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">FREE DELIVERY</h3>
              <p className="text-white/90 text-sm">
                We offer a free delivery to our customers to their desired location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
