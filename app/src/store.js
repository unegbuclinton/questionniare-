import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import reducers from './reducers';

const configureStore = (initialState = {}) => {
    const middlewares = [reduxPromise, reduxThunk];

    if (process.env.NODE_ENV === `development`) {       
        middlewares.push(logger);
    }

    const enhancer = compose(
        applyMiddleware(
            ...middlewares
        )
    );
    
    return createStore(reducers, initialState, enhancer)
};

const store = configureStore({});

export default store;