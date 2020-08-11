import createRedux from '../../utils/createRedux';
import { AnyAction } from 'redux';
export interface contactState {
  fetching: boolean;
  data: Data | null;
  error: string;
  loaded: boolean;
}
export interface Data {
  token: {
    tokenType: string;
    accessToken: string;
    expiresIn: string;
    refreshToken: string;
  };
  user: {
    email: string;
    password: string;
    uniqId: string;
    _id: string;
  };
}
const INITIAL_STATE: contactState = {
  fetching: false,
  data: null,
  error: '',
  loaded: false,
};

const contactRequest = (state: contactState, action: AnyAction) => {
  return {
    ...state,
    error: '',
    fetching: true,
    loaded: false,
  };
};
const contactSuccess = (state: contactState, action: AnyAction) => {
  console.log('action', action);
  return {
    ...state,
    fetching: false,
    data: action.data,
    loaded: true,
  };
};
const contactFailure = (state: contactState, action: AnyAction) => ({
  ...state,
  error: action.error,
  fetching: false,
  data: null,
  loaded: false,
});
const { actions, types: contactTypes, reducer } = createRedux(INITIAL_STATE, {
  contactFailure,
  contactSuccess,
  contactRequest,
});

export default actions;
export { contactTypes, reducer };
