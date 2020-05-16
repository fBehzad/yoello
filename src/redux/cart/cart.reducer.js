import CartType  from './cart.type';
import { addItem, removeItem } from './cart.utils';

const INITIAL_STATE = {
  cartItems:[],
  hidden: false
};

const CartReducer = (state= INITIAL_STATE,action)=>{
  switch (action.type){
    case CartType.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload),
      };
    case CartType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
      };
    case CartType.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };
    default:
      return state
  }
};
export default CartReducer
