import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
  return (
    <div><nav className="nav-modern fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
                <div onClick={()=>navigate('/')} className="flex items-center space-x-3 cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-r from-gray-300 to-gray-500 rounded-xl flex items-center justify-center">
                        <span className="text-black font-bold text-sm">EP</span>
                    </div>
                    <span className="text-xl font-bold text-white">EasyPark</span>
                </div>
                
                <div  className="hidden md:flex items-center space-x-8">
                    <Link to={'/'} className="text-gray-300 hover:text-white font-medium transition-colors">← Back to Home</Link>
                </div>
                
                <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-400">Need Help?</span>
                    <button className="btn-outline text-sm px-4 py-2">
                        Support
                    </button>
                </div>
            </div>
        </div>
    </nav></div>
  )
}

export default NavBar