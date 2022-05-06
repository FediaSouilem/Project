import userReducer from './userReducer';
import projectReducer from './projectReducer';
import { combineReducers} from 'redux';

export default combineReducers({user: userReducer, project: projectReducer});