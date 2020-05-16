import React from 'react';
import { connect } from 'react-redux';
import './cart.style.sass';
import  DeleteIcon from '../../ui/icons/deleteIcon';
import { createStructuredSelector } from 'reselect';
import {
  totalPrice
} from '../../redux/cart/cart.selector';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.action';

const Cart = ({cartItems, clearItemFromCart, addItem, removeItem,total}) => {
  return (
    <div className="cartItem-container">
      {cartItems.map((cartItem) => (
        <div key={cartItem.id} className="cartItem-content">
          <div className="price-title">
            <div className="price-content">
              <div className="img-container">
                <img src={cartItem.image_url}
                     alt="beer_image"/>
                <span className="price">{cartItem.abv}</span>
              </div>
            </div>
            <span className="cartItem-span">{cartItem.name}</span>
          </div>
          <div className="addItem">
            <div className="removeItemBtn" onClick={() => removeItem(cartItem)}>-</div>
            <div className="quantity">{cartItem.quantity}</div>
            <div className="addItemBtn" onClick={() => addItem(cartItem)}>+</div>
            <div >
              <DeleteIcon size={24} onClick={() => clearItemFromCart(cartItem)}/>
            </div>

          </div>
        </div>
      ))}
      <div className="total">
        <span>Total</span>
        <span className="total-price">{total}</span>
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
});

const mapStateToProps = createStructuredSelector({
  total: totalPrice
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
