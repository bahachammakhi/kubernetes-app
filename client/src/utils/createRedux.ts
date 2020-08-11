import { isEmpty, map, forEach, findKey, keys, isArray } from 'lodash';
import { AnyAction } from 'redux';

type Action<T extends object> = {
  [key in keyof T]: (...args: object[]) => { type: string; [key: string]: any };
};

type Types<T extends object> = { [key in keyof T]: string };

// Function to Create A type
function createType(action: string) {
  //Split the part with UppCase to convert it
  const actionParts = action.trim().split(/(?=[A-Z])/);
  const formatedParts = map(actionParts, (part: any) => {
    // if Empty Throw an error
    if (isEmpty(part) || /\s/.test(part)) {
      throw new Error(`Action ${action} invalid name`);
    }
    // return part Uppercased
    return part.toUpperCase();
  });
  if (isEmpty(formatedParts)) {
    throw new Error(`Action ${action} invalid name`);
  }
  // make it on the form APP_APP
  return formatedParts.join('_');
}
//create Action function
function createAction(type: string) {
  return (...args: any) => {
    // check for errors
    const allArgs = args.reduce((result: object, arg: any) => {
      if (typeof arg !== 'object' && arg !== undefined) {
        throw new Error(`Action arguments is expected be an object but got ${typeof arg}`);
      }
      if (isArray(arg)) {
        throw new Error('Action arguments is expected be an object but got array');
      }
      return { ...result, ...arg };
    }, {});
    // return all actions
    return {
      type,
      ...allArgs,
    };
  };
}

//Create actions
function createActions<T extends object>(...params: string[]): { actions: Action<T>; types: Types<T> } {
  const actions: any = {};
  const types: any = {};
  forEach(params, (action: any) => {
    // Create type for every actions
    const type = createType(action);
    // add type to array of types
    types[action] = type;
    // add action to an array of actions
    actions[action] = createAction(type);
  });
  return { actions, types };
}
//Create reducer
function createReducer<
  T,
  P extends { [key: string]: (state: T, action: AnyAction) => T },
  K extends Types<P>
>(INITIAL_STATE: T, actions: P, types: K) {
  return (state = INITIAL_STATE, action: AnyAction) => {
    //Return the first key that responds to type === action.type
    const checkAction = findKey(types, (type: any) => type === action.type);
    if (checkAction) {
      return actions[checkAction](state, action);
    }
    return state;
  };
}

type CreateReduxReturn<
  T,
  P extends { [key: string]: (state: T, action: AnyAction) => T }
> = T extends undefined
  ? { actions: Action<P>; types: Types<P> }
  : {
      actions: Action<P>;
      types: Types<P>;
      reducer: (state: T | undefined, action: AnyAction) => T;
    };

export default function createRedux<T, P extends { [key: string]: (state: T, action: AnyAction) => T }>(
  INITIAL_STATE: T,
  reqActions: P
): CreateReduxReturn<T, P> {
  // put actions  keys on array !
  const actionsNames = keys(reqActions);
  if (actionsNames.length === 0) {
    return { actions: {}, types: {} } as any;
  }
  const { actions, types } = createActions<P>(...actionsNames);
  if (INITIAL_STATE === undefined) {
    return { actions, types } as any;
  }
  // created reducer
  const reducer = createReducer(INITIAL_STATE, reqActions, types);
  return { actions, types, reducer } as any;
}
