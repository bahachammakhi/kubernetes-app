import { LoginState } from './index';
import createRedux from '../../utils/createRedux';
import { AnyAction } from 'redux';

const INITIAL_STATE: LoginState = {
  fetching: false,
  data: null,
  error: '',
  loaded: false,
  name: '',
};

const loginRequest = (state: LoginState, action: AnyAction) => {
  return {
    ...state,
    error: '',
    fetching: true,
    loaded: false,
    name: action.name,
  };
};
const loginSuccess = (state: LoginState, action: AnyAction) => {
  console.log('action', action);
  return {
    ...state,
    fetching: false,
    data: action.data,
    loaded: true,
    name: action.name,
  };
};
const loginFailure = (state: LoginState, action: AnyAction) => ({
  ...state,
  error: action.error,
  fetching: false,
  data: null,
  loaded: false,
  name: action.name,
});
const logout = (state: LoginState, action: AnyAction) => INITIAL_STATE;
const { actions, types: loginTypes, reducer } = createRedux(INITIAL_STATE, {
  logout,
  loginFailure,
  loginRequest,
  loginSuccess,
});

export default actions;
export { loginTypes, reducer };
