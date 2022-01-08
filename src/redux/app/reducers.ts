import { Mode } from "./types";
import { ItemId } from "redux/items/types";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import * as actions from "./actions" ;

export const init = {
    selectItemId:null as (null|ItemId),
    mode:"edit" as Mode,
} ;

export const app = reducerWithInitialState(init)
    .case( actions.setSelectItemId, (state,payload)=>{
        if(state.selectItemId === payload.itemId){
            return state ;
        }
        return {
            ...state,
            selectItemId:payload.itemId,
        } ;
    } )
    .case( actions.setMode, (state,payload)=>{
        if(state.mode === payload.mode){
            return state ;
        }
        return {
            ...state,
            mode:payload.mode,
        } ;
    }) ;

