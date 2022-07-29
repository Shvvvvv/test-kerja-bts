import { applyMiddleware, createStoreHook } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const store = createStoreHook(reducers, applyMiddleware(thunk));

export default store;
