import { createStore , combineReducers, applyMiddleware,compose} from "redux";
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer";
import { notesReducer } from "../reducers/notesReducer";

import thunk from 'redux-thunk';
 
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reduces = combineReducers({
    auth:authReducer,
    ui:uiReducer,
    notes:notesReducer
})
export const store =createStore(
    reduces,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);