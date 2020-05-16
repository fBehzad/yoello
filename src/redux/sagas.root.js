import  {all,call} from 'redux-saga/effects';
import  {beerSagas} from './beers/beers.saga';

function* SagasRoot  () {
  yield all([
    call(beerSagas)
  ])
}
export default SagasRoot
