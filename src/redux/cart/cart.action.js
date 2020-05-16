import   CartType   from './cart.type';

export const addItem = item => ({
  type: CartType.ADD_ITEM_TO_CART,
  payload: item,
});
export const clearItemFromCart = item => ({
  type: CartType.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = item => ({
  type: CartType.REMOVE_ITEM_FROM_CART,
  payload: item,
});
