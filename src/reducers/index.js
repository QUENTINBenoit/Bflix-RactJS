import { TOGGLE_SETTINGS, VIEWS_SETTINGS } from 'src/action';
import { SAVE_SERIES } from 'src/action/series';
import { CHANGE_USER_FIELD, SAVE_USER } from 'src/action/user';

const initialState = {
  isSettingClose: true,
  isSettingsCloseViews: true,
  series: [],
  email: '',
  password: '',
  logged: false,
  name: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_SETTINGS:
      return {
        ...state,
        isSettingClose: !state.isSettingClose,
      };
    case VIEWS_SETTINGS:
      return {
        ...state,
        isSettingsCloseViews: !state.isSettingsCloseViews,
      };
    case SAVE_SERIES:
      return {
        ...state,
        series: action.series,
      };
    case CHANGE_USER_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };

    case SAVE_USER:
      return {
        ...state,
        logged: true,
        name: action.data.username,
        email: '',
        password: '',
      };

    default:
      return state;
  }
};

export default reducer;
