import createRedux from '../../utils/createRedux';
import { AnyAction } from 'redux';
export interface createDonationsState {
  fetching: boolean;
  data: any | null;
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
const INITIAL_STATE: createDonationsState = {
  fetching: false,
  data: null,
  error: '',
  loaded: false,
};

const createDonationsRequest = (state: createDonationsState, action: AnyAction) => {
  return {
    ...state,
    error: '',
    fetching: true,
    loaded: false,
  };
};
const createDonationsSuccess = (state: createDonationsState, action: AnyAction) => {
  console.log('action', action);
  return {
    ...state,
    fetching: false,
    data: action.data,
    loaded: true,
  };
};
const createDonationsFailure = (state: createDonationsState, action: AnyAction) => ({
  ...state,
  error: action.error,
  fetching: false,
  data: null,
  loaded: false,
});
const { actions, types: createDonationsTypes, reducer } = createRedux(INITIAL_STATE, {
  createDonationsFailure,
  createDonationsSuccess,
  createDonationsRequest,
});

export default actions;
export { createDonationsTypes, reducer };
