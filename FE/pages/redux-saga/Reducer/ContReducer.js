import * as ActionType from '../Constants/ContConstant'

const INIT_STATE = {
    cont:[],
    conts:[]
}

const ContReducer =(state = INIT_STATE,action) => {
        switch (action.type) {
            case ActionType.GET_CONT_REQUEST:
                return {...state}
            case ActionType.GET_CONT_SUCCESS:
                return GetContSuccessed(state,action)
            case ActionType.GETONE_CONT_REQUEST:
                return {...state}
            case ActionType.GETONE_CONT_SUCCESS:
                return GetOneContSuccessed(state,action)
            default:
                return state
        }
}

const GetContSuccessed = (state, action) => {
    return {
        ...state,
        conts: action.payload
    }
}

const GetOneContSuccessed = (state, action) => {
    return {
        ...state,
        cont: action.payload
    }
}

export default ContReducer