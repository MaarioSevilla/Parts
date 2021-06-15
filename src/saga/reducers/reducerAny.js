import * as ActionsAny from '../actions/actionsAny';

const stateNews = {
  newss: null,
};

export const reducerNews = (state = stateNews, action) => {
  switch (action.type) {
    case ActionsAny.GET_LIST_NEWS:
      return {
        ...state,
      };
    case ActionsAny.GET_NEWS_DONE:
      return {
        ...state,
        newss: {...action.news},
      };
    default:
      return state;
  }
};
