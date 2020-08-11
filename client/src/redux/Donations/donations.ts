import createRedux from '../../utils/createRedux';
import { AnyAction } from 'redux';
export interface donationState {
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
const INITIAL_STATE: donationState = {
  fetching: false,
  data: null,
  error: '',
  loaded: false,
};

const donationRequest = (state: donationState, action: AnyAction) => {
  return {
    ...state,
    error: '',
    fetching: true,
    loaded: false,
  };
};
const donationSuccess = (state: donationState, action: AnyAction) => {
  console.log('action', action);
  return {
    ...state,
    fetching: false,
    data: action.data,
    loaded: true,
  };
};
const donationFailure = (state: donationState, action: AnyAction) => ({
  ...state,
  error: action.error,
  fetching: false,
  data: null,
  loaded: false,
});
const { actions, types: donationTypes, reducer } = createRedux(INITIAL_STATE, {
  donationFailure,
  donationSuccess,
  donationRequest,
});

export default actions;
export { donationTypes, reducer };
