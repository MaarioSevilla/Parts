import {takeEvery, call, select, put} from 'redux-saga/effects';
import * as ActionsPeticion from '../actions/actionPeticion';

import axios from 'axios';

function petitionP(uid) {
  console.log('deberia ejecutarse una peticion');
  const query =
    'https://us-central1-openfinance2020-292200.cloudfunctions.net/query';
  const conf = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'AIzaSyDfp9fwr-14_xjhXUhDfmH1LJfsNDIWjeE',
    },
  };

  let urlencoded = new URLSearchParams();
  urlencoded.append('uid', uid);
  urlencoded.append('type', 'getDataProfile');

  return new Promise((resolve, reject) => {
    axios
      .post(query, urlencoded, conf)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error.response);
      });
  });
}

const editDataProfile = data =>
  petitionP(data)
    .then(r => {
      console.log(r);
      if (r.status === 200) {
        return r.data[0];
      }
    })
    .catch(error => {
      console.log(error.response);
    });

function* sagaGetDataPeticion(values) {
  console.log('llegue aqui');
  console.log('llegue aqui con estos valores', values);
  try {
    const result = yield call(editDataProfile, values.parameters);
    yield put(ActionsPeticion.SET_DATA_PETICION(result));
  } catch (error) {
    console.log(error);
  }
}

export default function* SagasPeticion() {
  yield takeEvery(ActionsPeticion.GET_DATA_PETICION, sagaGetDataPeticion);
}
