import { takeEvery, call, put, all } from 'redux-saga/effects';

//    import { setAuthorizationBearer } from '../requests';
import startupActions, { startupTypes } from '../redux/startup';

function* startup() {
	try {
		if (localStorage.getItem('token')) {
			//  setAuthorizationBearer(localStorage.getItem('token'));
			// yield put(console.log('startup'));
			console.log('test');
		}
		yield put(startupActions.startupEnd());
	} catch (e) {
		console.log('eureur');
		yield put(startupActions.startupEnd());
	}
}

export default function*() {
	yield takeEvery(startupTypes.startup, startup);
}
