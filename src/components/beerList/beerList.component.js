import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import './beerList.style.sass';
import Dialog from '../dialog/dialog.component';
import CartModal from '../cart/cartModal.component';
import Cart from '../cart/cart.component';
import { addItem } from '../../redux/cart/cart.action';
import { CollapseComponent } from '../../components/collapse/collapse.component';
import Infinitescroll from '../infinitScroll/Infinitescroll';

const BeerList = ({beers, addItem, cartItems, fetchBeerStart, filterData}) => {
  const [isOpenCart, setToggleDialog] = useState(false);
  const [beer, setBeer] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(filterData);
  }, [filterData]);

  const [cartCollapse, setCartCollapse] = useState(false);

  const isShowDialog = (beer) => {
    setToggleDialog(!isOpenCart);
    setBeer(beer);
  };
  const addItemToCart = (item) => {
    addItem(item);
    setToggleDialog(!isOpenCart);
    setCartCollapse(true);
  };
  const collapseRef = useRef();
  const changeCartCollapseState = (status) => {
    if(cartItems.length !==0 ){
      if (status) {
        setCartCollapse(status);
      }
    }

  };

  const fetch = (data) => {
    fetchBeerStart(data);
    setCount(data.per * data.page);
  };

  return (
    <React.Fragment>
      <div className="beer-container">
        <Infinitescroll
          extraData={filterData.food}
          reset = {filterData.page !==1}
          loadmore = {beers.length >= count}
          fetchBeerStart={({per, page}) => fetch({per, page, food: filterData.food})}>
          {beers && beers.map((beer, index) => (
            <div key={index} className="beer-content" onClick={() => isShowDialog(beer)}>
              <div className="beer-image-container">
                {beer.image_url ? <img src={`${beer.image_url}?50*50`} className="beer-image" alt="beer_image"/>:
                  <img src="/assets/noImage.jpg" className="beer-image" alt="beer_image"/>}
              </div>
              <div className="beer-text">
                <span className="beer-title">{beer.name}</span>
                <span className="beer-title">{beer.abv}</span>
              </div>
            </div>
          ))}

        </Infinitescroll>
      </div>
      {isOpenCart && <Dialog>
        <CartModal
          name={beer.name}
          image={beer.image_url}
          abv={beer.abv}
          description={beer.description}
          food_pairing={beer.food_pairing}
          tagline={beer.tagline}
          addItem={() => addItemToCart(beer)}
          toggleModal={() => setToggleDialog(!isOpenCart)}
        />
      </Dialog>}
      <CollapseComponent
        innerRef={collapseRef}
        title={`${cartCollapse ? '' :  'Shopping Cart'}`}
        collapseState={changeCartCollapseState}
        flag={cartCollapse}
      >
        {cartItems.length !== 0 ?
        <div>
          <div  className="collapse-container collapse-content-title" onClick={()=>setCartCollapse(!cartCollapse)}>
            <span>Shopping Cart</span>
          </div>
          <div className="collapse-container">
             <Cart cartItems={cartItems}/>
          </div>
        </div>: <div/>}
      </CollapseComponent>
    </React.Fragment>
  );
};

const mapStateToProps = ({beer, cart}) => {
  return {
    beers: beer.beerList,
    cartItems: cart.cartItems,
  };
};
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),

});
export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
