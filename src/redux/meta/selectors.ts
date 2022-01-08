import { StoreState } from "redux/store";

export const getTitle = ()=>{
    return (state:StoreState)=>state.meta.title ;
} ;
export const getFlows = ()=>{
    return (state:StoreState)=>state.meta.flows ;
} ;
