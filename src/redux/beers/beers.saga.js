import { takeEvery,put,call,all } from 'redux-saga/effects';
import BeerActionType from './beers.actiontype';
import {getBeersList} from './beers.api'
import  {
  fetchBeersFailed,
  fetchBeersSuccess
} from './beers.action';

export function* fetchBeersAsync({payload:{per,page,food}}) {
  try{
    const beers = yield call(getBeersList,per,page,food);
    yield put(fetchBeersSuccess(beers))

  }catch (error) {
    yield put(fetchBeersFailed(error.message))
  }
}

export function* fetchBeersStart  () {
 yield takeEvery(BeerActionType.FETCH_BEERS_START,fetchBeersAsync)
}

export function* beerSagas () {
  yield all([
    call(fetchBeersStart),
  ])
}

