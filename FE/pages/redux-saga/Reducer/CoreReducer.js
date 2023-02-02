import * as ActionType from '../Constants/CoreConstant'

const INIT_STATE = {
    core:[],
    cores:[]
}

const CoreReducer =(state = INIT_STATE,action) => {
    switch (action.type) {
        case ActionType.GET_CORE_REQUEST:
            return {...state}
        case ActionType.GET_CORE_SUCCESS:
            return GetCoreSuccessed(state,action)
        case ActionType.GETONE_CORE_REQUEST:
            return {...state}
        case ActionType.GETONE_CORE_SUCCESS:
            return GetOneCoreSuccessed(state,action)
        default:
            return state
    }
}

const GetCoreSuccessed = (state, action) => {
    return {
        ...state,
        cores: action.payload
    }
}

const GetOneCoreSuccessed = (state, action) => {
    return {
        ...state,
        core: action.payload
    }
}

export default CoreReducer