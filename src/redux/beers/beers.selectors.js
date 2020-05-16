import { createSelector } from 'reselect';

const selectBeer = state => state.beer;

export const selectBeers = createSelector(
  [selectBeer],
  beer => beer.beerList
);

export const selectIsBeersFetching = createSelector(
  [selectBeers],
  beer => beer.isFetching
);

