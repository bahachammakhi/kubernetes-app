import createRedux from '../../utils/createRedux';
import { AnyAction } from 'redux';
interface state {
  modalOpened: boolean;
  modalSignup: boolean;
}

const INITIAL_STATE = {
  modalOpened: false,
  modalSignup: false,
};

const modalHandler = (state: state, action: AnyAction) => {
  // switch (action.name) {
  //   case 'login': {
  //     return {
  //       ...state,
  //       modalOpened: !state.modalOpened,
  //     };
  //   }
  //   case 'signup': {
  //     return {
  //       ...state,
  //       modalSignup: !state.modalSignup,
  //     };
  //   }
  //   default:
  //     return {
  //       ...state,
  //     };
  // }

  if (action.name === 'login') {
    return {
      ...state,
      modalOpened: !state.modalOpened,
    };
  } else if (action.name === 'signup') {
    return {
      ...state,
      modalSignup: !state.modalSignup,
    };
  } else {
    return {
      ...state,
    };
  }
};

const { actions, types: loginTypes, reducer } = createRedux(INITIAL_STATE, {
  modalHandler,
});

export default actions;
export { loginTypes, reducer };
