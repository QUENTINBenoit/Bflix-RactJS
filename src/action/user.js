export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';

export const changeUserField = (value, name) => ({

  type: CHANGE_USER_FIELD,
  value,
  name,

});

export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = () => ({

  type: LOGIN_USER,

});
export const SAVE_USER = 'SAVE_USER';

export const saveUser = (data) => ({
  type: SAVE_USER,
  data,

});
