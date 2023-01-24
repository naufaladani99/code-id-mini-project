import * as ActionType from '../Constants/JopoConstant'

export const GetJopoRequest = () => ({
    type: ActionType.GET_JOPO_REQUEST

})

export const GetJopoSuccess = (payload) =>({
    type: ActionType.GET_JOPO_SUCCESS,
    payload
})

export const GetJopoFailed = (payload) => ({
    type:ActionType.GET_JOPO_FAILED,
    payload
})

export const DelJopoRequest = (payload) =>({
    type:ActionType.DEL_JOPO_REQUEST,
    payload
})

export const DelJopoSuccess = (payload) => ({
    type:ActionType.DEL_JOPO_SUCCESS,
    payload
})

export const DelJopoFailed =(payload)=>({
    type:ActionType.DEL_JOPO_FAILED,
    payload
})

export const GetOneJopoRequest = (payload) => ({
    type: ActionType.GETONE_JOPO_REQUEST,
    payload

})

export const GetOneJopoSuccess = (payload) =>({
    type: ActionType.GETONE_JOPO_SUCCESS,
    payload
})

export const GetOneJopoFailed = (payload) => ({
    type:ActionType.GETONE_JOPO_FAILED,
    payload
})

export const AddJopoRequest = (payload) =>({
    type:ActionType.ADD_JOPO_REQUEST,
    payload
})

export const AddJopoSuccess = (payload) => ({
    type:ActionType.ADD_JOPO_SUCCESS,
    payload
})

export const AddJopoFailed =(payload)=>({
    type:ActionType.ADD_JOPO_FAILED,
    payload
})

export const EditJopoRequest = (payload) =>({
    type:ActionType.EDIT_JOPO_REQUEST,
    payload
})

export const EditJopoSuccess = (payload) => ({
    type:ActionType.EDIT_JOPO_SUCCESS,
    payload
})

export const EditJopoFailed =(payload)=>({
    type:ActionType.EDIT_JOPO_FAILED,
    payload
})