import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

// Import reducers here
import auth from 'app/reducers.js';

const NODE_ENV = process.env.NODE_ENV;

const storeFactory = (initialState) => {
    const rootReducer = combineReducers({ auth });
    const middleware = [thunk];

    const devToolComposition = compose(
        applyMiddleware(...middleware),
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )(createStore);

    const factory = process.env.NODE_ENV !== 'production' ? devToolComposition : applyMiddleware(...middleware)(createStore);
    const store = factory(rootReducer, initialState);
    return store;
};

export default storeFactory;
