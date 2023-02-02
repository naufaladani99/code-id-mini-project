import * as ActionType from '../Constants/SkteConstant'

export const GetSkteRequest = () => ({
    type: ActionType.GET_SKTE_REQUEST

})

export const GetSkteSuccess = (payload) =>({
    type: ActionType.GET_SKTE_SUCCESS,
    payload
})

export const GetSkteFailed = (payload) => ({
    type:ActionType.GET_SKTE_FAILED,
    payload
})

export const GetOneSkteRequest = (payload) => ({
    type: ActionType.GETONE_SKTE_REQUEST,
    payload

})

export const GetOneSkteSuccess = (payload) =>({
    type: ActionType.GETONE_SKTE_SUCCESS,
    payload
})

export const GetOneSkteFailed = (payload) => ({
    type:ActionType.GETONE_SKTE_FAILED,
    payload
})