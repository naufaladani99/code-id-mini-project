import * as ActionType from "../Constants/BootcampConstant";

const INIT_STATE = {
  ListBootcamp: [],
  ListIdBootcamp: [],
  listReview: [],
};

//program entity getall
const bootcampReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_BOOTCAMP_REQUEST:
      return state;
    case ActionType.GET_BOOTCAMP_SUCCES:
      return getDataBootcamp(state, action);
    case ActionType.GET_ID_BOOTCAMP_REQUEST:
      return state;
    case ActionType.GET_ID_BOOTCAMP_SUCCES:
      return getIdDataBootcamp(state, action);
    case ActionType.GET_REVIEW_REQUEST:
      return state;
    case ActionType.GET_REVIEW_SUCCES:
      return getDataReview(state, action);
    default:
      return state;
  }
};

const getDataBootcamp = (state, action) => {
  return {
    ...state,
    ListBootcamp: action.payload,
  };
};

const getIdDataBootcamp = (state, action) => {
  return {
    ...state,
    ListIdBootcamp: action.payload,
  };
};

const getDataReview = (state, action) => {
  return {
    ...state,
    listReview: action.payload,
  };
};

export default bootcampReducer;
