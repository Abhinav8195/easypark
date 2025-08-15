import React, { useEffect } from 'react'
import NavBar from '../components/BuyComponents/NavBar';
import {createAccount} from '../utils/createAccount'
import ShinyText from '../components/BuyComponents/ShinyText';

const Create = () => {
       useEffect(() => {
        createAccount();
      }, []);
  return (
   <>
    <NavBar/>
    <div>
        <div className="pt-32 pb-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {/* <!-- Header --> */}
            <div className="text-center mb-12 fade-in">
                <div className="qr-animation">
                    <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM19 13h2v2h-2zM13 13h2v2h-2zM15 15h2v2h-2zM13 17h2v2h-2zM15 19h2v2h-2zM17 17h2v2h-2zM17 13h2v2h-2zM19 15h2v2h-2z"/>
                    </svg>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                    Welcome to
                    <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">EasyPark</span>
                </h1>
                 <ShinyText text="Complete your account setup to start using smart parking communication" disabled={false} speed={3} className='text-lg text-gray-400 max-w-2xl mx-auto' />
            </div>

            {/* <!-- Account Creation Form --> */}
            <div className="account-card slide-in" id="account-form">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Create Your Account</h2>
                    <p className="text-gray-400">Fill in your details to activate your EasyPark sticker</p>
                </div>

                <form id="createAccountForm">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="form-group">
                            <label className="form-label" for="orderId">Order ID</label>
                            <input type="text" id="orderId" className="form-input" placeholder="EP2024001" required />
                            <div className="validation-message" id="orderIdMessage"></div>
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label" for="stickerId">Sticker ID</label>
                            <input type="text" id="stickerId" className="form-input" placeholder="ST123456" required />
                            <div className="validation-message" id="stickerIdMessage"></div>
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label" for="firstName">First Name</label>
                            <input type="text" id="firstName" className="form-input" placeholder="Enter your first name" required />
                            <div className="validation-message" id="firstNameMessage"></div>
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label" for="lastName">Last Name</label>
                            <input type="text" id="lastName" className="form-input" placeholder="Enter your last name" required />
                            <div className="validation-message" id="lastNameMessage"></div>
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label" for="vehicleNo">Vehicle Number</label>
                            <input type="text" id="vehicleNo" className="form-input" placeholder="MH 01 AB 1234" required />
                            <div className="validation-message" id="vehicleNoMessage"></div>
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label" for="phoneNumber">Phone Number</label>
                            <input type="tel" id="phoneNumber" className="form-input" placeholder="+91 98765 43210" required />
                            <div className="validation-message" id="phoneNumberMessage"></div>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label" for="email">Email Address</label>
                        <input type="email" id="email" className="form-input" placeholder="your@email.com" required />
                        <div className="validation-message" id="emailMessage"></div>
                    </div>
                    
                   <div className="mt-8 flex justify-center">
                    <button type="submit" className="btn-modern">
                        Create Account & Activate Sticker
                    </button>
                </div>
                </form>
            </div>

            {/* <!-- Success Animation --> */}
            <div className="success-animation account-card" id="success-animation">
                <div className="success-icon">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Account Created Successfully!</h3>
                <p className="text-lg text-gray-400 mb-6">
                    Your EasyPark account is now active and your sticker is ready to use.
                </p>
                <div className="info-card mb-6">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <span className="text-gray-400">Account ID:</span>
                            <span className="text-white font-mono ml-2" id="accountId">#ACC2024001</span>
                        </div>
                        <div>
                            <span className="text-gray-400">Vehicle:</span>
                            <span className="text-white ml-2" id="displayVehicle">MH 01 AB 1234</span>
                        </div>
                        <div>
                            <span className="text-gray-400">Sticker Status:</span>
                            <span className="text-green-400 ml-2">✓ Active</span>
                        </div>
                        <div>
                            <span className="text-gray-400">Created:</span>
                            <span className="text-white ml-2" id="createdDate">Today</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <button className="btn-modern" onclick="downloadApp()">
                        Download EasyPark App
                    </button>
                    <button className="btn-outline w-full" onclick="viewProfile()">
                        View My Profile
                    </button>
                </div>
            </div>

            {/* <!-- Info Section --> */}
            <div className="mt-12 grid md:grid-cols-3 gap-6 scale-in">
                <div className="info-card text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Instant Activation</h4>
                    <p className="text-sm text-gray-400">Your sticker activates immediately after account creation</p>
                </div>
                
                <div className="info-card text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Smart Notifications</h4>
                    <p className="text-sm text-gray-400">Get notified when someone needs to contact you</p>
                </div>
                
                <div className="info-card text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                        </svg>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Privacy Protected</h4>
                    <p className="text-sm text-gray-400">Your personal details remain secure and private</p>
                </div>
            </div>
        </div>
    </div>

    </div>
   </>
  )
}

export default Create