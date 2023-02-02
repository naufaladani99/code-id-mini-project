import * as ActionType from '../Constants/SkteConstant'

const INIT_STATE = {
    sktes:[],
    skte:[]
}

const SkteReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_SKTE_REQUEST:
            return {...state}
        case ActionType.GET_SKTE_SUCCESS:
            return GetSkteSuccessed(state, action)
        case ActionType.GETONE_SKTE_REQUEST:
            return {...state}
        case ActionType.GETONE_SKTE_SUCCESS:
            return GetOneSkteSuccessed(state, action)
        default:
            return state
    }
}

const GetSkteSuccessed = (state, action) => {
    return {
        ...state,
        sktes: action.type
    }
}

const GetOneSkteSuccessed = (state, action) => {
    return {
        ...state,
        skte: action.type
    }
}

export default SkteReducer