import { StoreState } from "redux/store";

export const getSelectItemId = ()=>{
    return (store :StoreState)=>store.app.selectItemId ;
} ;

export const getMode = ()=>{
    return (store :StoreState)=>store.app.mode ;
} ;
