import createRedux from '../../utils/createRedux';
import { AnyAction } from 'redux';
export interface createStonesState {
  fetching: boolean;
  data: any | null;
  error: string;
  loaded: boolean;
}

const INITIAL_STATE: createStonesState = {
  fetching: false,
  data: null,
  error: '',
  loaded: false,
};

const createStonesRequest = (state: createStonesState, action: AnyAction) => {
  return {
    ...state,
    error: '',
    fetching: true,
    loaded: false,
  };
};
const createStonesSuccess = (state: createStonesState, action: AnyAction) => {
  return {
    ...state,
    fetching: false,
    data: action.data,
    loaded: true,
  };
};
const createStonesFailure = (state: createStonesState, action: AnyAction) => ({
  ...state,
  error: action.error,
  fetching: false,
  data: null,
  loaded: false,
});
const { actions, types: createStonesTypes, reducer } = createRedux(INITIAL_STATE, {
  createStonesFailure,
  createStonesSuccess,
  createStonesRequest,
});

export default actions;
export { createStonesTypes, reducer };
