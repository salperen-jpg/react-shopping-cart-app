const reducer = (state, action) => {
  if (action.type === 'CLEAR_BAG') {
    return {
      ...state,
      cartItems: [],
      alert: {
        show: true,
        msg: 'All items deleted',
        type: 'danger',
      },
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const updatedArray = state.cartItems.filter((item) => {
      return item.id !== action.payload;
    });
    return {
      ...state,
      cartItems: updatedArray,
      alert: {
        show: true,
        msg: 'Item has been removed',
        type: 'danger',
      },
    };
  }
  if (action.type === 'INCREASE') {
    const newArray = state.cartItems.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return {
      ...state,
      cartItems: newArray,
      alert: {
        show: true,
        msg: "Item's amount is increased",
        type: 'success',
      },
    };
  }
  if (action.type === 'DECREASE') {
    const newArray = state.cartItems
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return {
      ...state,
      cartItems: newArray,
      alert: {
        show: true,
        msg: "Item's amount is decreased ",
        type: 'danger',
      },
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      alert: {
        ...alert,
        show: false,
      },
    };
  }
  if (action.type === 'GET_TOTAL') {
    let { total, amount } = state.cartItems.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }

  return state;
};

export default reducer;
