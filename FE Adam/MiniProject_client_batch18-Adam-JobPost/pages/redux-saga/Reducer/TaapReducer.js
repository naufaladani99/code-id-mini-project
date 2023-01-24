import * as ActionType from '../Constants/TaapConstant'

const INIT_STATE = {
    taaps:[],
    taap:[],
    user:[]
}

const TaapReduce =(state = INIT_STATE,action) => {
    switch (action.type) {
        case ActionType.GET_TAAP_REQUEST:
            return {...state}
        case ActionType.GET_TAAP_SUCCESS:
            return GetTaapSuccessed(state,action)
        case ActionType.GET_TAAPUSER_REQUEST:
            return {...state}
        case ActionType.GET_TAAPUSER_SUCCESS:
            return GetTaapUserSuccessed(state,action)
        case ActionType.GETONE_TAAP_REQUEST:
            return {...state}
        case ActionType.GETONE_TAAP_SUCCESS:
            return GetOneTaapSuccessed(state,action)
        case ActionType.ADD_TAAP_REQUEST:
            return {...state}
        case ActionType.ADD_TAAP_SUCCESS:
            return AddTaapSuccessed(state,action)
        case ActionType.ADD_TAAPAPPLY_REQUEST:
            return {...state}
        case ActionType.ADD_TAAPAPPLY_SUCCESS:
                return AddTaapApplySuccessed(state,action)
        case ActionType.DEL_TAAP_REQUEST:
            return {...state}
        case ActionType.DEL_TAAP_SUCCESS:
            return DelTaapSuccessed(state,action)
        case ActionType.EDIT_TAAP_REQUEST:
            return {...state}
        case ActionType.EDIT_TAAP_SUCCESS:
            return EditTaapSuccessed(state,action)
        default:
            return GetTaapSuccessed(state,action)
    }
}

const GetTaapSuccessed = (state,action) => {
    return {
        ...state,
        taaps: action.payload
    }
}

const GetTaapUserSuccessed = (state,action) => {
    return {
        ...state,
        user: action.payload
    }
}

const GetOneTaapSuccessed = (state,action) =>{
    return {
        ...state,
        taap:action.payload
    }
}

const DelTaapSuccessed = (state,action) => {
    const {payload} = action
    const filterTaap = state.taaps.filter(el=>el.taapId !== Number(payload.taapId))
    return {
        ...state,
        taaps:[...filterTaap]
    }
}

const AddTaapSuccessed = (state,action)=>{
    const {payload} = action
    return{
        ...state,
        taaps:[...state.taaps, payload]
    }
}

const AddTaapApplySuccessed = (state,action)=>{
    const {payload} = action
    return{
        ...state,
        taaps:[...state.taaps, payload]
    }
}

const EditTaapSuccessed = (state,action) =>{
    const {payload}=action
    const filterTaap = state.taaps.filter(el=>el.taapId !== payload[0].taapId)
    return {
        ...state,
        taaps: [...filterTaap,payload[0]]
    }
}

export default TaapReduce