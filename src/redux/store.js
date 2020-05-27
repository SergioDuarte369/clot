import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development"){
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); ///Esta exportanción no es técnicamente necesaria

export const persistor = persistStore(store); ///Esta exportanción no es técnicamente necesaria

export default { store, persistor };