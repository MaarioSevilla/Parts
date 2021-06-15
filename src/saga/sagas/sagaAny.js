import {takeEvery, call, select, put} from 'redux-saga/effects';
import * as ActionsNews from '../actions/actionsAny';

const getDataProfile = () => {
  return fetch(
    'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc',
  ).then(response => response.json());
};

function* sagaGetNews() {
  console.log('llegue hasta aqui');
  try {
    const news = yield call(getDataProfile);
    yield put(ActionsNews.actionSaveNews(news));
  } catch (error) {
    console.log(error);
  }
}

export default function* SagasUser() {
  yield takeEvery(ActionsNews.GET_LIST_NEWS, sagaGetNews);
}
