export const GET_DATA_PETICION = 'GET_DATA_PETICION';
export const SET_DATA_PETICION = 'SET_DATA_PETICION';

export const actionSendPeticion = (parameters) => ({
  type: GET_DATA_PETICION,
  parameters,
});

export const actionSaveDataPetition = data => ({
  type: SET_DATA_PETICION,
  data,
});
