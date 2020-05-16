import { combineReducers }  from 'redux';
import beerReducer from './beers/beers.reducer';
import CartReducer from './cart/cart.reducer';
const rootReducer = combineReducers({
  beer: beerReducer,
  cart: CartReducer,
});
export default rootReducer;
