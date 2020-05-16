import React from 'react';
import './cart.style.sass';

const CartModal = ({name = '', image = '', abv = '', description = '', food_pairing = '', tagline = '', toggleModal,addItem}) => {
  return (
    <div className="cart-modal">
      <div className="cart-container">
        <button className="close-btn" onClick={toggleModal}>close</button>
        <div className="cart-content">
          <div>
            <h3>{name}</h3>
            <span>{tagline}</span>
            <span>{abv}</span>
            <span>{description}</span>
          </div>
          <div>
            <div className="image-container">
              <img src={image}
                   className="cart-image" alt="beer_image"/>
            </div>
          </div>
        </div>
        <div className="btn-position">
          <button className="cart-btn" onClick={addItem}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};
export default CartModal;
