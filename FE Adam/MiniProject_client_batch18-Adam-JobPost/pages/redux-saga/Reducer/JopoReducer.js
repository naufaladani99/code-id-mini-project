import * as ActionType from '../Constants/JopoConstant'

const INIT_STATE = {
    jopos:[],
    jopo:[]
}

const JopoReduce =(state = INIT_STATE,action) => {
    switch (action.type) {
        case ActionType.GET_JOPO_REQUEST:
            return {...state}
        case ActionType.GET_JOPO_SUCCESS:
            return GetJopoSuccessed(state,action)
        case ActionType.GETONE_JOPO_REQUEST:
            return {...state}
        case ActionType.GETONE_JOPO_SUCCESS:
            return GetOneJopoSuccessed(state,action)
        case ActionType.ADD_JOPO_REQUEST:
            return {...state}
        case ActionType.ADD_JOPO_SUCCESS:
            return AddJopoSuccessed(state,action)
        case ActionType.DEL_JOPO_REQUEST:
            return {...state}
        case ActionType.DEL_JOPO_SUCCESS:
            return DelJopoSuccessed(state,action)
        case ActionType.EDIT_JOPO_REQUEST:
            return {...state}
        case ActionType.EDIT_JOPO_SUCCESS:
            return EditJopoSuccessed(state,action)
        default:
            return GetJopoSuccessed(state,action)
    }
}

const GetJopoSuccessed = (state,action) => {
    return {
        ...state,
        jopos: action.payload
    }
}

const GetOneJopoSuccessed = (state,action) =>{
    return {
        ...state,
        jopo:action.payload
    }
}

const DelJopoSuccessed = (state,action) => {
    const {payload} = action
    const filterJopo = state.jopos.filter(el=>el.jopoId !== Number(payload.jopoId))
    return {
        ...state,
        jopos:[...filterJopo]
    }
}

const AddJopoSuccessed = (state,action)=>{
    const {payload} = action
    return{
        ...state,
        jopos:[...state.jopos, payload]
    }
}

const EditJopoSuccessed = (state,action) =>{
    const {payload}=action
    const filterJopo = state.jopos.filter(el=>el.jopoId !== payload[0].jopoId)
    return {
        ...state,
        jopos: [...filterJopo,payload[0]]
    }
}

export default JopoReduce