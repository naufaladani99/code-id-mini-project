import * as ActionType from '../Constants/EmpConstant'

export const GetEmpRequest = () => ({
    type: ActionType.GET_EMP_REQUEST

})

export const GetEmpSuccess = (payload) =>({
    type: ActionType.GET_EMP_SUCCESS,
    payload
})

export const GetEmpFailed = (payload) => ({
    type:ActionType.GET_EMP_FAILED,
    payload
})

export const GetOneEmpRequest = (payload) => ({
    type: ActionType.GETONE_EMP_REQUEST,
    payload

})

export const GetOneEmpSuccess = (payload) =>({
    type: ActionType.GETONE_EMP_SUCCESS,
    payload
})

export const GetOneEmpFailed = (payload) => ({
    type:ActionType.GETONE_EMP_FAILED,
    payload
})