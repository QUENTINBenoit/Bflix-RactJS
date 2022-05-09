import { TOGGLE_SETTINGS, VIEWS_SETTINGS } from 'src/action';
import { FETCH_SERIES_FROM_API, SAVE_SERIES } from 'src/action/series';

const initialState = {
  isSettingClose: true,
  isSettingsCloseViews: true,
  series: [],
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
    case FETCH_SERIES_FROM_API:
      return {
        ...state,
        // series: 'benoit',
      };
    case SAVE_SERIES:
      return {
        ...state,
        series: action.series,
      };
    default:
      return state;
  }
};

export default reducer;
