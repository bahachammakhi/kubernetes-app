import { takeLatest, call, put, all } from 'redux-saga/effects';
import createStonesActions, { createStonesTypes } from '../../redux/Stones/createStones';
import { Response } from '../../redux/login/index';
import { postStones } from '../../requests';
import { AnyAction } from 'redux';

function* createStone(action: AnyAction) {
  try {
    const response: Response = yield call(postStones, action.formData);
    if (response.code >= 200 && response.code < 400) {
     yield put(createStonesActions.createStonesSuccess({ data: response.data }));
     } else {
     yield put(
     createStonesActions.createStonesFailure({
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
  yield takeLatest(createStonesTypes.createStonesRequest, createStone);
}
