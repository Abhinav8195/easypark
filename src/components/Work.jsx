import React from 'react';

const Work = () => {
  return (
    <section
      className="section"
      style={{ background: 'rgba(92, 78, 78, 0.02)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">How It Works</h2>
          <p className="text-xl" style={{ color: 'var(--medium-gray)' }}>
            Four steps to parking peace of mind
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center fade-in step-card">
            <div className="step-counter mx-auto">1</div>
            <h3 className="text-xl font-bold text-white mb-4">Order</h3>
            <p style={{ color: 'var(--medium-gray)' }}>
              Choose your package and receive premium QR stickers.
            </p>
          </div>

          <div className="text-center fade-in step-card">
            <div className="step-counter mx-auto">2</div>
            <h3 className="text-xl font-bold text-white mb-4">Apply</h3>
            <p style={{ color: 'var(--medium-gray)' }}>
              Stick on your car and scan to create your profile.
            </p>
          </div>

          <div className="text-center fade-in step-card">
            <div className="step-counter mx-auto">3</div>
            <h3 className="text-xl font-bold text-white mb-4">Configure</h3>
            <p style={{ color: 'var(--medium-gray)' }}>
              Set your privacy preferences and contact methods.
            </p>
          </div>

          <div className="text-center fade-in step-card">
            <div className="step-counter mx-auto">4</div>
            <h3 className="text-xl font-bold text-white mb-4">Park</h3>
            <p style={{ color: 'var(--medium-gray)' }}>
              Enjoy stress-free parking with instant connectivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
