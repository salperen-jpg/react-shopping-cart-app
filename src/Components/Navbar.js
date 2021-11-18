import React from 'react';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <div className='nav-center'>
        <h1 className='title-logo'>Alperen</h1>
        <div className='nav-container'>
          <i className='fas fa-shopping-cart'></i>
          <div className='amount-container'>
            <p>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
