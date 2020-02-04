import { createStore,applyMiddleware } from 'redux';
import { setIn, fromJS,Map } from 'immutable';
import thunk from "redux-thunk";

import {} from './types';

const initialState = {
};

const updateField = (state, action, field) => {
    return setIn(state, [field], action.payload);
}

const fetchStart = (state, action) => {
    const updateVal = Map({[action.field+"Fetching"]:true,[action.field+"Error"]:""});
    return state.merge(updateVal);;
}

const fetchFinish = (state, action) => {
    const updateVal = Map({[action.field+"Fetching"]:false,[action.field+"Error"]:"",[action.field]:fromJS(action.payload)});
    return state.merge(updateVal);;
}

const fetchError = (state, action) => {
    const updateVal = Map({[action.field+"Fetching"]:false,[action.field+"Error"]:action.payload});
    return state.merge(updateVal);;
}

export function reducer(state = fromJS(initialState), action) {
    switch (action.type) {
        /*
        case CHANGE_SEARCH_VALUE:
            return updateField(state, action);
        case FETCH_START:
                return fetchStart(state, action);
        case FETCH_ERROR:
            return fetchError(state, action);
        case FETCH_FINISH:
                return fetchFinish(state, action);*/
        default:
            return state;
    }
}

export const storeInstance = createStore(reducer,applyMiddleware(thunk));
