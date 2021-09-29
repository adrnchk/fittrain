import { combineReducers } from "redux";
import userReducer from "./userReducer";
import exerciseReducer from "./exerciseReducer";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["userReducer"],
// };
const rootReducer = combineReducers({ userReducer, exerciseReducer });
export default rootReducer;
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export default persistedReducer;
