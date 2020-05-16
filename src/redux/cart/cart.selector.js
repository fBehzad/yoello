import {createSelector} from 'reselect'

const selectCart = state => state.cart;
export const selectCartItems = createSelector(
  [selectCart],
  cart=> cart.cartItems
);

export const selectHidden = createSelector(
  [selectCart],
  cart=> cart.hidden
);

export const countItems = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((count,cartItems)=>count + cartItems.quantity,0)
);
export const totalPrice = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((count,cartItems)=>count + cartItems.quantity * cartItems.abv,0)
);
