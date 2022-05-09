import axios from 'axios';

import { FETCH_SERIES_FROM_API, saveSeries } from 'src/action/series';

// const axiosInstance = axios.create(
//   {
//     baseURL: 'http://localhost:8000/api/v1',

//   },
// );

const apiMiddlware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SERIES_FROM_API:
      axios
        .get('https://www.omdbapi.com/?i=tt3896198&apikey=190bffa9&t=Dark')
        .then(
          (response) => {
            console.log(response);
            store.dispatch(saveSeries(response.data));
          },

        );
      next(action);
      break;
    default:
      next(action);
  }
};

export default apiMiddlware;
