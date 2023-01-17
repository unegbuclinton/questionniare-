import { combineReducers } from 'redux';
import Global from './Global/Global.reducer';

const appReducer = combineReducers({
    global: Global
});

const rootReducer = (state, action) => {
    if (action.type === 'RESET_USER_INFO') {
        state = undefined;
    }

    return appReducer(state, action);
}

export default rootReducer;