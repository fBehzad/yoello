import BeerActionType from './beers.actiontype';

const INITIAL_STATE = {
  beerList: [],
  errorMessage: '',
  isFetching: false,
};

const beerReducer  = (state = INITIAL_STATE,action)=>{
  switch(action.type){
    case BeerActionType.FETCH_BEERS_START:
      return {
        ...state,
        isFetching: true
      };
    case BeerActionType.FETCH_BEERS_SUCCED:
      const data =[...state.beerList,...action.payload];
      return{
        ...state,
        beerList:data,
        isFetching: false
      };
    case BeerActionType.FETCH_BEERS_FAILED:
      return{
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case BeerActionType.CLEAR_FETCH_DATA:
      return{
        ...state,
        beerList:INITIAL_STATE.beerList
      }

    default:
      return state
  }
};

export default beerReducer
