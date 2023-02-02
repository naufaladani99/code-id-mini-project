import { combineReducers } from "redux";
import ClientReducer from "./ClientReducer";
import JobCategoryReducer from "./JobCategoryReducer";
import JobPostReducer from "./JobPostReducer";
import JobTypeReducer from "./JobTypeReducer";
import UsrReducer from "./UsrReducer";

const rootReducer = combineReducers({
  usrStated: UsrReducer,
  jotyStated: JobTypeReducer,
  jocaStated: JobCategoryReducer,
  jopoStated: JobPostReducer,
  clitStated: ClientReducer
});

export default rootReducer;
