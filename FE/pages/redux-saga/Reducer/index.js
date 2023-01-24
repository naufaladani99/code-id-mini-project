import { combineReducers } from "redux";
import UsrReducer from "./UsrReducer";
import bootcampReducer from "./BootcampReducer";
import usersReducer from "./UsersReducer";

const rootReducer = combineReducers({
  usrStated: UsrReducer,
  bootcampStated: bootcampReducer,
  usersStated: usersReducer,
});

export default rootReducer;
