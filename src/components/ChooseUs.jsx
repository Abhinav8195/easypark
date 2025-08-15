import React from 'react';

const ChooseUs = () => {
  return (
    <section id="features" className="section relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-gray-300 to-gray-500 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-24">
          <div className="inline-block mb-6">
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: 'var(--medium-gray)', letterSpacing: '3px' }}
            >
              Premium Experience
            </span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Why Choose
            <span className="block text-gradient">EasyPark?</span>
          </h2>
          <p
            className="text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: 'var(--medium-gray)' }}
          >
            Elevate your parking experience with cutting-edge technology and unmatched sophistication
          </p>
        </div>

        {/* Features */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Feature */}
          <div className="luxury-feature-main slide-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-300 to-gray-500 rounded-3xl blur-xl opacity-30 glow-strong"></div>
              <div className="relative bg-black border border-gray-600 rounded-3xl p-12 backdrop-blur-sm glow-strong scale-smooth">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 rounded-2xl flex items-center justify-center mr-6 shadow-2xl glow-medium">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 3L4 14h7v7l9-11h-7V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">Lightning Fast</h3>
                    <p className="text-lg" style={{ color: 'var(--medium-gray)' }}>Instant Connection</p>
                  </div>
                </div>
                <p className="text-xl leading-relaxed text-white mb-6">
                  Experience instantaneous communication with car owners through our advanced QR technology. 
                  No waiting, no searching, no complications.
                </p>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse glow-soft"></div>
                  <span className="text-sm font-medium" style={{ color: 'var(--medium-gray)' }}>
                    Average response time: &lt;2 seconds
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-1 gap-8">
            {/* Feature 1 */}
            <div className="luxury-feature-card slide-in-right glow-soft">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 glow-medium">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-3">Smart Car Detection</h4>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--medium-gray)' }}>
                    Advanced QR technology instantly identifies your vehicle and connects you with other drivers seamlessly.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="luxury-feature-card scale-in glow-soft">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 glow-medium">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-3">Effortless Setup</h4>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--medium-gray)' }}>
                    Get started in under 90 seconds with our intuitive, streamlined onboarding process designed for simplicity.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="luxury-feature-card rotate-in glow-soft">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 glow-medium">
                  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-3">Premium Materials</h4>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--medium-gray)' }}>
                    Weather-resistant stickers built with premium materials for years of reliable parking communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          <div className="text-center luxury-stat scale-in glow-soft scale-smooth">
            <div className="text-5xl font-bold text-white mb-2">50K+</div>
            <p className="text-lg" style={{ color: 'var(--medium-gray)' }}>Active Users</p>
          </div>
          <div className="text-center luxury-stat fade-in glow-soft scale-smooth">
            <div className="text-5xl font-bold text-white mb-2">99.9%</div>
            <p className="text-lg" style={{ color: 'var(--medium-gray)' }}>Uptime</p>
          </div>
          <div className="text-center luxury-stat slide-in-right glow-soft scale-smooth">
            <div className="text-5xl font-bold text-white mb-2">&lt;2s</div>
            <p className="text-lg" style={{ color: 'var(--medium-gray)' }}>Response Time</p>
          </div>
          <div className="text-center luxury-stat blur-in glow-soft scale-smooth">
            <div className="text-5xl font-bold text-white mb-2">24/7</div>
            <p className="text-lg" style={{ color: 'var(--medium-gray)' }}>Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
