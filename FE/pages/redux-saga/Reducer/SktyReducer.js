import * as ActionType from '../Constants/SktyConstant'

const INIT_STATE = {
    sktys:[],
    skty:[]
}

const SktyReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_SKTY_REQUEST:
            return {...state}
        case ActionType.GET_SKTY_SUCCESS:
            return GetSktySuccessed(state, action)
        case ActionType.GETONE_SKTY_REQUEST:
            return {...state}
        case ActionType.GETONE_SKTY_SUCCESS:
            return GetOneSktySuccessed(state, action)
        default:
            return state
    }
}

const GetSktySuccessed = (state, action) => {
    return {
        ...state,
        sktys: action.type
    }
}

const GetOneSktySuccessed = (state, action) => {
    return {
        ...state,
        skty: action.type
    }
}

export default SktyReducer