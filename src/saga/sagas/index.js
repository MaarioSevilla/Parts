import {all} from 'redux-saga/effects';

import Any from './sagaAny';
import SagasPeticion from './sagaPeticion';

export default function* rootSaga() {
  yield all([Any(), SagasPeticion()]);
}
