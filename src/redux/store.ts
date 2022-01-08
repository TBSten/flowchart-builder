import { combineReducers, createStore, } from "redux" ;
import { items } from "redux/items/reducers" ;
import { app } from "./app/reducers";
import { meta } from "./meta/reducers";

export const rootReducer = combineReducers({
    items,
    meta,
    app,
}) ;
export const store = createStore(rootReducer) ;
export type StoreState = ReturnType<typeof store.getState> ;
