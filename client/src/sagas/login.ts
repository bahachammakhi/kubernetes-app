import { takeLatest, call, put, all } from 'redux-saga/effects';
import loginActions, { loginTypes } from '../redux/login/loginRequest';
import { Response } from '../redux/login/index';
import { loginRequest, setAuthorizationBearer, signupRequest } from '../requests';
import { AnyAction } from 'redux';

function* login(action: AnyAction) {
  console.log('action', action);
  try {
    const response: Response = yield call(
      action.name === 'login' ? loginRequest : signupRequest,
      action.form
    );
    console.log('response', response);
    if (response.code >= 200 && response.code < 400) {
      localStorage.setItem('token', (response.data as any).token);
      setAuthorizationBearer(response.data.token as any);
      yield put(loginActions.loginSuccess({ data: response.data, name: action.name }));
    } else {
      yield put(
        loginActions.loginFailure({ error: response.message, data: null, fetching: false, name: action.name })
      );
    }
  } catch (e) {
    console.log(e);
    yield put(
      loginActions.loginFailure({ error: e.data.message, data: null, fetching: false, name: action.name })
    );
  }
}
function logout() {
  setAuthorizationBearer(null);
  localStorage.removeItem('token');
}
export default function*() {
  yield takeLatest(loginTypes.loginRequest, login);
  yield takeLatest(loginTypes.logout, logout);
}
