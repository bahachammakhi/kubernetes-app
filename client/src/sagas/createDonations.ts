import { takeLatest, call, put, all } from 'redux-saga/effects';
import createDonationsActions, { createDonationsTypes } from '../redux/Donations/createDonations';
import { Response } from '../redux/login/index';
import { postDonations, setAuthorizationBearer } from '../requests';
import { AnyAction } from 'redux';

function* createDonations(action: AnyAction) {
  console.log('action', action);
  try {
    const response: any = yield call(postDonations, action.formData);
    console.log('response', response);
    if (response.code >= 200 && response.code < 400) {
      yield put(createDonationsActions.createDonationsSuccess({ data: response.data }));
    } else {
      yield put(
        createDonationsActions.createDonationsFailure({
          error: response.message,
          data: null,
          fetching: false,
        })
      );
    }
  } catch (e) {
    console.log(e);
    // yield put(createDonationsActions.createDonationsFailure({ error: e.data.message, data: null, fetching: false }));
  }
}

export default function*() {
  yield takeLatest(createDonationsTypes.createDonationsRequest, createDonations);
}
