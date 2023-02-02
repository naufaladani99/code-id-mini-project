import * as ActionType from '../Constants/ProgConstant'

const INIT_STATE = {
    Prog:[],
    Progs:[]
}

const ProgReducer =(state = INIT_STATE,action) => {
        switch (action.type) {
            case ActionType.GET_PROG_REQUEST:
                return {...state}
            case ActionType.GET_PROG_SUCCESS:
                return GetProgSuccessed(state,action)
            case ActionType.GETONE_PROG_REQUEST:
                return {...state}
            case ActionType.GETONE_PROG_SUCCESS:
                return GetOneProgSuccessed(state,action)
            default:
                return state
        }
}

const GetProgSuccessed = (state, action) => {
    return {
        ...state,
        Progs: action.payload
    }
}

const GetOneProgSuccessed = (state, action) => {
    return {
        ...state,
        Prog: action.payload
    }
}

export default ProgReducer