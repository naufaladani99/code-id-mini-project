import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import curriculumReducer from './curriculumReducer';
import UsrReducer from './UsrReducer';

const rootReducer = combineReducers({
  usrStated: UsrReducer,
  profile: profileReducer,
  curriculum: curriculumReducer,
});

export default rootReducer;
