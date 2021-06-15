import * as ActionPeticion from '../actions/actionPeticion';

const statePeticion = {
  resultado: null,
};

export const reducerPeticion = (state = statePeticion, action) => {
  switch (action.type) {
    case ActionPeticion.GET_DATA_PETICION:
      return {
        ...state,
      };
    case ActionPeticion.SET_DATA_PETICION:
      return {
        ...state,
        resultado: {...action.resultado},
      };
    default:
      return state;
  }
};
