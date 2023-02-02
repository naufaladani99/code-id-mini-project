import { combineReducers } from "redux";
import UsrReducer from "./UsrReducer";
import ContReducer from "./ContReducer";
import CoreReducer from "./CoreReducer";
import CorseReducer from "./CorseReducer";
import EmpReducer from "./EmpReducer";
import SkteReducer from "./SkteReducer";
import SktyReducer from "./SktyReducer";
import ProgReducer from "./ProgReducer";
import IncoReducer from "./IncoReducer";
import CosmReducer from "./CosmRecuder";

const rootReducer = combineReducers({
  usrStated: UsrReducer,
  contStated: ContReducer,
  coreStated: CoreReducer,
  corseStated: CorseReducer,
  empStated: EmpReducer,
  skteStated: SkteReducer,
  sktyStated: SktyReducer,
  progStated: ProgReducer,
  incoStated: IncoReducer,
  cosmStated: CosmReducer,
});

export default rootReducer;
