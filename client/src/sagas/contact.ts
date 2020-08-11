import { takeLatest, call, put, all } from 'redux-saga/effects';
import contactActions, { contactTypes } from '../redux/contact/contactRequest';
import { Response } from '../redux/login/index';
import { createContact, setAuthorizationBearer } from '../requests';
import { AnyAction } from 'redux';

function* login(action: AnyAction) {
  console.log('action', action);
  try {
    const response: Response = yield call(createContact, action.form);
    console.log('response', response);
    if (response.code >= 200 && response.code < 400) {
      localStorage.setItem('token', (response.data as any).token);
      setAuthorizationBearer(response.data.token as any);
      yield put(contactActions.contactSuccess({ data: response.data }));
    } else {
      yield put(contactActions.contactFailure({ error: response.message, data: null, fetching: false }));
    }
  } catch (e) {
    console.log(e);
    yield put(contactActions.contactFailure({ error: e.data.message, data: null, fetching: false }));
  }
}

export default function*() {
  yield takeLatest(contactTypes.contactRequest, login);
}
