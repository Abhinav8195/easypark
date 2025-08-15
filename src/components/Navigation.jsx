import React, { useEffect } from 'react'
import { initAnimations } from '../utils/animations';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
     const navigate = useNavigate();

    const handleNavigation = () => {
    navigate('/buysticker'); 
  };

     useEffect(() => {
    initAnimations();
  }, []);
  return (
    <div>
         <nav className="nav-modern fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-300 to-gray-500 rounded-xl flex items-center justify-center">
                        <span className="text-black font-bold text-sm">EP</span>
                    </div>
                    <span className="text-xl font-bold text-white">EasyPark</span>
                </div>
                
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white font-medium transition-colors">Home</a>
                    <a href="#features" className="text-gray-300 hover:text-white font-medium transition-colors">Features</a>
                    <a href="#pricing" className="text-gray-300 hover:text-white font-medium transition-colors">Pricing</a>
                    <a href="#testimonials" className="text-gray-300 hover:text-white font-medium transition-colors">Reviews</a>
                </div>
                
                <button onClick={handleNavigation} className="btn-modern">
                    Get Started
                </button>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navigation