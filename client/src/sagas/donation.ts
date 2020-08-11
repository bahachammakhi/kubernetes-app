import { takeLatest, call, put, all } from 'redux-saga/effects';
import donationActions, { donationTypes } from '../redux/Donations/donations';
import { Response } from '../redux/login/index';
import { getDonations, setAuthorizationBearer } from '../requests';
import { AnyAction } from 'redux';

function* donation(action: AnyAction) {
  console.log('action', action);
  try {
    const response: Response = yield call(getDonations);

    if (response.code >= 200 && response.code < 400) {
      yield put(donationActions.donationSuccess({ data: response.data }));
    } else {
      yield put(donationActions.donationFailure({ error: response.message, data: null, fetching: false }));
    }
  } catch (e) {
    console.log(e);
    yield put(donationActions.donationFailure({ error: e.data.message, data: null, fetching: false }));
  }
}

export default function*() {
  yield takeLatest(donationTypes.donationRequest, donation);
}
