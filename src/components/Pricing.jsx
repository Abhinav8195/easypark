import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
     const navigate = useNavigate();
     const handleClick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("Button clicked: Get Basic");
  navigate("/buysticker");
};

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Run once
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(
        ".pricing-slide-left, .pricing-scale-up, .pricing-slide-right, .fade-in-up, .price-bounce, .feature-slide-in, .checkmark-bounce, .button-float"
      )
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">Pricing</h2>
          <p className="text-xl" style={{ color: 'var(--medium-gray)' }}>
            Choose your perfect plan
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="pricing-card pricing-slide-left">
            <div className="pricing-header fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
              <div className="mb-8 price-bounce">
                <span className="text-5xl font-bold text-white">₹230</span>
                <span style={{ color: 'var(--medium-gray)' }}>/sticker</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8 pricing-features">
              <li className="flex items-center feature-slide-in">
                <span
                  style={{ color: 'var(--medium-gray)' }}
                  className="mr-3 checkmark-bounce"
                >
                  ✓
                </span>
                <span style={{ color: 'var(--light-gray)' }}>1 Premium QR Sticker</span>
              </li>
              <li className="flex items-center feature-slide-in">
                <span
                  style={{ color: 'var(--medium-gray)' }}
                  className="mr-3 checkmark-bounce"
                >
                  ✓
                </span>
                <span style={{ color: 'var(--light-gray)' }}>Basic Profile</span>
              </li>
              <li className="flex items-center feature-slide-in">
                <span
                  style={{ color: 'var(--medium-gray)' }}
                  className="mr-3 checkmark-bounce"
                >
                  ✓
                </span>
                <span style={{ color: 'var(--light-gray)' }}>SMS Notifications</span>
              </li>
              <li className="flex items-center feature-slide-in">
                <span
                  style={{ color: 'var(--medium-gray)' }}
                  className="mr-3 checkmark-bounce"
                >
                  ✓
                </span>
                <span style={{ color: 'var(--light-gray)' }}>Email Support</span>
              </li>
            </ul>
            <button id='a' onClick={handleClick} className="w-full btn-outline button-float">Get Basic</button>
          </div>

          {/* Family Plan */}
          <div className="pricing-card featured pricing-scale-up">
            <div className="pricing-header fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-4">Family</h3>
              <div className="mb-8 price-bounce">
                <span className="text-5xl font-bold text-white">₹1,050</span>
                <span style={{ color: 'var(--medium-gray)' }}>/pack</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8 pricing-features">
              <li className="flex items-center feature-slide-in">
                <span
                  style={{ color: 'var(--medium-gray)' }}
                  className="mr-3 checkmark-bounce"
                >
                  ✓
                </span>
                <span style={{ color: 'var(--light-gray)' }}>5 Premium QR Stickers</span>
              </li>
              <li className="flex items-center feature-slide-in">
                <span
                  style={{ color: 'var(--medium-gray)' }}
                  className="mr-3 checkmark-bounce"
                >
                  ✓
                </span>
                <span style={{ color: 'var(--light-gray)' }}>Advanced Features</span>
              </li>
              <li className="flex items-center feature-slide-in">
                <span
                  style={{ color: 'var(--medium-gray)' }}
                  className="mr-3 checkmark-bounce"
                >
                  ✓
                </span>
                <span style={{ color: 'var(--light-gray)' }}>All Notifications</span>
              </li>
              <li className="flex items-center feature-slide-in">
                <span
                  style={{ color: 'var(--medium-gray)' }}
                  className="mr-3 checkmark-bounce"
                >
                  ✓
                </span>
                <span style={{ color: 'var(--light-gray)' }}>Priority Support</span>
              </li>
              <li className="flex items-center feature-slide-in">
                <span
                  style={{ color: 'var(--medium-gray)' }}
                  className="mr-3 checkmark-bounce"
                >
                  ✓
                </span>
                <span style={{ color: 'var(--light-gray)' }}>Family Sharing</span>
              </li>
            </ul>
            <button onClick={()=>navigate('/buysticker')} className="w-full btn-modern button-float">Get Family Pack</button>
          </div>

          {/* Business Plan */}
          <div className="pricing-card pricing-slide-right">
            <div className="pricing-header fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-4">Business</h3>
              <div className="mb-8 price-bounce">
                <span className="text-5xl font-bold text-white">₹1,950</span>
                <span style={{ color: 'var(--medium-gray)' }}>/pack</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8 pricing-features">
              <li className="flex items-center feature-slide-in">
                <span
                  style={{ color: 'var(--medium-gray)' }}
                  className="mr-3 checkmark-bounce"
                >
                  ✓
                </span>
                <span style={{ color: 'var(--light-gray)' }}>15 Premium Stickers</span>
              </li>
              <li className="flex items-center feature-slide-in">
                <span
                  style={{ color: 'var(--medium-gray)' }}
                  className="mr-3 checkmark-bounce"
                >
                  ✓
                </span>
                <span style={{ color: 'var(--light-gray)' }}>Business Features</span>
              </li>
              <li className="flex items-center feature-slide-in">
                <span
                  style={{ color: 'var(--medium-gray)' }}
                  className="mr-3 checkmark-bounce"
                >
                  ✓
                </span>
                <span style={{ color: 'var(--light-gray)' }}>All Notifications</span>
              </li>
              <li className="flex items-center feature-slide-in">
                <span
                  style={{ color: 'var(--medium-gray)' }}
                  className="mr-3 checkmark-bounce"
                >
                  ✓
                </span>
                <span style={{ color: 'var(--light-gray)' }}>24/7 Support</span>
              </li>
              <li className="flex items-center feature-slide-in">
                <span
                  style={{ color: 'var(--medium-gray)' }}
                  className="mr-3 checkmark-bounce"
                >
                  ✓
                </span>
                <span style={{ color: 'var(--light-gray)' }}>Analytics</span>
              </li>
            </ul>
            <button className="w-full btn-outline button-float">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
