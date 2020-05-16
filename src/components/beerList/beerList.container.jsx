import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { clearFetchData } from '../../redux/beers/beers.action';
import { selectIsBeersFetching } from '../../redux/beers/beers.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import BeerList from './beerList.component';
import  { fetchBeerStart } from '../../redux/beers/beers.action';

const INITIAL_STATE = {per: 21, page: 1, food: undefined};

const BeerContainer = ({fetchBeerStart, clearFetchData}) => {
  const [data, setData] = useState(INITIAL_STATE);
  const resetFetchData = (food = null) => {
    setData({per: 21, page: 1, food});
    clearFetchData();
  };

  return (
    <Fragment>
      <div className="tab-content">
        <button className={`${!data.food && 'active' }`} onClick={() => resetFetchData()}>
          ALL
        </button>
        <button className={`${data.food === 'pizza' && 'active' }`} onClick={() => resetFetchData('pizza')}>
          PIZZA
        </button>
        <button className={`${data.food === 'steak' && 'active' }`} onClick={() => resetFetchData('steak')}>
          STEAK
        </button>
      </div>
      <BeerList filterData={data} fetchBeerStart={fetchBeerStart}/>
    </Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsBeersFetching,
});
const mapDispatchToProps = dispatch => ({
  clearFetchData: () => dispatch(clearFetchData()),
  fetchBeerStart: (item) => dispatch(fetchBeerStart(item)),
});

export default  compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithSpinner,
)(BeerContainer);
