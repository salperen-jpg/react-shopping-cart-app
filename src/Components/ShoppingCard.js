import React from 'react';
import { useGlobalContext } from '../context';
import Card from './Card';
import SectionTitle from '../SectionTitle';
import Alert from '../Alert';

const ShoppingCard = () => {
  const { cartItems, total, clearBag, alert } = useGlobalContext();
  console.log(alert.show);
  if (cartItems.length === 0) {
    return (
      <section className='shopping-bag'>
        <SectionTitle />
        {/* {alert.show && <Alert />} */}
        <h1 className='empty-bag'>No item in your bag !</h1>
      </section>
    );
  }

  return (
    <section className='shopping-bag'>
      <SectionTitle />
      <div>
        {cartItems.map((singleItem) => {
          return <Card {...singleItem} key={singleItem.id} />;
        })}
      </div>

      <div className='underline'></div>
      <div className='card-footer'>
        <h3>total</h3>
        <h3 className='total-price'>${total}</h3>
      </div>
      <div className='clear-container'>
        <button className='clear-btn' onClick={clearBag}>
          Clear All Items
        </button>
      </div>
    </section>
  );
};

export default ShoppingCard;
