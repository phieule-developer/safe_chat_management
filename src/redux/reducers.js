import { combineReducers } from 'redux';

import authReducer from './auth/reducers';
import Layout from './layout/reducers';
import dashboardReducer from './dashboard/reducers'
import groupReducer from './group/reducers';
import conversationReducer from './conversation/reducers';

export default combineReducers({
    authReducer,
    Layout,
    dashboardReducer,
    groupReducer,
    conversationReducer
});
