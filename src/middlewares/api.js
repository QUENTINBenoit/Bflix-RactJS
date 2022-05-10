import axios from 'axios';

import { FETCH_SERIES_FROM_API, saveSeries } from 'src/action/series';
import { LOGIN_USER, saveUser } from 'src/action/user';

const axiosInstance = axios.create(
  {
    baseURL: 'http://localhost:8000/api/',
    // baseURL: 'https://www.omdbapi.com/?i=tt3896198&apikey=190bffa9&t=',
    // 'api/login_check'
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
    }
      next(action);
      break;
    case FETCH_SERIES_FROM_API: {
      const { token } = store.getState();
      console.log('TOKEN ', token);
      axiosInstance
        .get('v1/tvshows/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(
          (response) => {
            console.log(response);
            store.dispatch(saveSeries(response));
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
