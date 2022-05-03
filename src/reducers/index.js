import { TOGGLE_SETTINGS } from 'src/action';

const initialState = {
  isSettingClose: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_SETTINGS:
      return {
        ...state,
        isSettingClose: !state.isSettingClose,
      };
    default:
      return state;
  }
};

export default reducer;
