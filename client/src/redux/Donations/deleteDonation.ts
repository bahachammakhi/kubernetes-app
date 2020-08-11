import createRedux from '../../utils/createRedux';
import { AnyAction } from 'redux';
export interface deleteDonationState {
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
const INITIAL_STATE: deleteDonationState = {
  fetching: false,
  data: null,
  error: '',
  loaded: false,
};

const deleteDonationRequest = (state: deleteDonationState, action: AnyAction) => {
  return {
    ...state,
    error: '',
    fetching: true,
    loaded: false,
  };
};
const deleteDonationSuccess = (state: deleteDonationState, action: AnyAction) => {
  console.log('action', action);
  return {
    ...state,
    fetching: false,
    data: action.data,
    loaded: true,
  };
};
const deleteDonationFailure = (state: deleteDonationState, action: AnyAction) => ({
  ...state,
  error: action.error,
  fetching: false,
  data: null,
  loaded: false,
});
const { actions, types: deleteDonationTypes, reducer } = createRedux(INITIAL_STATE, {
    deleteDonationFailure,
    deleteDonationSuccess,
    deleteDonationRequest,
});

export default actions;
export { deleteDonationTypes, reducer };
