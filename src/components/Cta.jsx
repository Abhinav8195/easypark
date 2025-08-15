import React from "react";

const Cta = () => {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-white mb-8">Ready to Start?</h2>
        <p
          className="text-xl mb-12 max-w-2xl mx-auto"
          style={{ color: "var(--medium-gray)" }}
        >
          Join thousands who've transformed their parking experience
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="qr-container">
            <svg className="w-20 h-20" viewBox="0 0 100 100">
              <rect
                x="10"
                y="10"
                width="80"
                height="80"
                fill="none"
                stroke="#000"
                strokeWidth="2"
                rx="4"
              />
              <rect x="15" y="15" width="12" height="12" fill="#000" rx="2" />
              <rect x="35" y="15" width="12" height="12" fill="#000" rx="2" />
              <rect x="65" y="15" width="12" height="12" fill="#000" rx="2" />
              <rect x="15" y="35" width="12" height="12" fill="#000" rx="2" />
              <rect x="65" y="35" width="12" height="12" fill="#000" rx="2" />
              <rect x="40" y="40" width="8" height="8" fill="#5C4E4E" rx="1" />
              <rect x="50" y="40" width="8" height="8" fill="#5C4E4E" rx="1" />
              <rect x="35" y="50" width="8" height="8" fill="#5C4E4E" rx="1" />
              <rect x="55" y="50" width="8" height="8" fill="#5C4E4E" rx="1" />
              <rect x="15" y="65" width="12" height="12" fill="#000" rx="2" />
              <rect x="35" y="65" width="12" height="12" fill="#000" rx="2" />
              <rect x="65" y="65" width="12" height="12" fill="#000" rx="2" />
            </svg>
          </div>

          <button className="btn-modern text-lg px-12 py-6 flex items-center">
            <span className="mr-3">→</span>
            Scan &amp; Create Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
