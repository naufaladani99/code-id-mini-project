import * as ActionType from '../Constants/TaapConstant'

export const GetTaapRequest = () => ({
    type: ActionType.GET_TAAP_REQUEST

})

export const GetTaapSuccess = (payload) =>({
    type: ActionType.GET_TAAP_SUCCESS,
    payload
})

export const GetTaapFailed = (payload) => ({
    type:ActionType.GET_TAAP_FAILED,
    payload
})

export const GetTaapUserRequest = () => ({
    type: ActionType.GET_TAAPUSER_REQUEST

})

export const GetTaapUserSuccess = (payload) =>({
    type: ActionType.GET_TAAPUSER_SUCCESS,
    payload
})

export const GetTaapUserFailed = (payload) => ({
    type:ActionType.GET_TAAPUSER_FAILED,
    payload
})

export const DelTaapRequest = (payload) =>({
    type:ActionType.DEL_TAAP_REQUEST,
    payload
})

export const DelTaapSuccess = (payload) => ({
    type:ActionType.DEL_TAAP_SUCCESS,
    payload
})

export const DelTaapFailed =(payload)=>({
    type:ActionType.DEL_TAAP_FAILED,
    payload
})

export const GetOneTaapRequest = (payload) => ({
    type: ActionType.GETONE_TAAP_REQUEST,
    payload

})

export const GetOneTaapSuccess = (payload) =>({
    type: ActionType.GETONE_TAAP_SUCCESS,
    payload
})

export const GetOneTaapFailed = (payload) => ({
    type:ActionType.GETONE_TAAP_FAILED,
    payload
})

export const AddTaapRequest = (payload) =>({
    type:ActionType.ADD_TAAP_REQUEST,
    payload
})

export const AddTaapSuccess = (payload) => ({
    type:ActionType.ADD_TAAP_SUCCESS,
    payload
})

export const AddTaapFailed =(payload)=>({
    type:ActionType.ADD_TAAP_FAILED,
    payload
})

export const AddTaapApplyRequest = (payload) =>({
    type:ActionType.ADD_TAAPAPPLY_REQUEST,
    payload
})

export const AddTaapApplySuccess = (payload) => ({
    type:ActionType.ADD_TAAPAPPLY_SUCCESS,
    payload
})

export const AddTaapApplyFailed =(payload)=>({
    type:ActionType.ADD_TAAPAPPLY_FAILED,
    payload
})

export const EditTaapRequest = (payload) =>({
    type:ActionType.EDIT_TAAP_REQUEST,
    payload
})

export const EditTaapSuccess = (payload) => ({
    type:ActionType.EDIT_TAAP_SUCCESS,
    payload
})

export const EditTaapFailed =(payload)=>({
    type:ActionType.EDIT_TAAP_FAILED,
    payload
})