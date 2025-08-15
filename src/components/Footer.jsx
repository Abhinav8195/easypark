import React from "react";

const Footer = () => {
  return (
    <footer
      className="py-16"
      style={{
        background: "rgba(92, 78, 78, 0.05)",
        borderTop: "1px solid rgba(152, 134, 134, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-gray-300 to-gray-500 rounded-xl flex items-center justify-center">
                <span className="text-black font-bold text-sm">EP</span>
              </div>
              <span className="ml-3 text-xl font-bold text-white">
                EasyPark
              </span>
            </div>
            <p style={{ color: "var(--medium-gray)" }}>
              Smart parking communication for the modern world.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  style={{ color: "var(--medium-gray)" }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  style={{ color: "var(--medium-gray)" }}
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  style={{ color: "var(--medium-gray)" }}
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  style={{ color: "var(--medium-gray)" }}
                  className="hover:text-white transition-colors"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  style={{ color: "var(--medium-gray)" }}
                  className="hover:text-white transition-colors"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "var(--medium-gray)" }}
                  className="hover:text-white transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "var(--medium-gray)" }}
                  className="hover:text-white transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  style={{ color: "var(--medium-gray)" }}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Connect</h4>
            <div className="space-y-3">
              <a
                href="#"
                style={{ color: "var(--medium-gray)" }}
                className="hover:text-white transition-colors block"
              >
                Twitter
              </a>
              <a
                href="#"
                style={{ color: "var(--medium-gray)" }}
                className="hover:text-white transition-colors block"
              >
                Instagram
              </a>
              <a
                href="#"
                style={{ color: "var(--medium-gray)" }}
                className="hover:text-white transition-colors block"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="border-t mt-12 pt-8 text-center"
          style={{
            borderColor: "rgba(152, 134, 134, 0.1)",
            color: "var(--medium-gray)",
          }}
        >
          <p>&copy; 2025 EasyPark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
