import axios from 'axios';

import { FETCH_SERIES_FROM_API, saveSeries } from 'src/action/series';
import { LOGIN_USER, saveUser } from 'src/action/user';

const axiosInstance = axios.create(
  {
    baseURL: 'http://localhost:8000/api/',
  },
);

const apiMiddlware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_USER: {
      const { email, password } = store.getState();
      const username = email;
      console.log({ username, password });
      axiosInstance
        .post('login_check', { username, password })
        .then(
          (response) => {
            console.log(response);
            store.dispatch(saveUser(response));
            axiosInstance.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
          },
        );
      next(action);
      break;
    }
    case FETCH_SERIES_FROM_API: {
      console.log('demmande API');
      axiosInstance
        .get('v1/tvshows/')
        .then(
          (response) => {
            console.log(response.data);
            store.dispatch(saveSeries(response.data));
          },
        )
        .catch((error) => {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default apiMiddlware;
