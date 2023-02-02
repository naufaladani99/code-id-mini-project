import * as ActionType from '../Constants/ProgConstant'

export const GetProgRequest = () => ({
    type: ActionType.GET_PROG_REQUEST

})

export const GetProgSuccess = (payload) =>({
    type: ActionType.GET_PROG_SUCCESS,
    payload
})

export const GetProgFailed = (payload) => ({
    type:ActionType.GET_PROG_FAILED,
    payload
})

export const GetOneProgRequest = (payload) => ({
    type: ActionType.GETONE_PROG_REQUEST,
    payload

})

export const GetOneProgSuccess = (payload) =>({
    type: ActionType.GETONE_PROG_SUCCESS,
    payload
})

export const GetOneProgFailed = (payload) => ({
    type:ActionType.GETONE_PROG_FAILED,
    payload
})