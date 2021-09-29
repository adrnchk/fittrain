import { createStore, applyMiddleware } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";
//import logger from "redux-logger";
//import persisredReducer from "./reducers/rootReducer";
import rootReducer from "./reducers/rootReducer"
// export const store = createStore(
//   persisredReducer,
//   composeWithDevTools(applyMiddleware(logger))
// );

// export const store = createStore(persisredReducer);
// export const persistor = persistStore(store);

// export default { store, persistor };


export const store = createStore(rootReducer);
export default store;