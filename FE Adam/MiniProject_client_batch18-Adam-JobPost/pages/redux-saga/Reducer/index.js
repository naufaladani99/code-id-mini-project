import { combineReducers } from "redux";
import UsrReducer from "./UsrReducer";
import JopoReduce from "./JopoReducer";
import TaapReduce from "./TaapReducer";

const rootReducer = combineReducers({
    usrStated: UsrReducer,
    jopoStated: JopoReduce,
    taapStated: TaapReduce
})

export default rootReducer