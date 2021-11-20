import React, { useEffect } from 'react';
import { useGlobalContext } from './context';
const Alert = () => {
  const {
    alert: { msg },
    alert: { type },
    closeModal,
    cartItems,
  } = useGlobalContext();

  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  }, [cartItems]);
  return (
    <div className={`alert ${type}`}>
      <h3 className='alert-message'>{msg}</h3>
    </div>
  );
};

export default Alert;
