import React from 'react';
import { useGlobalContext } from '../context';

const Card = ({ id, title, img, price, amount }) => {
  const { removeItem, increaseAmount, decreaseAmount } = useGlobalContext();
  return (
    <div className='card'>
      <img src={img} alt={title} />
      <div className='card-info'>
        <h4 className='title'>{title}</h4>
        <h4 className='price'>${price}</h4>
        <button type='button' class='delete-btn' onClick={() => removeItem(id)}>
          delete
        </button>
      </div>
      <div className='buttons'>
        <button
          type='button'
          className='amount-btn'
          onClick={() => increaseAmount(id)}
        >
          <i class='fas fa-plus'></i>
        </button>
        <h4 className='amount-quantity'>{amount}</h4>
        <button
          type='button'
          className='amount-btn'
          onClick={() => decreaseAmount(id)}
        >
          <i class='fas fa-minus'></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
