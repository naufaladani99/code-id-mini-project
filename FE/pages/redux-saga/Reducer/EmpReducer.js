import * as ActionType from '../Constants/EmpConstant'

const INIT_STATE = {
    emps:[],
    emp:[]
}

const EmpReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_EMP_REQUEST:
            return {...state}
        case ActionType.GET_EMP_SUCCESS:
            return GetEmpSuccessed(state,action)
        case ActionType.GETONE_EMP_REQUEST:
            return {...state}
        case ActionType.GETONE_EMP_SUCCESS:
            return GetOneEmpSuccessed(state,action)
        default:
            return state
    }
}

const GetEmpSuccessed = (state, action) => {
    return {
        ...state,
        emps: action.payload
    }
}

const GetOneEmpSuccessed = (state, action) => {
    return {
        ...state,
        emp: action.payload
    }
}

export default EmpReducer