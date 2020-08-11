import { takeLatest, call, put, all } from 'redux-saga/effects';
import deleteDonationActions, { deleteDonationTypes } from '../redux/Donations/deleteDonation';
import { Response } from '../redux/login/index';
import { delDonation, setAuthorizationBearer } from '../requests';
import { AnyAction } from 'redux';

function* deleteDonation(action: AnyAction) {
  console.log('action', action);
  try {
    const response: any = yield call(delDonation, action.Data);
    console.log('response', response);
    if (response.code >= 200 && response.code < 400) {
      yield put(deleteDonationActions.deleteDonationSuccess({ data: response.data }));
    } else {
      yield put(
        deleteDonationActions.deleteDonationFailure({
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
  yield takeLatest(deleteDonationTypes.deleteDonationRequest, deleteDonation);
}
