import * as actionType from "../Constants/BootcampConstant";

//tabel program entity get all
export const doGetBootcampRequest = (payload) => ({
  type: actionType.GET_BOOTCAMP_REQUEST,
  payload,
});

export const doGetBootcampSucces = (payload) => ({
  type: actionType.GET_BOOTCAMP_SUCCES,
  payload,
});

export const doGetBootcampFailed = (payload) => ({
  type: actionType.GET_BOOTCAMP_FAILED,
  payload,
});
//end program entity getall

//program entity get by id
export const doGetBootcampIdRequest = (payload) => ({
  type: actionType.GET_ID_BOOTCAMP_REQUEST,
  payload,
});

export const doGetBootcampIdSucces = (payload) => ({
  type: actionType.GET_ID_BOOTCAMP_SUCCES,
  payload,
});

export const doGetBootcampIdFailed = (payload) => ({
  type: actionType.GET_BOOTCAMP_FAILED,
  payload,
});
//end program entity get by id

//tabel course review get all
export const doGetReviewRequest = (payload) => ({
  type: actionType.GET_REVIEW_REQUEST,
  payload,
});

export const doGetReviewSucces = (payload) => ({
  type: actionType.GET_REVIEW_SUCCES,
  payload,
});

export const doGetReviewFailed = (payload) => ({
  type: actionType.GET_REVIEW_FAILED,
  payload,
});
//end tabel course review getall
