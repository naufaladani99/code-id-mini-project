import * as ActionType from '../Constants/ContConstant'

export const GetContRequest = () => ({
    type: ActionType.GET_CONT_REQUEST

})

export const GetContSuccess = (payload) =>({
    type: ActionType.GET_CONT_SUCCESS,
    payload
})

export const GetContFailed = (payload) => ({
    type:ActionType.GET_CONT_FAILED,
    payload
})

export const GetOneContRequest = (payload) => ({
    type: ActionType.GETONE_CONT_REQUEST,
    payload

})

export const GetOneContSuccess = (payload) =>({
    type: ActionType.GETONE_CONT_SUCCESS,
    payload
})

export const GetOneContFailed = (payload) => ({
    type:ActionType.GETONE_CONT_FAILED,
    payload
})