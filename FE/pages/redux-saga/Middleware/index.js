import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeUsr from "../Constants/UsrConstant";
import * as ActionTypeCont from "../Constants/ContConstant";
import * as ActionTypeCore from "../Constants/CoreConstant";
import * as ActionTypeCorse from "../Constants/CorseConstant";
import * as ActionTypeEmp from "../Constants/EmpConstant";
import * as ActionTypeSkte from "../Constants/SkteConstant";
import * as ActionTypeSkty from "../Constants/SktyConstant";
import * as ActionTypeProg from "../Constants/ProgConstant";
import * as ActionTypeInco from "../Constants/IncoConstant";
import * as ActionTypeCosm from "../Constants/CosmConstant";
import { handleUsrSignin, handleUsrSignout, handleUsrSignup } from "./UsrMidle";
import { handleGetCont, handleGetOneCont } from "./ContMidle";
import { handleGetCore, handleGetOneCore } from "./CoreMidle";
import { handleGetCorse, handleGetOneCorse } from "./CorseMidle";
import { handleGetEmp, handleGetOneEmp } from "./EmpMidle";
import { handleGetSkte, handleGetOneSkte } from "./SkteMidle";
import { handleGetSkty, handleGetOneSkty } from "./SktyMidle";
import { handleGetProg, handleGetOneProg } from "./ProgMidle";
import { handleGetInco, handleGetOneInco } from "./IncoMidle";
import { handleGetCosm, handleGetOneCosm } from "./CosmMidle";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeUsr.GET_SIGNIN_REQUEST, handleUsrSignin),
    takeEvery(ActionTypeUsr.POST_SIGNOUT_REQUEST, handleUsrSignout),
    takeEvery(ActionTypeUsr.ADD_SIGNUP_REQUEST, handleUsrSignup),
    takeEvery(ActionTypeCont.GET_CONT_REQUEST, handleGetCont),
    takeEvery(ActionTypeCont.GETONE_CONT_REQUEST, handleGetOneCont),
    takeEvery(ActionTypeCore.GET_CORE_REQUEST, handleGetCore),
    takeEvery(ActionTypeCore.GETONE_CORE_REQUEST, handleGetOneCore),
    takeEvery(ActionTypeCorse.GET_CORSE_REQUEST, handleGetCorse),
    takeEvery(ActionTypeCorse.GETONE_CORSE_REQUEST, handleGetOneCorse),
    takeEvery(ActionTypeEmp.GET_EMP_REQUEST, handleGetEmp),
    takeEvery(ActionTypeEmp.GETONE_EMP_REQUEST, handleGetOneEmp),
    takeEvery(ActionTypeSkte.GET_SKTE_REQUEST, handleGetSkte),
    takeEvery(ActionTypeSkte.GETONE_SKTE_REQUEST, handleGetOneSkte),
    takeEvery(ActionTypeSkty.GET_SKTY_REQUEST, handleGetSkty),
    takeEvery(ActionTypeSkty.GETONE_SKTY_REQUEST, handleGetOneSkty),
    takeEvery(ActionTypeProg.GET_PROG_REQUEST, handleGetProg),
    takeEvery(ActionTypeProg.GETONE_PROG_REQUEST, handleGetOneProg),
    takeEvery(ActionTypeInco.GET_INCO_REQUEST, handleGetInco),
    takeEvery(ActionTypeInco.GETONE_INCO_REQUEST, handleGetOneInco),
    takeEvery(ActionTypeCosm.GET_COSM_REQUEST, handleGetCosm),
    takeEvery(ActionTypeCosm.GETONE_COSM_REQUEST, handleGetOneCosm),
  ]);
}

export default watchAll;
