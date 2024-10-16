import { createStore,combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import todoReducer from "./todolist.reducer";
import productReducer from "./product.reducer";
var store = createStore(combineReducers({counterReducer,todoReducer,productReducer}))
export default store;