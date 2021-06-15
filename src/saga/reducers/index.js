import {combineReducers} from 'redux';

import {reducerNews} from './reducerAny';
import {reducerPeticion} from './reducerPeticion';

export default combineReducers({
  reducerNews,
  reducerPeticion,
});
