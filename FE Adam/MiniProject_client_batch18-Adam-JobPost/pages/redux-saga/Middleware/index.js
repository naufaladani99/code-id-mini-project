import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUsr from '../Constants/UsrConstant'
import * as ActionTypeJopo from '../Constants/JopoConstant'
import * as ActionTypeTaap from '../Constants/TaapConstant'
import { handleUsrSignin,handleUsrSignout,handleUsrSignup } from "./UsrMidle";
import { handleAddJopo, handleDelJopo, handleEditJopo, handleGetOneJopo, handleGetJopo } from "./JopoMidle";
import { handleAddTaap, handleAddTaapApply, handleDelTaap, handleEditTaap, handleGetOneTaap, handleGetTaap, handleGetTaapUser } from "./TaapMiddle";
function* watchAll(){
    yield all([
        
        takeEvery(ActionTypeUsr.GET_SIGNIN_REQUEST,handleUsrSignin),
        takeEvery(ActionTypeUsr.POST_SIGNOUT_REQUEST,handleUsrSignout),
        takeEvery(ActionTypeUsr.ADD_SIGNUP_REQUEST,handleUsrSignup),

        takeEvery(ActionTypeJopo.GET_JOPO_REQUEST,handleGetJopo),
        takeEvery(ActionTypeJopo.GETONE_JOPO_REQUEST,handleGetOneJopo),
        takeEvery(ActionTypeJopo.ADD_JOPO_REQUEST,handleAddJopo),
        takeEvery(ActionTypeJopo.DEL_JOPO_REQUEST,handleDelJopo),
        takeEvery(ActionTypeJopo.EDIT_JOPO_REQUEST,handleEditJopo),

        takeEvery(ActionTypeTaap.GET_TAAP_REQUEST,handleGetTaap),
        takeEvery(ActionTypeTaap.GET_TAAPUSER_REQUEST,handleGetTaapUser),
        takeEvery(ActionTypeTaap.GETONE_TAAP_REQUEST,handleGetOneTaap),
        takeEvery(ActionTypeTaap.ADD_TAAP_REQUEST,handleAddTaap),
        takeEvery(ActionTypeTaap.ADD_TAAPAPPLY_REQUEST,handleAddTaapApply),
        takeEvery(ActionTypeTaap.DEL_TAAP_REQUEST,handleDelTaap),
        takeEvery(ActionTypeTaap.EDIT_TAAP_REQUEST,handleEditTaap)
    ])
}

export default watchAll