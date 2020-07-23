import { GET_USER_INFO } from './types/user';

export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'INCREMENT_IF_ODD':
      return state % 2 !== 0 ? state + 1 : state;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export function userInfo(state = {}, action) {
  switch (action.type) {
    case 'GET_USER_INFO':
      return { ...state, ...action.payload };
    case 'REST_USER_INFO':
      return { };
    default:
      return state;
  }
}
