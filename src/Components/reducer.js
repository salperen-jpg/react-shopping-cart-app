const reducer = (state, action) => {
  if (action.type === 'CLEAR_BAG') {
    return { ...state, cartItems: [] };
  }
  if (action.type === 'REMOVE_ITEM') {
    const updatedArray = state.cartItems.filter((item) => {
      return item.id !== action.payload;
    });
    return { ...state, cartItems: updatedArray };
  }
  if (action.type === 'INCREASE') {
    const newArray = state.cartItems.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cartItems: newArray };
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
    return { ...state, cartItems: newArray };
  }

  return state;
};

export default reducer;
