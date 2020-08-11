import { combineReducers, Reducer } from 'redux';
import { reducer as donation } from './Donations/donations';
import { reducer as startup } from './startup';
import { reducer as login } from './login/login';
import { reducer as loginRequest } from './login/loginRequest';
import { reducer as contact } from './contact/contactRequest';
import { reducer as createDonations } from './Donations/createDonations';
import { reducer as deleteDonation } from './Donations/deleteDonation';
import { reducer as createStone } from './Stones/createStones';

export default combineReducers({
  createStone,
  startup,
  login,
  contact,
  loginRequest,
  donation,
  createDonations,
  deleteDonation,
});
