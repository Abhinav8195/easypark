import React from "react";

const Testimonials = () => {
  return (
    <div>
      <section
        id="testimonials"
        className="section"
        style={{ background: "rgba(92, 78, 78, 0.02)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-white mb-6">Reviews</h2>
            <p className="text-xl" style={{ color: "var(--medium-gray)" }}>
              What our users say
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="testimonial-card fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center testimonial-avatar">
                  <span className="text-white font-bold">RK</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">Ravi Kumar</h4>
                  <p style={{ color: "var(--medium-gray)" }}>Mumbai</p>
                </div>
              </div>
              <p className="text-white mb-4">
                "EasyPark transformed my parking experience completely. No more
                stress."
              </p>
              <div className="flex" style={{ color: "var(--medium-gray)" }}>
                <span>★★★★★</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="testimonial-card fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center testimonial-avatar">
                  <span className="text-white font-bold">PS</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">Priya Sharma</h4>
                  <p style={{ color: "var(--medium-gray)" }}>Delhi</p>
                </div>
              </div>
              <p className="text-white mb-4">
                "Perfect for busy areas. Setup was incredibly simple and it
                works flawlessly."
              </p>
              <div className="flex" style={{ color: "var(--medium-gray)" }}>
                <span>★★★★★</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="testimonial-card fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center testimonial-avatar">
                  <span className="text-white font-bold">AM</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-white">Arjun Mehta</h4>
                  <p style={{ color: "var(--medium-gray)" }}>Bangalore</p>
                </div>
              </div>
              <p className="text-white mb-4">
                "Love the privacy controls. I have complete control over my
                information."
              </p>
              <div className="flex" style={{ color: "var(--medium-gray)" }}>
                <span>★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
