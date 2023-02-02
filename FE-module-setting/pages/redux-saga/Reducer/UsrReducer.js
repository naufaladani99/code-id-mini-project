import * as ActionType from '../Constants/UsrConstant';
import { getCookie } from 'cookies-next';

const getFromLocalStorage = (key) => {
  if (!key || typeof window === 'undefined') {
    return '';
  }
  return getCookie(key);
};

const INIT_STATE = {
  UserProfile: getFromLocalStorage('profile')
    ? JSON.parse(getCookie('profile'))
    : null,
  UserSignup: null,
  message: '',
  isLoading: false,
};

const UsrReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_SIGNIN_REQUEST:
      return { ...state, isLoading: true };
    case ActionType.GET_SIGNIN_SUCCESS:
      return GetSigninSuccess(state, action);
    case ActionType.ADD_SIGNUP_REQUEST:
      return { ...state, isLoading: true };
    case ActionType.ADD_SIGNUP_SUCCESS:
      return AddSignupSuccess(state, action);
    case ActionType.POST_SIGNOUT_REQUEST:
      return { ...state, isLoading: true };
    case ActionType.POST_SIGNOUT_SUCCESS:
      return PushSignoutSuccess(state, action);
    case ActionType.MESSAGE_NOTIFICATION:
      return ShowMessage(state, action);
    default:
      return state;
  }
};

const GetSigninSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    UserProfile: action.payload,
    message: '',
  };
};

const PushSignoutSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    UserProfile: null,
    message: '',
  };
};

const AddSignupSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    UserSignup: action.payload,
  };
};

const ShowMessage = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    message: payload.message,
  };
};

export default UsrReducer;
