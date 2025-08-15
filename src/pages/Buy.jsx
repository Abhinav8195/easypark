import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../components/BuyComponents/NavBar';
import BuyHero from '../components/BuyComponents/BuyHero';

const Buy = () => {
    
  return (
    <div>
        <NavBar/>
        <BuyHero/>
    </div>
  )
}

export default Buy