import { ItemId } from "redux/items/types";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import * as actions from "./actions" ;

export const init = {
    title:"タイトル未設定",
    flows:[] as ItemId[] ,
};

export const meta = reducerWithInitialState(init) 
    .case( actions.setTitle , (state,payload)=>{
        if(state.title === payload.title) return state ;
        const newState = {
            ...state,
        } ;
        newState.title = payload.title ;
        return newState ;
    } )
    .case( actions.addFlow , (state,payload)=>{
        const newState = {...state} ;
        newState.flows = [
            ...newState.flows,
            payload.flowId
        ] ;
        return newState ;
    } )
    .case( actions.removeFlow , (state,payload)=>{
        if(!state.flows.includes(payload.flowId))return state ;
        const newState = {...state} ;
        newState.flows = newState.flows.filter(flowId=>flowId !== payload.flowId) ;
        return newState ;
    })
    .case( actions.loadMeta, (state,payload)=>{
        return payload.meta ;
    })
    ;

