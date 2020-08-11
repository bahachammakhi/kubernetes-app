import React, { useReducer } from 'react';
import createRedux from '../utils/createRedux';
import { pickBy } from 'lodash';
import { AnyAction } from 'redux';
// Change this from the requests folder later
interface Response<T> {
  code: number;
  data?: T;
  errors?: string[];
  message?: string;
}
interface IApiState<T> {
  fetching: boolean;
  error: string;
  data: T;
  errors: any[];
}

export type ApiComponentProps<R extends { [key: string]: (...args: any[]) => Promise<Response<any>> }> = {
  [K in keyof R]: {
    fetching: boolean;
    error: string;
    data: any;
    errors: any[];
    call: R[K];
  };
};
function useApiState<Fn extends (...args: any[]) => Promise<Response<any>>, T = any>(
  fn: Fn
): IApiState<T> & { call: (...params: Parameters<Fn>) => Promise<void> } {
  const INITIAL_STATE: IApiState<T> = {
    fetching: false,
    error: '',
    data: {},
    success: null,
    errors: [],
  } as any;

  const fetching = (state: IApiState<T>) => ({
    ...state,
    fetching: true,
    success: null,
    error: '',
  });
  const success = (state: IApiState<T>, { data }: AnyAction) => ({
    ...state,
    data,
    success: true,
    fetching: false,
  });
  const failure = (state: IApiState<T>, { error, errors }: AnyAction) => ({
    ...state,
    error,
    errors,
    success: false,
    fetching: false,
  });

  const { actions, reducer } = createRedux(INITIAL_STATE, {
    fetching,
    success,
    failure,
  });

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  async function call(...params: Parameters<Fn>) {
    try {
      const apiParams = params.map((param: any) => {
        if (typeof param === 'object') {
          return pickBy(param, val => val !== undefined);
        }
        return param;
      });

      dispatch(actions.fetching());

      const response = await fn(...apiParams);
      if (response.code >= 200 && response.code < 400 && response.data) {
        dispatch(actions.success({ data: response.data }));
      } else if (response.code === 401) {
        dispatch(actions.failure({ error: 'UNAUTHORIZED' }));
      } else {
        const errors: { error?: string; errors?: any[] } = {};
        if (response.message) errors.error = response.message;
        if (response.errors) errors.errors = response.errors;
        dispatch(actions.failure(errors));
      }
    } catch (e) {
      // Error not known display check your connection
      dispatch(
        actions.failure({
          error: 'Please check your connection',
        })
      );
    }
  }

  return { ...state, call };
}

function useApi(requests: any) {
  const calls: any = {};
  const callsnames = Object.keys(requests);
  const { length } = callsnames;

  for (let i = 0; i < length; i += 1) {
    const key = callsnames[i];
    // eslint-disable-next-line
    calls[key] = useApiState(requests[key]);
  }

  return { ...calls };
}

export default useApi;
