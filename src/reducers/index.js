import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import storiesReducer from "./storiesReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    stories: storiesReducer,

})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))