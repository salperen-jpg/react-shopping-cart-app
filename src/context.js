import React, { useContext, useEffect, useState, useReducer } from 'react';
import reducer from './Components/reducer';
import data from './Components/data';

const AppContext = React.createContext();

const defaulState = {
  isLoading: false,
  cartItems: data,
  amount: 0,
  total: 0,
  alert: {
    show: false,
    type: '',
    msg: '',
  },
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaulState);

  const clearBag = () => {
    dispatch({ type: 'CLEAR_BAG' });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const increaseAmount = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  const decreaseAmount = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
  }, [state.cartItems]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearBag,
        removeItem,
        increaseAmount,
        decreaseAmount,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
