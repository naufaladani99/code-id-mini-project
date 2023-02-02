import * as ActionType from '../Constants/SktyConstant'

export const GetSktyRequest = () => ({
    type: ActionType.GET_SKTY_REQUEST

})

export const GetSktySuccess = (payload) =>({
    type: ActionType.GET_SKTY_SUCCESS,
    payload
})

export const GetSktyFailed = (payload) => ({
    type:ActionType.GET_SKTY_FAILED,
    payload
})

export const GetOneSktyRequest = (payload) => ({
    type: ActionType.GETONE_SKTY_REQUEST,
    payload

})

export const GetOneSktySuccess = (payload) =>({
    type: ActionType.GETONE_SKTY_SUCCESS,
    payload
})

export const GetOneSktyFailed = (payload) => ({
    type:ActionType.GETONE_SKTY_FAILED,
    payload
})