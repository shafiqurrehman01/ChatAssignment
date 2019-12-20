import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';
import {homereducer} from './home.reducer';
import { userConstants } from '../_constants';
const appReducer = combineReducers({
  authentication,
  alert,
  homereducer
});
const rootReducer = (state, action) => {
  debugger;
  if (action.type === userConstants.LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};
export default rootReducer;