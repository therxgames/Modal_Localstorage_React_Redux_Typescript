import { createStore, compose } from "redux";
import { rootReducer } from "./reducers";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // ДЛЯ REDUX-DEVTOOLS

export default createStore(rootReducer, composeEnhancers());