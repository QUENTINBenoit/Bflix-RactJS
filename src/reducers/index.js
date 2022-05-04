import { TOGGLE_SETTINGS, VIEWS_SETTINGS } from 'src/action';

const initialState = {
  isSettingClose: true,
  isSettingsCloseViews: true,
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
    default:
      return state;
  }
};

export default reducer;
