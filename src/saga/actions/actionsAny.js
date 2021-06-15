export const GET_LIST_NEWS = 'GET_LIST_NEWS';
export const GET_NEWS_DONE = 'GET_NEWS_DONE';

//se realiza la consulta
export const actionGetNews = () => ({
  type: GET_LIST_NEWS,
});

//se guadar los datos de la consulta
export const actionSaveNews = news => ({
  type: GET_NEWS_DONE,
  news,
});
