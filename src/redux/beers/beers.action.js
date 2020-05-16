import BeerActionType from './beers.actiontype';

export const fetchBeerStart = (filterData) => ({
  type: BeerActionType.FETCH_BEERS_START,
  payload:filterData
});

export const fetchBeersSuccess = beers => ({
  type: BeerActionType.FETCH_BEERS_SUCCED,
  payload: beers,
});

export const fetchBeersFailed = error => ({
  type: BeerActionType.FETCH_BEERS_FAILED,
  payload: error,
});
export const clearFetchData = () => ({
  type: BeerActionType.CLEAR_FETCH_DATA,
});
