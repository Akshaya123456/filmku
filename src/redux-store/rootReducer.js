import {combineReducers} from 'redux';

import {dashboardReducer} from './reducer/dashboardReducer';
import {searchReducer} from './reducer/searchReducer';

const appReducer = combineReducers({
  dashboard: dashboardReducer,
  search: searchReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
