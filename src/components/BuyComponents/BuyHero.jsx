import React, { useEffect } from 'react'
import {initorder} from '../../utils/order'

const BuyHero = () => {

     useEffect(() => {
    setTimeout(() => {
        initorder();
         window.scrollTo(0, 0);
    }, 0); 
}, []);
    
  return (
    <div>
         <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Header */}
        <div className="text-center mb-16 fade-in ">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Order Your{" "}
            <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              EasyPark
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose your package and get started with smart parking communication
          </p>
        </div>

            {/* Progress Steps */}
       <div className="max-w-4xl mx-auto mb-12 px-4">
  <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8 space-y-4 sm:space-y-0">
    <div className="progress-step flex flex-col sm:flex-row items-center sm:space-x-2">
      <div className="step-number active" id="step1">1</div>
      <div className="step-text active text-center sm:text-left" id="step1-text">Select Package</div>
    </div>
    <div className="progress-step flex flex-col sm:flex-row items-center sm:space-x-2">
      <div className="step-number" id="step2">2</div>
      <div className="step-text text-center sm:text-left" id="step2-text">Your Information</div>
    </div>
    <div className="progress-step flex flex-col sm:flex-row items-center sm:space-x-2">
      <div className="step-number" id="step3">3</div>
      <div className="step-text text-center sm:text-left" id="step3-text">Complete Order</div>
    </div>
  </div>
</div>


              <div className="grid lg:grid-cols-3 gap-12">
                {/* <!-- Left Column - Order Form --> */}
                <div className="lg:col-span-2">
                    {/* <!-- Package Selection --> */}
                    <div className="form-section slide-in " id="package-selection">
                        <h3>Choose Your Package</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="package-card" data-package="basic" data-price="199" data-stickers="1">
                                <div className="text-center">
                                    <h4 className="text-xl font-bold text-white mb-2">Basic</h4>
                                    <div className="text-3xl font-bold text-white mb-4">₹199</div>
                                    <ul className="text-sm space-y-2 text-gray-400">
                                        <li>• 1 Premium QR Sticker</li>
                                        <li>• Basic Profile</li>
                                        <li>• SMS Notifications</li>
                                        <li>• Email Support</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="package-card featured" data-package="family" data-price="499" data-stickers="5">
                                <div className="text-center">
                                    <h4 className="text-xl font-bold text-white mb-2">Family</h4>
                                    <div className="text-3xl font-bold text-white mb-4">₹499</div>
                                    <ul className="text-sm space-y-2 text-gray-400">
                                        <li>• 5 Premium QR Stickers</li>
                                        <li>• Advanced Features</li>
                                        <li>• All Notifications</li>
                                        <li>• Priority Support</li>
                                        <li>• Family Sharing</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="package-card" data-package="business" data-price="999" data-stickers="15">
                                <div className="text-center">
                                    <h4 className="text-xl font-bold text-white mb-2">Business</h4>
                                    <div className="text-3xl font-bold text-white mb-4">₹999</div>
                                    <ul className="text-sm space-y-2 text-gray-400">
                                        <li>• 15 Premium Stickers</li>
                                        <li>• Business Features</li>
                                        <li>• All Notifications</li>
                                        <li>• 24/7 Support</li>
                                        <li>• Analytics Dashboard</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Personal Information --> */}
                    <div className="form-section scale-in" id="personal-info" style={{ display: "none" }}>
                        <h3>Personal Information</h3>
                        <div className="grid md:grid-cols-2 gap-6"> 
                            <div className="form-group">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-input" placeholder="Enter your first name" id="firstName" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-input" placeholder="Enter your last name" id="lastName" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-input" placeholder="your@email.com" id="email" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <input type="tel" className="form-input" placeholder="+91 98765 43210" id="phone" required />
                            </div>
                        </div>
                    </div>


                    <div className="form-section scale-in " id="shipping-info" style={{ display: "none" }}>
                        <h3>Shipping Address</h3>
                        <div className="grid gap-6">
                            <div className="form-group">
                                <label className="form-label">Street Address</label>
                                <input type="text" className="form-input" placeholder="House/Flat No., Street Name" id="address1" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Address Line 2 (Optional)</label>
                                <input type="text" className="form-input" placeholder="Apartment, suite, etc." id="address2" />
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="form-group">
                                    <label className="form-label">City</label>
                                    <input type="text" className="form-input" placeholder="City" id="city" required/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">State</label>
                                    <select className="form-input" id="state" required>
                                        <option value="">Select State</option>
                                        <option value="AN">Andaman and Nicobar Islands</option>
                                        <option value="AP">Andhra Pradesh</option>
                                        <option value="AR">Arunachal Pradesh</option>
                                        <option value="AS">Assam</option>
                                        <option value="BR">Bihar</option>
                                        <option value="CH">Chandigarh</option>
                                        <option value="CT">Chhattisgarh</option>
                                        <option value="DN">Dadra and Nagar Haveli</option>
                                        <option value="DD">Daman and Diu</option>
                                        <option value="DL">Delhi</option>
                                        <option value="GA">Goa</option>
                                        <option value="GJ">Gujarat</option>
                                        <option value="HR">Haryana</option>
                                        <option value="HP">Himachal Pradesh</option>
                                        <option value="JK">Jammu and Kashmir</option>
                                        <option value="JH">Jharkhand</option>
                                        <option value="KA">Karnataka</option>
                                        <option value="KL">Kerala</option>
                                        <option value="LD">Lakshadweep</option>
                                        <option value="MP">Madhya Pradesh</option>
                                        <option value="MH">Maharashtra</option>
                                        <option value="MN">Manipur</option>
                                        <option value="ML">Meghalaya</option>
                                        <option value="MZ">Mizoram</option>
                                        <option value="NL">Nagaland</option>
                                        <option value="OR">Odisha</option>
                                        <option value="PY">Puducherry</option>
                                        <option value="PB">Punjab</option>
                                        <option value="RJ">Rajasthan</option>
                                        <option value="SK">Sikkim</option>
                                        <option value="TN">Tamil Nadu</option>
                                        <option value="TG">Telangana</option>
                                        <option value="TR">Tripura</option>
                                        <option value="UP">Uttar Pradesh</option>
                                        <option value="UT">Uttarakhand</option>
                                        <option value="WB">West Bengal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">PIN Code</label>
                                    <input type="text" className="form-input" placeholder="110001" id="pincode" required/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="checkbox-container">
                            <div className="checkbox" id="sameAsShipping"></div>
                            <span className="text-gray-400">Billing address same as shipping address</span>
                        </div>
                    </div>

 {/* <!-- Billing Address --> */}
                    <div className="form-section scale-in" id="billing-info" style={{ display: "none" }}>
                        <h3>Billing Address</h3>
                        <div className="grid gap-6">
                            <div className="form-group">
                                <label className="form-label">Street Address</label>
                                <input type="text" className="form-input" placeholder="House/Flat No., Street Name" id="billingAddress1" required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Address Line 2 (Optional)</label>
                                <input type="text" className="form-input" placeholder="Apartment, suite, etc." id="billingAddress2" />
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="form-group">
                                    <label className="form-label">City</label>
                                    <input type="text" className="form-input" placeholder="City" id="billingCity" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">State</label>
                                    <select className="form-input" id="billingState" required>
                                        <option value="">Select State</option>
                                        <option value="AN">Andaman and Nicobar Islands</option>
                                        <option value="AP">Andhra Pradesh</option>
                                        <option value="AR">Arunachal Pradesh</option>
                                        <option value="AS">Assam</option>
                                        <option value="BR">Bihar</option>
                                        <option value="CH">Chandigarh</option>
                                        <option value="CT">Chhattisgarh</option>
                                        <option value="DN">Dadra and Nagar Haveli</option>
                                        <option value="DD">Daman and Diu</option>
                                        <option value="DL">Delhi</option>
                                        <option value="GA">Goa</option>
                                        <option value="GJ">Gujarat</option>
                                        <option value="HR">Haryana</option>
                                        <option value="HP">Himachal Pradesh</option>
                                        <option value="JK">Jammu and Kashmir</option>
                                        <option value="JH">Jharkhand</option>
                                        <option value="KA">Karnataka</option>
                                        <option value="KL">Kerala</option>
                                        <option value="LD">Lakshadweep</option>
                                        <option value="MP">Madhya Pradesh</option>
                                        <option value="MH">Maharashtra</option>
                                        <option value="MN">Manipur</option>
                                        <option value="ML">Meghalaya</option>
                                        <option value="MZ">Mizoram</option>
                                        <option value="NL">Nagaland</option>
                                        <option value="OR">Odisha</option>
                                        <option value="PY">Puducherry</option>
                                        <option value="PB">Punjab</option>
                                        <option value="RJ">Rajasthan</option>
                                        <option value="SK">Sikkim</option>
                                        <option value="TN">Tamil Nadu</option>
                                        <option value="TG">Telangana</option>
                                        <option value="TR">Tripura</option>
                                        <option value="UP">Uttar Pradesh</option>
                                        <option value="UT">Uttarakhand</option>
                                        <option value="WB">West Bengal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">PIN Code</label>
                                    <input type="text" className="form-input" placeholder="110001" id="billingPincode" required/>
                                </div>
                            </div>
                        </div>
                    </div>

               {/* <!-- Navigation Buttons --> */}
                    <div className="flex justify-between mt-8" id="navigation-buttons">
                        <button className="btn-outline" id="prevBtn" style={{ display: "none" }}>
                            ← Previous
                        </button>
                        <button className="btn-modern ml-auto" id="nextBtn">
                            Continue →
                        </button>
                    </div>

                    {/* <!-- Success Animation --> */}
                    <div className="success-animation order-card" id="success-animation">
                        <div className="success-icon">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Order Placed Successfully!</h3>
                        <p className="text-lg text-gray-400 mb-6">
                            Thank you for your order! You'll receive a confirmation email shortly with tracking details.
                        </p>
                        <div className="bg-rgba(92, 78, 78, 0.1) border border-gray-600 rounded-lg p-4 mb-6">
                            <p className="text-sm text-gray-400">Order ID: <span className="text-white font-mono" id="orderId">#EP2024001</span></p>
                            <p className="text-sm text-gray-400">Estimated Delivery: <span className="text-white">3-5 business days</span></p>
                        </div>
                        <button className="btn-modern" onclick="window.location.href='#'">
                            Track Your Order
                        </button>
                    </div>
                </div>
                 {/* <!-- Right Column - Order Summary --> */}
                <div className="lg:col-span-1">
                    <div className="order-summary fade-in ">
                        <h3 className="text-2xl font-bold text-white mb-6">Order Summary</h3>
                        
                        <div id="selected-package" style={{ display: "none" }}>
                            <div className="mb-6 p-4 bg-rgba(92, 78, 78, 0.1) rounded-lg border border-gray-600">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-semibold text-white" id="package-name">Family Pack</span>
                                    <span className="text-sm bg-gray-600 text-white px-2 py-1 rounded">Most Popular</span>
                                </div>
                                <p className="text-sm text-gray-400" id="package-description">5 Premium QR Stickers with advanced features</p>
                            </div>
                        </div>
                        
                        <div className="space-y-4 mb-6">
                            <div className="summary-item">
                                <span className="text-gray-400">Package Price</span>
                                <span className="text-white" id="package-price">₹0</span>
                            </div>
                            <div className="summary-item">
                                <span className="text-gray-400">Shipping</span>
                                <span className="text-white">₹49</span>
                            </div>
                            <div className="summary-item">
                                <span className="text-gray-400">GST (18%)</span>
                                <span className="text-white" id="gst-amount">₹0</span>
                            </div>
                            <div className="summary-item">
                                <span className="text-white">Total</span>
                                <span className="text-white text-xl" id="total-amount">₹0</span>
                            </div>
                        </div>
                        
                        <div className="mb-6">
                            <h4 className="font-semibold text-white mb-3">What's Included:</h4>
                            <ul className="text-sm text-gray-400 space-y-2" id="package-features">
                                <li>• Premium weather-resistant stickers</li>
                                <li>• Instant QR code activation</li>
                                <li>• Mobile app access</li>
                                <li>• 24/7 customer support</li>
                            </ul>
                        </div>
                        
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                                <span className="text-sm text-gray-400">Secure checkout</span>
                            </div>
                            <div className="flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                                <span className="text-sm text-gray-400">30-day money back guarantee</span>
                            </div>
                        </div>
                    </div>
</div>
</div>
        </div>
        </div>
        </div>
        
  )
}

export default BuyHero